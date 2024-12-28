import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { reviewsRouter } from "./routes/reviews.js";
import { servicesRouter } from "./routes/servies.js";
import { feedbackRouter } from "./routes/feedback.js";

const app = express();
const port = 3001;
const dbUrl =
  "mongodb+srv://andrew:andrewpassword@pm09.tff8t.mongodb.net/?retryWrites=true&w=majority&appName=PM09";

await mongoose.connect(dbUrl);

app.use(cors());
app.use(express.json());
app.use("/reviews", reviewsRouter);
app.use("/services", servicesRouter);
app.use("/feedback", feedbackRouter);

app.post("/calculate-cost", (req, res) => {
  const {
    square,
    floors,
    foundationType,
    wallMaterial,
    roofType,
    additionalOptions,
  } = req.body;

  const availableFoundationTypes = ["Бетонный", "Кирпичный", "Монолитный"];
  const availableWallMaterials = ["Кирпич", "Дерево", "Газобетон"];
  const availableRootTypes = ["Плоская", "Скатная"];
  const availableAdditionalOptions = ["Гараж", "Терасса", "Балкон"];

  // Формула для примера, заменить на любую по требованиям
  const cost = square * 10000 + floors * 10000;
  res.json({ cost });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
