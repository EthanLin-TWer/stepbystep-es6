export const namedConstant = 2
export const namedString = 'const learning ES6'
export const namedObject = {
   key: 'isvalue',
   value: 'iskey'
}
export default class {
   constructor(name = 'Michael', age = 21) {
      this.name = name
      this.age = age
   }

   getName() { return this.name }
   getAge() { return this.age }
}