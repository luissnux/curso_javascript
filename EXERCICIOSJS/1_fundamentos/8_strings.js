
const escola = "Cod3r"

console.log(escola.charAt(4)) // irá mostar a letra que estiver no índice 4
console.log(escola.charAt(5)) // não irá mostrar nada, não tem nada na posição 5
console.log(escola.charCodeAt(3)) // irá mostrar o valor da tabela ASCII
console.log(escola.indexOf('r'))  // irá retornar o índice referente ao caracter  
console.log(escola.substring(1)) // irá retornar a string apartir índice 1
console.log(escola.substring(0, 3)) // irá retornar a string do índice 0 até o índice 2, não até 3

console.log('Escolar '.concat(escola).concat("!")) //contatenando com concat
console.log('Escolar ' + escola + "!")
console.log(escola.replace(3, 'e')) // replace função de substituição, substitui 3 por e
console.log(escola.replace(/\d/, 'e')) // substitui todas os dígitos pela letra e
console.log(escola.replace(/\w/g, 'e')) // substitui todas os dígitos e letra por e

console.log('Ana,Maria,Pedro'.split(',')) // gerando um array, utilizando a ',' como separador

// Saída:

// r

// 51
// 4
// od3r
// Cod
// Escolar Cod3r!
// Escolar Cod3r!
// Coder
// Coder
// eeeee
// [ 'Ana', 'Maria', 'Pedro' ]