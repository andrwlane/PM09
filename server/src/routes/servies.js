import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const services = fs.readFileSync("./src/static/services.json", "utf-8");
  const parsedServices = JSON.parse(services);
  res.status(200).json(parsedServices);
});

export { router as servicesRouter };
