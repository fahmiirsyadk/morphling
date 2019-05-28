export default expression => arr => {
  let _ = arr;
  return typeof expression == "function"
    ? _.flatMap(res => expression(res))
    : typeof expression == "string"
    ? _.flatMap(res => res[expression])
    : _.flatMap(res => res);
};
