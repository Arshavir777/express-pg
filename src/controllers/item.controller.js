import { getPagination, getPagingData } from "../helpers";
import { Item } from "../models";

const getAll = async (req, res, next) => {
  try {
    const { page, size, filter, sort } = req.query;
    const { limit, offset } = getPagination(page, size);
    const data = await Item.findAndCountAll({ limit, offset, filter, sort });

    res.json(getPagingData(data, page, limit));
  } catch (error) {
    next(error);
  }
};

const store = async (req, res, next) => {
  try {
    const data = req.body;
    const item = await Item.insert(data);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export { getAll, store };
