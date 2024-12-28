import express from "express";
import { Feedback } from "../models/feedback.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const feedback = new Feedback({ name, email, message });

  try {
    await feedback.save();
    res.status(200).json({ message: "Feedback saved successfully" });
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
});

export { router as feedbackRouter };
