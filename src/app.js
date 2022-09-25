import cors from "cors";
import express from "express";
import indexRouter from "./routes";
import { errorHandler } from "./middlewares";

var app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", indexRouter);

app.use(errorHandler);

export default app;
