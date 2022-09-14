
// 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

// Resposta 1
function calculo(n1, n2) {
    console.log(`Soma: ${n1 + n2}`)
    console.log(`Subtração: ${n1 - n2}`)
    console.log(`Multiplicação: ${n1 * n2}`)
    console.log(`Divisão: ${n1 / n2}`)
}

calculo(20, 4)

console.log('---------------')

// Resposta 2
calculo = (n1, n2) => {
    console.log(`Soma: ${n1 + n2}`)
    console.log(`Subtração: ${n1 - n2}`)
    console.log(`Multiplicação: ${n1 * n2}`)
    console.log(`Divisão: ${n1 / n2}`)
}

calculo(20, 4)


