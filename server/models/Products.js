import mongoose from "mongoose";

const ProductsSheama = new mongoose.Schema(
    {
        name: { type: String, unique: true },
        price: { type: Number },
        pathImage: { type: String },
        type: {type: String },
        size: { type: Number}, 
        countInCart: { type: Number },
    },
    {
        timestamps: true,
    }
);


export default mongoose.model("Products", ProductsSheama)
