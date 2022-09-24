import cors from "cors";
import express from "express";
import indexRouter from "./routes";
import { errorHandler } from "./middlewares";

var app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", indexRouter);
app.get("/ping", (_, res) => {
  res.json({ status: "ok" });
});

app.use(errorHandler);

export default app;
