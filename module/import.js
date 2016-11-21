import { namedConstant, namedString, namedObject } from './export'
import { add } from './export'

console.log('------------Named Imports/Exports------------')
console.log('number constant: ' + namedConstant)
console.log('string constant: ' + namedString)
console.log('object constant: ' + namedObject.key + ', ' + namedObject.value)
console.log('add function: 1 + 2 = ' + add(1, 2))

import * as named from './export'

console.log('------------Namespace Imports/Exports------------')
console.log('number constant: ' + named.namedConstant)
console.log('string constant: ' + named.namedString)
console.log('object constant: ' + named.namedObject.key + ', ' + namedObject.value)

import { constant, string, object } from './export'
import { minus } from "./export"

console.log('------------Aliased Export------------')
console.log('aliased number: ' + constant)
console.log('aliased string: ' + string)
console.log('aliased object: ' + object.key + ', ' + object.value)
console.log('aliased add: 1 - 2 = ' + minus(1, 2))

import Person from './export'

console.log('------------Default Imports/Exports------------')
let jennifer = new Person('Jennifer', 25);
console.log('name: ' + jennifer.getName())
console.log('age: ' + jennifer.getAge())