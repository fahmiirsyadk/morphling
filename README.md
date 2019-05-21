# 🌊 morphling
tiny library with full reactivity and immutability

this is just a syntatic sugar of js methods , all wrapped to the pure function.


## Examples

### 1. Using Map(array) instead Array.map(res => res)

```js
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

const nameLists = Map(shoplists, id)
console.log(nameLists) => # ["banana","skate","knife"]
```

### Complex SET
```js

// forms is like pipe in ramda, wrap multiple methods into a single flow

import { forms } from 'morphling/core'
import { map, unique } from 'morphling/lists'

const dataObject = [
  {id: 1, name: "banana", type: "fruit"},
  {id: 2, name: "skate", type: "sport-tool"},
  {id: 3, name: "knife", type: "kitchen-tool"}
  {id: 3, name: "knife", type: "kitchen-tool"}
]

const newObject = forms(
  map(id),
  unique
)(dataObject)

console.log(newObject) => # [1,2,3]

```
