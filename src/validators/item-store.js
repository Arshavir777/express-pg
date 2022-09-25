const { Item } = require("../models");

module.exports = function (data) {
  const errors = [];

  Item.FIELDS.map((field) => {
    if (!Object.keys(data).includes(field)) {
      errors.push({
        key: field,
        message: `${field} is required`,
      });
    }
  });
  return errors;
};
