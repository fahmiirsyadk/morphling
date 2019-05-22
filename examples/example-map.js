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

// placeholder => map(expression)(data)
const types = map("type")(shoplists);
const coolestTypes = map(list => list.type + " : cool")(shoplists);
const closureFunc = map(list => square(list.id))(shoplists);
const filterUniq = uniq(map(list => square(list.id))(shoplists));

console.log(types);
console.log(coolestTypes);
console.log(closureFunc);
console.log(filterUniq);
