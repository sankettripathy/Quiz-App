


const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
const { Groq } = require('groq-sdk');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const GROQ_API_KEY = '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';

app.use(cors({ origin: "http://localhost:8080" })); 
app.use(express.json());


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

    const question = JSON.parse(aiResponse); 
    res.json({ question });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch question from OpenAI" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

