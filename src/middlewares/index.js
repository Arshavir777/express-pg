import { ERROR_INTERNAL } from "../constants/errors";
import validator from "./validator.middleware";

const errorHandler = (err, req, res, next) => {
  console.log(`error ${err.message}`);
  const statusCode = err.status || 400;
  res.status(statusCode).json({
    statusCode,
    error: ERROR_INTERNAL,
    message: [err.message],
  });
};

export { errorHandler, validator };
