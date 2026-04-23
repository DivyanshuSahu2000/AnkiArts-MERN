import express from "express";
import Painting from "../models/Painting.js";
import {
  createPaintings,
  deletePaintings,
  getPaintings,
  updatePaintig,
} from "../controllers/paintingControllers.js";

const router = express.Router();

router.get("/", getPaintings);
// router.get("/", async (req, res) => {
//   try {
//     const paintings = await Painting.find();
//     res.json(paintings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    const painting = await Painting.findById(req.params.id);

    if (!painting) {
      return res.status(404).json({ message: "Painting not found" });
    }

    res.json(painting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/", createPaintings);
router.delete("/:id", deletePaintings);
router.put("/:id", updatePaintig);

export default router;
