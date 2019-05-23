export default array => {
  var unique_array = Array.from(new Set(array));
  return unique_array;
};
