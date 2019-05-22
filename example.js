const { pipe, uppercase, map, uniq } = require("./index");

const shoplists = [
  { id: 1, name: "banana", type: "fruit" },
  { id: 2, name: "skate", type: "sport-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" }
];

const square = n => n * n;
const decrement = n => n - 1;
const increment = n => n + 1;
const double = n => n * 2;

// console.log((newShoppingList = map(shoplists, "type")));
// console.log((newShoppingList = map(shoplists, list => list.type + " passed")));
// console.log((newShoppingList = map(shoplists, list => square(list.id))));
// console.log((newShoppingList = uniq(map(shoplists, list => square(list.id)))));

// using pipe
console.log(
  map(shoplists, list =>
    pipe(
      square,
      decrement,
      double,
      increment
    )(list.id)
  )
);
