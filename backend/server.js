import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
