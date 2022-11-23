import dotenv from "dotenv";
dotenv.config();

import connectToDB from "./database.js";
connectToDB();
import express from "express";
import cors from "cors";
import router from "./routes/userRouter.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

export default app;
