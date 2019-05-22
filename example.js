const { map } = require("./index");

const shoplists = [
  { id: 1, name: "banana", type: "fruit" },
  { id: 2, name: "skate", type: "sport-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" }
];

const square = n => n * n;

console.log((newShoppingList = map(shoplists, "type")));
console.log((newShoppingList = map(shoplists, list => list.type + " passed")));
console.log((newShoppingList = map(shoplists, list => square(list.id))));
