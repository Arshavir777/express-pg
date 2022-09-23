import express from "express";
import itemRouter from "./item.routes";

const indexRouter = express.Router();

indexRouter.use("/items", itemRouter);

indexRouter.get("/", (req, res) =>
  res.json({ message: "Welcome to Express API template" })
);

export default indexRouter;
