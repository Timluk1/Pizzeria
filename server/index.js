import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./router/index.js";
import errorMiddleware from "./middlewares/error-middleware.js"
import { main2 } from "./data/products.js";
import "dotenv/config";

async function main() {
    try { 
        await mongoose.connect(process.env.MONGO_PATH);
        await main2();
        console.log("DB CONNECT");
    } catch (error) {
        console.log("DB ERROR", error);
    }
}

main();

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL, 
    credentials: true, 
    optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);
app.use("/images", express.static("uploads"));
app.use(errorMiddleware);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("SERVER IS START");
});

