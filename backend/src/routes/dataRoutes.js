import express from "express";
import { fetchChampions, fetchItems, fetchRunes } from "../services/riotService.js";
import { normalizeChampions, normalizeItems, normalizeRunes } from "../services/normalizeService.js";

const router = express.Router();

router.get("/champions", async (req, res) => {
  const raw = await fetchChampions();
  res.json(normalizeChampions(raw));
});

router.get("/items", async (req, res) => {
  const raw = await fetchItems();
  res.json(normalizeItems(raw));
});

router.get("/runes", async (req, res) => {
  const raw = await fetchRunes();
  res.json(normalizeRunes(raw));
});

export default router;
