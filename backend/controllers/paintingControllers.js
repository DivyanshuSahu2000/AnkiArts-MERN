import Painting from "../models/Painting.js";

export const getPaintings = async (req, res) => {
  try {
    const paintings = await Painting.find();
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPaintings = async (req, res) => {
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
};

export const deletePaintings = async (req, res) => {
  try {
    const deletedPainting = await Painting.findByIdAndDelete(req.params.id);

    if (!deletedPainting) {
      return res.status(404).json({ message: "Painting not found" });
    }
    res.json({ message: "Painting deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updatePaintig = async (req, res) => {
  try {
    const updatedPainting = await Painting.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        price: req.body.price,
        size: req.body.size,
        category: req.body.category,
        image: req.body.image,
        rimage: req.body.rimage,
        desc: req.body.desc,
      },
      { new: true }
    );
    if (!updatePaintig) {
      return res.status(404).json({ message: "Painting not found" });
    }

    res.json(updatedPainting);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
