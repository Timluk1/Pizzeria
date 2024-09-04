import mongoose, { Schema } from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        products: [
            {
                productId:  { type: Schema.Types.ObjectId, ref: "Product" },
                doughType: { type: String, required: true },
                sizeType: { type: Number, required: true },
                quantity: { type: Number, required: true },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Cart", CartSchema);
