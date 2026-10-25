import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config(); // .env file ki values load karta hai
connectDB();

const app = express();

app.use(cors()); // frontend (5173) ko backend (5000) call karne deta hai
app.use(express.json()); // request body ko JSON mein padhta hai

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));