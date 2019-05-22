module.exports = (array, arg) => {
  return typeof arg == "function"
    ? array.map(res => arg(res))
    : typeof arg == "string"
    ? array.map(res => res[arg])
    : array.map(res => res);
};
