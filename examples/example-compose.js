const { compose, map, uniq } = require("../index");

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

// using pipe
const newIds = map(list =>
  compose(
    square,
    decrement,
    double,
    increment
  )(list.id)
)(shoplists);

console.log(uniq(newIds)); // => [ 9, 25, 49 ]
