import express from "express";
import { calculateStats } from "../services/statEngine.js";

const router = express.Router();

router.post("/calculate", (req, res) => {
  const { champion, items, runes, level } = req.body;

  const result = calculateStats(champion, items, runes, level);
  res.json(result);
});

export default router;
