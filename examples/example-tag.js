const { tag } = require("../dom");

console.log(tag("b")("this is bold!"));
console.log(tag("p")("this is me"));
console.log(tag({ tag: "div", attr: { class: "title" } })("this is a title!"));
