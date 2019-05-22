const { map, pipe, join } = require("../index");
const { tag } = require("../dom");

console.log(tag("b")("this is bold!"));
console.log(tag("p")("this is me"));
console.log(tag({ tag: "div", attr: { class: "title" } })("this is a title!"));

const listGroup = tag({ tag: "ul", attr: { class: "list-group" } });
const listGroupItem = tag({ tag: "li", attr: { class: "list-group-item" } });
const listGroupItems = items => pipe(join(""))(map(listGroupItem)(items));

listGroup();
// <ul class="list-group"></ul>

listGroupItem("Cras justo");
// <li class="list-group-item">Cras justo</li>

listGroupItems(["Cras justo", "Dapibus ac"]);
// <li class='list-group-item'>Cras justo</li>
// <li class='list-group-item'>Dapibus ac</li>

listGroup(listGroupItems(["Cras justo", "Dapibus ac"]));
// <ul class='list-group'>
//   <li class='list-group-item'>Cras justo</li>
//   <li class='list-group-item'>Dapibus ac</li>
// </ul>
