import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import { products } from "./data/products.js";

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_PATH);
        console.log("DB CONNECT");
    } catch (error) {
        console.log("DB ERROR", error);
    }
}

main();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads"));

app.get("/products", (req, res) => {
    return res.status(200).json(products);
});

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("SERVER IS START");
});
