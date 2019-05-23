export default expression => arr => {
  let _ = arr;
  return typeof expression == "function"
    ? _.map(res => expression(res))
    : typeof expression == "string"
    ? _.map(res => res[expression])
    : _.map(res => res);
};
