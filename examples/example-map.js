const { map, uniq } = require("../index");

// data sample
const shoplists = [
  { id: 1, name: "banana", type: "fruit" },
  { id: 2, name: "skate", type: "sport-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" }
];

// square function
const square = n => n * n;

// map shopLists and show the type key only to new array
console.log((newShoppingList = map(shoplists, "type")));

// map shopLists with callback it took type value + passed
console.log((newShoppingList = map(shoplists, list => list.type + " passed")));
console.log((newShoppingList = map(shoplists, list => square(list.id))));

console.log((newShoppingList = uniq(map(shoplists, list => square(list.id)))));
