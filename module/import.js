import { namedConstant, namedString, namedObject } from './export'

console.log('------------Named Imports/Exports------------')
console.log('number constant: ' + namedConstant)
console.log('string constant: ' + namedString)
console.log('object constant: ' + namedObject.key + ', ' + namedObject.value)

import * as named from './export'

console.log('------------Namespace Imports/Exports------------')
console.log('number constant: ' + named.namedConstant)
console.log('string constant: ' + named.namedString)
console.log('object constant: ' + named.namedObject.key + ', ' + namedObject.value)

import Person from './export'

console.log('------------Default Imports/Exports------------')
let jennifer = new Person('Jennifer', 25);
console.log('name: ' + jennifer.getName())
console.log('age: ' + jennifer.getAge())