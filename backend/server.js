import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import paintingRoutes from "./routes/paintingRoutes.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
connectDB();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("success");
});

app.use("/api/paintings", paintingRoutes);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
