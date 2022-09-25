module.exports = function (data, allowedFields, allowedOrders) {
  const errors = [];

  const sortBy = data.sort && Object.keys(data.sort)[0];
  const orderBy = data.sort && data.sort[sortBy];

  const isSortByRequired = "sort" in data && !sortBy;
  const isSortByInvalid = data.sort && !allowedFields.includes(sortBy);

  const isSortOrderRequired = !data.sort;
  const isSortOrderInvalid = data.sort && !allowedOrders.includes(orderBy);

  if ("sort" in data) {
    if (isSortByRequired) {
      errors.push({
        key: "sort.by",
        message: "sort by is required",
      });
    }

    if (!errors.length && isSortByInvalid) {
      errors.push({
        key: "sort.by",
        message: `sort by must be one of [${allowedFields.join(",")}]`,
      });
    }

    if (isSortOrderRequired) {
      errors.push({
        key: "sort.by",
        message: "sort by is required",
      });
    }

    if (!errors.length && isSortOrderInvalid) {
      errors.push({
        key: "sort.order",
        message: `sort order must be one of [${allowedOrders.join(",")}]`,
      });
    }
  }

  return errors;
};
