import express from "express";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.js";
import calcRoutes from "./routes/calcRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://build-forge-aebsehqd8-buildforge.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
  if (!origin ||
    origin.includes("build-forge") && origin.endsWith(".vercel.app") ||
    origin === "http://localhost:5173"
  ) {
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
    },
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
  })
);


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