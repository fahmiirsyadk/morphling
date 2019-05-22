const {
  pipe,
  compose,
  join,
  map,
  uppercase,
  lowercase,
  uniq
} = require("../index");
const { tag } = require("../dom");

const listGroupItem = tag({ tag: "li", attr: { class: "list-group-item" } });
const shoplists = [
  { id: 1, name: "banana", type: "fruit" },
  { id: 2, name: "skate", type: "sport-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" }
];

const mapdep = items => pipe(join(""))(map(listGroupItem)(items));

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
