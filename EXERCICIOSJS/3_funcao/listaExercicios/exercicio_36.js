// 36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

multiplicaVetor1 = (vetorNumerico, numeroInteiro) => {
    let resultadoMult = []
    for(let i = 0; i < vetorNumerico.length; i++) {
        resultadoMult.push(vetorNumerico[i] * numeroInteiro)
    }
    return resultadoMult
}

multiplicaVetor2 = (vetorNumerico, numeroInteiro) => {
    let resultadoMult = []
    if(numeroInteiro > 5) {
        for(let i = 0; i < vetorNumerico.length; i++) {
            resultadoMult.push(vetorNumerico[i] * numeroInteiro)
        }
        return resultadoMult
    } else{
        return 'Numero inteiro menor que 5.'
    }   
}

console.log(multiplicaVetor1([1, 2, 3, 4, 5], 2)) // [ 2, 4, 6, 8, 10 ]
console.log(multiplicaVetor2([1, 2, 3, 4, 5], 4)) // Numero inteiro menor que 5.
console.log(multiplicaVetor2([1, 2, 3, 4, 5], 6)) // [ 6, 12, 18, 24, 30 ]