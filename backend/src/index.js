import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "BuildForge backend running" });
});

// Placeholder routes
app.get("/champions", (req, res) => {
  res.json({ message: "Champion data will go here" });
});

app.get("/items", (req, res) => {
  res.json({ message: "Item data will go here" });
});

app.get("/runes", (req, res) => {
  res.json({ message: "Rune data will go here" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
