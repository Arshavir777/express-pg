import express from "express";
import { itemController } from "../controllers";
import { validator } from "../middlewares";
import { itemList, itemStore } from "../validators";

const itemRouter = express.Router();

itemRouter.get("/", validator(itemList, "query"), itemController.getAll);
itemRouter.post("/", validator(itemStore, "body"), itemController.store);

export default itemRouter;
