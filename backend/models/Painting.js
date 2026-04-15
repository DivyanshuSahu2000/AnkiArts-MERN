import mongoose from "mongoose";

const paintingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    rimage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Painting = mongoose.model("Painting", paintingSchema);
//in database created a collection as -> paintings - because mongobd atomatically make it in lowecase and pluralised.
export default Painting;
