import express from "express";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.js";
import calcRoutes from "./routes/calcRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://buildforge.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "BuildForge backend running" });
});

app.use("/api", dataRoutes);
app.use("/api", calcRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
