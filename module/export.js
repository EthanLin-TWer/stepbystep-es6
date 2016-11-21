export const namedConstant = 2
export const namedString = 'const learning ES6'
export const namedObject = {
   key: 'isvalue',
   value: 'iskey'
}
export function add(a, b) {
   return a + b
}

export { namedConstant as constant, namedString as string, namedObject as object }
export { add as minus }

export default class {
   constructor(name = 'Michael', age = 21) {
      this.name = name
      this.age = age
   }

   getName() { return this.name }
   getAge() { return this.age }
}