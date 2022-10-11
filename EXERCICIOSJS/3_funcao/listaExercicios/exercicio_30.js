// 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const vetorNumeros = [2, 400, 5, 7, -9, 20, 11, 39, 60]

maiorMenorValor = vetor => {
    let maiorNumero = vetorNumeros[0]
    let menorNumero = vetorNumeros[0]

    for(let i in vetor) {
        if(vetor[i] > maiorNumero) {
            maiorNumero = vetor[i]
        }
        if(vetor[i] < menorNumero) {
            menorNumero = vetor[i]
        }
    }
    return 'Maior número: '.concat(maiorNumero) + ', Menor número: '.concat(menorNumero)
}

console.log(maiorMenorValor(vetorNumeros))