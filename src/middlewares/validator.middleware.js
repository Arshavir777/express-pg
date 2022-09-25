import { ERROR_BAD_REQUEST } from "../constants/errors";

module.exports = (validate, property) => {
  return (req, res, next) => {
    const errors = validate(req[property]);

    if (!errors.length) {
      return next();
    }

    res.status(422).json({
      statusCode: 422,
      error: ERROR_BAD_REQUEST,
      details: errors,
    });
  };
};
