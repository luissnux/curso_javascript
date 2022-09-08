
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))  // isInteger: função que verifica se um número é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  // defindo o numero de casa decimais
console.log(media.toString())  // convertendo media para string
console.log(media.toString(2))  // convertendo media em valor ponto flutuante em valor binário

console.log(typeof media)
console.log(typeof Number)  // mostra o tipo de Number que é uma function

// Saída:

// 1 2
// true
// true
// 7.87
// 7.8709999999999996
// 111.11011110111110011101101100100010110100001110010101
// number
// function