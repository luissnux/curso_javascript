
console.log(7 / 0.0001)
console.log(7 / 0) // o resultado é infinito
console.log("10" / 2) // converte a string e realiza a operação
console.log('3' + 2) // irá concatenar, a string nesse caso tem preferência
console.log('3' - 2) // converte a string e realiza a operação
console.log("10,2" / 2)  // Irá retornar que não é um número
console.log("Show" * 2)  // Irá retornar que não é um número
console.log(0.1 + 0.7)  // não será 0.8 devido a uma especificação adotada pelo java script,
                        // torma mais rápida a operação.
// console.log(10.toString())  // não é possível realizar esta conversão
console.log((10.345).toFixed(2))  // defindo o número de casas decimais à partir no número

// Saída:

// 70000
// Infinity
// 5
// 32
// 1
// NaN
// NaN
// 0.7999999999999999
// 10.35