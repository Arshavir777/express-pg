import Joi from "joi";
import { Item } from "../models";
import { DB_ORDERS, DB_CONDITIONS } from "../constants/db";

const paginationSchemaKeys = {
  page: Joi.number(),
  size: Joi.number(),
};

const schemas = {
  itemList: Joi.object().keys({
    ...paginationSchemaKeys,
    sort: Joi.object().keys(
      Item.FIELDS.reduce((res, item) => {
        res[item] = Joi.string().valid(...Object.values(DB_ORDERS));
        return res;
      }, {})
    ),
    filter: Joi.object().keys({
      field: Joi.string()
        .required()
        .valid(...Item.FIELDS),
      condition: Joi.string()
        .required()
        .valid(...Object.values(DB_CONDITIONS)),
      value: Joi.any().required(),
    }),
  }),
  itemStore: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
  }),
};

export default schemas;
