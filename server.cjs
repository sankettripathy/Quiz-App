// import express from "express";
// import cors from "cors";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Enable CORS for all origins
// app.use(cors());

// // Parse JSON bodies
// app.use(express.json());

// // Groq / OpenAI API endpoint
// const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// // POST /api/quiz
// app.post("/api/quiz", async (req, res) => {
//   const { topic } = req.body;

//   if (!topic) {
//     return res.status(400).json({ error: "Topic is required" });
//   }

//   const prompt = `
// Generate 5 multiple choice questions about ${topic}.
// Return it in JSON format:
// { "question": "...", "options": ["opt1","opt2","opt3","opt4"], "answerIndex": 0 }
// Output only JSON.
//   `.trim();

//   try {
//     const response = await axios.post(
//       GROQ_API_URL,
//       {
//         model: "mixtral-8x7b-32768",
//         messages: [{ role: "user", content: prompt }],
//         temperature: 0.5,
//         max_tokens: 150,
//         top_p: 1,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//         },
//       }
//     );

//     const content = response.data.choices?.[0]?.message?.content;

//     if (!content) {
//       return res.status(500).json({ error: "No content returned from API" });
//     }

//     // Return JSON directly to frontend
//     const question = JSON.parse(content);
//     res.json({ question });
//   } catch (err: any) {
//     console.error(err.response?.data || err.message);
//     res.status(500).json({ error: "Failed to fetch question from API" });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
const { Groq } = require('groq-sdk');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const GROQ_API_KEY = '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';
// Enable CORS for your frontend
app.use(cors({ origin: "http://localhost:8080" })); // replace 5173 with your Vite frontend port
app.use(express.json());

// Route to fetch quiz questions
app.get("/api/questions/:topic", async (req, res) => {
  try {
    const topic = req.params.topic;
    const groq = new Groq({ apiKey: GROQ_API_KEY });

    const prompt = `
        Generate 5 multiple choice questions about ${topic}.
        Return it in JSON format:
        { "question": "string", 
        "options": ["opt1","opt2","opt3","opt4"], 
        "answerIndex": 0,
        "explanation": "string" }
        Output only JSON.
        Provide a short explanation for the correct answer.
    `.trim();

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      max_tokens: 2000
    });

    const aiResponse = completion.choices[0].message.content;

    const question = JSON.parse(aiResponse); // convert string to JSON
    res.json({ question });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch question from OpenAI" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
