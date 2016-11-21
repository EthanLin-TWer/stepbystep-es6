import { namedConstant, namedString, namedObject } from './export'

console.log('------------Named Imports/Exports------------')
console.log('number constant: ' + namedConstant)
console.log('string constant: ' + namedString)
console.log('object constant: ' + namedObject.key + ', ' + namedObject.value)