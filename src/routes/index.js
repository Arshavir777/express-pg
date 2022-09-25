import express from "express";
import itemRouter from "./item.routes";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.json({ message: "Welcome Test API" }));
indexRouter.get("/ping", (req, res) => {
  res.json({ status: "ok" });
});
indexRouter.use("/items", itemRouter);

export default indexRouter;
