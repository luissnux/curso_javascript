console.log(typeof Object) //function
console.log(typeof new Object) // object

console.log('------------')

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

console.log('------------')

class Produto {} // ES 2015 (ES6) - ECMAScript
console.log(typeof Produto)
console.log(typeof new Produto())