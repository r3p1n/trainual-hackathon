export function removeEmptyValue(data) {
  const clone = Object.assign({}, data);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] === undefined ||
        clone[key] === null ||
        clone[key].length === 0) &&
      delete clone[key]
  );
  return clone;
}