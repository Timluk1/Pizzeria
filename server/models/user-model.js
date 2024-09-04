import mongoose, { Schema } from "mongoose";

const UserSheama = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", UserSheama);
