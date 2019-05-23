# 🌊 morphling
tiny library it can disallow you using much on method.
> this is just a syntatic sugar of js methods , all wrapped to the **pure function**.

**“Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.” ~ John Carmack (Id Software, Oculus VR)”**

## Examples

### Map

```js

import { map } from 'morpling'

const shoplists = [
  {id: 1, name: "banana", type: "fruit"},
  {id: 2, name: "skate", type: "sport-tool"},
  {id: 3, name: "knife", type: "kitchen-tool"}
]

wanna take the name only ?

-> using traditional map

const nameLists = shoptlists.map(list => list.id)
console.log(nameLists) => # ["banana","skate","knife"]

-> using morpling

const nameLists = map("id")(shoplists)
console.log(nameLists) => # ["banana","skate","knife"]
```

### Pipe
```js

// pipe is like going run multiple functions into a single flow (left to right)

import { pipe, map, uniq, uppercase } from 'morphling'

const shoplists = [
  {id: 1, name: "banana", type: "fruit"},
  {id: 2, name: "skate", type: "sport-tool"},
  {id: 3, name: "knife", type: "kitchen-tool"}
  {id: 3, name: "knife", type: "kitchen-tool"}
]

const newObject = pipe(
  map("name"),
  map(uppercase),
  uniq
)(shoplists)

console.log(newObject) => # ["ANANAB","ETAKS","EFINK"]

```

### Even helping to create HTML tag ? yes, use { tag }
```js

import { pipe, map, join } from 'morpling'
import { tag } from 'morpling-dom'

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

```
