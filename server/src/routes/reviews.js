import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const review = fs.readFileSync("./src/static/reviews.json", "utf-8");
  const parsedReview = JSON.parse(review);
  res.status(200).json(parsedReview);
});

export { router as reviewsRouter };
