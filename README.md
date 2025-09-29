Quiz App 🎯

An interactive quiz application built with React + TypeScript + TailwindCSS. It supports smooth navigation, dynamic questions, and AI-powered prompt refinements. It also has dark mode feature and has loading screen in between every page.

🔗 Live Demo: https://quiz-app-eight-mocha.vercel.app/


📌 Overview

The Quiz App allows users to take quizzes with real-time feedback. It showcases:

Clean UI with responsive design.

State management for handling questions, answers, and score.

Backend integration (server.cjs) for API calls.


⚙️ Architecture

Frontend: React (Vite) + TypeScript + TailwindCSS

Backend: Express.js (server.cjs) for API handling

State Management: React Hooks (useState, useEffect) for quiz flow, loading states, and error handling.

Build Tool: Vite for fast bundling.


🤖 Prompts & Refinements

This app was built with the help of AI. The following prompt categories were refined:

UI Prompts: Designing quiz UI screens (questions, scorecard, navigation).

Code Prompts: Error handling, async API calls, and modular components.

Refinements: Iteratively improved question rendering and result display.


🚀 Getting Started
1. Clone repo
git clone https://github.com/sankettripathy/Quiz-App.git
cd Quiz-App

2. Install dependencies
npm install

3. Run frontend
npm run dev

4. Run backend
node server.cjs


🐞 Known Issues

1) It takes a little while to load the questions.

2) No database persistence (score resets on refresh).


🔮 Future Improvements

1) Add authentication and user profiles.

2) Store quiz history in a database.

3) Add more question categories & difficulty levels.


🔧 Problems Faced

1) Fetching quiz data from the backend sometimes caused delays or failed requests.
   
2) Setting up server.cjs with Express for API calls was tricky at first.
   
3) Adjusting CSS with Tailwind to ensure proper responsiveness.










