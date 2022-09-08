// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // caso deixar enviar um atributo, irá retorna NaN
imprimirSoma(2, 12, 4, 5, 6, 7, 8)  // irá somar apenas os dois primeiros números
imprimirSoma()  // irá retornar NaN

console.log('==============')

// Função do retorno
function soma(a , b = 1) {
    return a + b
}

console.log(soma(3, 5))
console.log(soma(4))
console.log(soma())

// Saída:

// 5
// NaN
// 14
// NaN
// ==============
// 8
// 5
// NaN