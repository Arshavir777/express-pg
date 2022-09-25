module.exports = function (data) {
  const errors = [];

  const isSizeNumber = data.size && isNaN(+data.size);
  const isPageNumber = data.page && isNaN(+data.page);

  if (isSizeNumber) {
    errors.push({
      key: "size",
      message: "size is not a number",
    });
  }

  if (isPageNumber) {
    errors.push({
      key: "page",
      message: "page is not a number",
    });
  }

  return errors;
};
