import express from "express";
import Painting from "../models/Painting.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const paintings = await Painting.find();
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log("POST route hit");
    const { title, price, desc, size, category, image, rimage } = req.body;
    console.log("BODY:", req.body);
    const painting = new Painting({
      title,
      price,
      desc,
      size,
      category,
      image,
      rimage,
    });
    const savedPainting = await painting.save();
    res.status(201).json(savedPainting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
