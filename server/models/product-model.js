import mongoose from "mongoose";

const { Schema } = mongoose;

// Sub-schema for doughTypes without _id
const doughTypeSchema = new Schema(
  {
    type: String,
    factor: Number,
  },
  { _id: false } // Prevent creation of _id for this subdocument
);

// Sub-schema for sizeTypes without _id
const sizeTypeSchema = new Schema(
  {
    size: Number,
    factor: Number,
  },
  { _id: false } // Prevent creation of _id for this subdocument
);

// Main schema for products
const productSchema = new Schema({
  name: { type: String, required: true },
  imgPath: { type: String, required: true },
  basePrice: { type: Number, required: true },
  doughTypes: [doughTypeSchema], // Using the sub-schema without _id
  sizeTypes: [sizeTypeSchema],   // Using the sub-schema without _id
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
