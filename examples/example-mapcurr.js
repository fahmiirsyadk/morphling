const { pipe, compose, join, uppercase, lowercase, uniq } = require("../index");
const { tag } = require("../dom");

const map = expression => arr => {
  return typeof expression == "function"
    ? arr.map(res => expression(res))
    : typeof expression == "string"
    ? arr.map(res => res[expression])
    : arr.map(res => res);
};

const listGroupItem = tag({ tag: "li", attr: { class: "list-group-item" } });
const shoplists = [
  { id: 1, name: "banana", type: "fruit" },
  { id: 2, name: "skate", type: "sport-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" }
];

const mapdep = items => pipe(join(""))(map(listGroupItem)(items));
// const mapdep = items => items.map(listGroupItem).join("");

listGroupItem("Cras justo");
console.log(mapdep(["Cras justo", "Dapibus ac"]));

const shopListen = uniq(
  map(({ type }) =>
    compose(
      uppercase,
      lowercase,
      JSON.stringify
    )(type)
  )(shoplists)
);

console.log(shopListen);
