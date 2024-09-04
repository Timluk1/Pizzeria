import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { router } from "./router/index.js";
import errorMiddleware from "./middlewares/error-middleware.js"

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_PATH);
        console.log("DB CONNECT");
    } catch (error) {
        console.log("DB ERROR", error);
    }
}

const corsOptions = {
    origin: 'http://localhost:5173', // Замените на ваш клиентский домен
    credentials: true, // Разрешить отправку cookies и других учетных данных
  };

main();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use("/images", express.static("uploads"));
app.use(errorMiddleware);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("SERVER IS START");
});

