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

users.forEach(user => {
   console.log(`${user.name} is tyring to ${user.behaviour}, denied.`)
})
