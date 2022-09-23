import express from "express";
import indexRouter from "./routes";
import cors from "cors";

var app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", indexRouter);
app.get("/ping", (_, res) => {
  res.json({ status: "ok" });
});

const errorHandler = (err, _, res) => {
  console.log(`error ${err.message}`);
  const status = err.status || 400;
  res.status(status).json({ error: err.message });
};
app.use(errorHandler);

export default app;
