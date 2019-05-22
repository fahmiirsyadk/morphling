const { map, pipe, replace, join } = require("../index");

const encodeAttribute = (x = "") => replace(x)(/"/g, "&quot;");
const toAttributeString = (x = {}) =>
  pipe(join(" "))(
    map(
      Object.keys(x),
      attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`
    )
  );

const tagAttributes = x => c =>
  `<${x.tag}${x.attr ? " " : ""}${toAttributeString(x.attr)}>${c}</${x.tag}>`;

module.exports = x =>
  typeof x === "string" ? tagAttributes({ tag: x }) : tagAttributes(x);
