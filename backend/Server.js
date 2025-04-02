const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = process.env.GOOGLE_API_KEY; // Store your API key in .env

app.post("/api/get-disease-info", async (req, res) => {
  try {
    const { disease } = req.body;

    const prompt = `Provide a professional and structured description of the plant disease ${disease}. Clearly explain its **cause, symptoms, and impact** in complete sentences. Then, present a **step-by-step cure and prevention plan** using bullet points and numbered steps for clarity. Use **bold styling** for key terms. Keep the response concise yet complete within 300 words. Ensure proper formatting without markdown symbols.`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
    };

    const response = await axios.post(`${GOOGLE_API_URL}?key=${API_KEY}`, payload);
    res.json(response.data);
    // console.log(response.data);
  } catch (error) {
    console.error("Error calling Gemini API:", error?.response?.data || error.message);
    res.status(error?.response?.status || 500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000")
  console.log(API_KEY)
}
);
