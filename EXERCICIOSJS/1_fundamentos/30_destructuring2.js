// utilizando o destructuring para criar a variável a e receber o valor 10 do array
const [a] = [10]
console.log(a)

// podemos utilizar o destructuring com vários elementos e inclusíve pular elementos
// que queremos ignorar deixando um espaço em branco.
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// Saída:

// 10
// 10 9 undefined 0
// 6