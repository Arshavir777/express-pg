import express from "express";
import { itemController } from "../controllers";
import { validator } from "../middlewares";
import schemas from "../schemas";

const itemRouter = express.Router();

itemRouter.get(
  "/",
  validator(schemas.itemList, "query"),
  itemController.getAll
);
itemRouter.post(
  "/",
  validator(schemas.itemStore, "body"),
  itemController.store
);

export default itemRouter;
