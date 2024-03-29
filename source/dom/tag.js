import { map, pipe, replace, join } from "../index";

const encodeAttribute = (x = "") => replace(x)(/"/g, "&quot;");
const toAttributeString = (x = {}) =>
  pipe(join(" "))(
    map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`)(
      Object.keys(x)
    )
  );

const tagAttributes = x => c =>
  `<${x.tag}${x.attr ? " " : ""}${toAttributeString(x.attr)}>${c}</${x.tag}>`;

export default x =>
  typeof x === "string" ? tagAttributes({ tag: x }) : tagAttributes(x);
