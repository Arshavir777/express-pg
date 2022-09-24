import { ERROR_BAD_REQUEST } from "../constants/errors";

module.exports = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);
    if (!error) {
      return next();
    }

    const { details } = error;
    res.status(422).json({
      statusCode: 422,
      error: ERROR_BAD_REQUEST,
      message: details.map(({ message }) => message),
    });
  };
};
