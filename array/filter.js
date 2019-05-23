module.exports = expression => arr => {
  let _ = arr;
  return typeof expression == "function"
    ? _.filter(res => expression(res))
    : typeof expression == "string"
    ? _.filter(res => res[expression])
    : _.filter(res => res);
};
