class User {

   constructor(name, behaviour) {
      this._name = name;
      this._behaviour = behaviour;
   }

   get behaviour() {
      return this._behaviour;
   }

   get name() {
      return this._name;
   }
}

let maria = new User('Maria', 'Accessing private files')
let john = new User('John', 'Altering system core code')
let users = [maria, john]

// comparing to the old way of doing this:
users.forEach(user => {
   let log = user.name + ' is trying to ' + user.behaviour + ', denied'
   console.log(log)
})

// 1. simple way to interpolate variables into strings
users.forEach(user => {
   console.log(`${user.name} is tyring to ${user.behaviour}, denied.`)
})

// 2. expressions are also valid in interpolation
let one = 1, two = 2
console.log(`${one} + ${two} = ${one + two}`)

// 3. interpolations can be divided into multiple lines
let multiline_interpolations = `
    <User user=${maria}>
        <p>${maria.name} is trying to ${maria.behaviour}</p>
    </User>
`
console.log(multiline_interpolations)