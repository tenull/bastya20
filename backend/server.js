import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// ✅ CORS: csak a frontend origin legyen engedélyezve
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Preflight (OPTIONS) kezelése
app.options("*", cors());

app.use(express.json());

app.use("/api", contactRoutes);

app.get("/", (req, res) => res.send("Backend OK"));

app.listen(8000, () => console.log("Server running on port 8000"));
