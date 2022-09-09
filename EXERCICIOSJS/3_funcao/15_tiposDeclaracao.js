
// podemos utilizar a function declaration antes da função, porque o interpretador do js
// carrega primeiro esse tipo de função
console.log(soma(3, 4)) 

// function declaration
function soma(x, y) {
    return x + y
}

// =========================================

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(5, 6))

// a function expression só pode ser acessada após a declaração da função
// console.log(sub(3, 4))
// ReferenceError: Cannot access 'sub' before initialization

// =========================================

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(5, 6))

// a named function expression também só pode ser acessada após a declaração da função