// 07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.


// Resposta 1

// calculoDelta = (ax2, bx, c) => bx ** 2 - 4 * ax2 * c

// formulaBhaskara = (ax2, bx, c, valorDelta = calculoDelta(ax2, bx, c)) => {
//     if (valorDelta >= 0) {
//         const x1 = (-1 * bx + Math.sqrt(valorDelta)) / (2 * ax2)
//         const x2 = (-1 * bx - Math.sqrt(valorDelta)) / (2 * ax2)
//         return [x1, x2]
//     } else {
//         return 'Delta é negativo'
//     }    
// }

// console.log(formulaBhaskara(4, -3, -1))

// Resposta 2

formulaBhaskara = (ax2, bx, c) => {
    valorDelta = bx ** 2 - 4 * ax2 * c

        if (valorDelta >= 0) {
            let x1 = (-1 * bx + Math.sqrt(valorDelta)) / (2 * ax2)
            let x2 = (-1 * bx - Math.sqrt(valorDelta)) / (2 * ax2)
            return [x1, x2]
        } else {
            return 'Delta é negativo'
        }
}

console.log(formulaBhaskara(4, -3, -1))