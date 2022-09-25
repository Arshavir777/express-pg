import { DB_CONDITIONS, DB_ORDERS } from "../constants/db";
import {
  filterValidator,
  paginationValidator,
  sortValidator,
} from "../lib/validator";
import { Item } from "../models";

module.exports = function (data) {
  // TODO: add field type validations

  const errors = [
    ...filterValidator(data, Item.FIELDS, Object.values(DB_CONDITIONS)),
    ...paginationValidator(data),
    ...sortValidator(data, Item.FIELDS, Object.values(DB_ORDERS)),
  ];
  return errors;
};
