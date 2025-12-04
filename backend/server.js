import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendContactEmail } from "./contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    const result = await sendContactEmail(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
    throw err; // so your Express route sends a 500
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
