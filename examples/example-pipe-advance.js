const { pipe, map, filter, uppercase, lowercase, uniq } = require("../index");

const shoplists = [
  { id: 1, name: "banana", type: "fruit" },
  { id: 2, name: "skate", type: "sport-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" },
  { id: 3, name: "knife", type: "kitchen-tool" }
];

// nested pipe

const shopListen = pipe(
  // wrap the array list
  map("type"), // create new map with key type only
  uniq, // filter if there's any duplicate value
  map(
    // map the previous array => array with list of types
    pipe(
      // wrap the array list
      lowercase, // change the individual string to lowercase
      uppercase // change the individual string to uppercase
    )
  ),
  filter(x => x != "FRUIT") // filter the array list if there any "FRUIT" string
)(shoplists); // array entry

console.log(shopListen);
