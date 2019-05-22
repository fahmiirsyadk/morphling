# 🌊 morphling
tiny library with immutability by default
> this is just a syntatic sugar of js methods , all wrapped to the **pure function**.

**“Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.” ~ John Carmack (Id Software, Oculus VR)”**

## Examples

### 1. Using Map(array) instead Array.map(res => res)

```js

import { map } from 'morpling/array'

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

const nameLists = map(shoplists, "id")
console.log(nameLists) => # ["banana","skate","knife"]
```

### Complex SET
```js

// forms is like pipe in ramda, wrap multiple methods into a single flow

import { pipe } from 'morphling/core'
import { map, uniq } from 'morphling/array'
import { reverse, uppercase } from 'morpling/string'

const shoplists = [
  {id: 1, name: "banana", type: "fruit"},
  {id: 2, name: "skate", type: "sport-tool"},
  {id: 3, name: "knife", type: "kitchen-tool"}
  {id: 3, name: "knife", type: "kitchen-tool"}
]

const newObject = map(shoplists, list => pipe(
  uppercase,
  reverse
)(list.name))

console.log(uniq(newObject)) => # ["ANANAB","ETAKS","EFINK"]

```
