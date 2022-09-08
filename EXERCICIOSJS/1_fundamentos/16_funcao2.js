// Armazenando uma função em uma variável, foi utilizado uma função anônima
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(3, 5)

// Armazenando uma função arrow em uma variável, '=>' substitui o 'function'
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito, '=>' substitui o 'function' e o 'return'
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

// Saída:

// 8
// 5
// -1
// Legal!!!