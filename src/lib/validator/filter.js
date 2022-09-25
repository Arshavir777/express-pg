module.exports = function (data, allowedFields, allowedConditions) {
  const errors = [];
  const isFilterFieldRequired = !data.filter?.field;
  const isFilterFieldInvalid =
    data.filter?.field && !allowedFields.includes(data.filter?.field);

  const isFilterConditionRequired = !data.filter?.condition;
  const isFilterConditionInvalid =
    data.filter?.field && !allowedConditions.includes(data.filter?.condition);

  const isFilterValueRequired = !data.filter?.value;

  if ("filter" in data) {
    if (isFilterFieldRequired) {
      errors.push({
        key: "filter.field",
        message: "filter.field is required",
      });
    }

    if (!errors.length && isFilterFieldInvalid) {
      errors.push({
        key: "filter.field",
        message: `filter.field must be one of [${allowedFields.join(",")}]`,
      });
    }

    if (isFilterConditionRequired) {
      errors.push({
        key: "filter.condition",
        message: "filter.condition is required",
      });
    }

    if (!errors.length && isFilterConditionInvalid) {
      errors.push({
        key: "filter.condition",
        message: `filter.condition must be one of [${allowedConditions.join(
          ","
        )}]`,
      });
    }

    if (isFilterValueRequired) {
      errors.push({
        key: "filter.value",
        message: `filter.value is required`,
      });
    }
  }

  return errors;
};
