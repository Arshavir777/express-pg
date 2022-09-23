import express from "express";
import { itemController } from "../controllers";

const itemRouter = express.Router();

itemRouter.get("/", itemController.getAll);
itemRouter.post("/", itemController.store);

export default itemRouter;
