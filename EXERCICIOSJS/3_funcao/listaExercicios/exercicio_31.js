// 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const vetorNumeros = [3, 5, 90, 47, -2, -4, 87, -1]

contaNumeroNegativo = vetor => {
    let contaNegativo = 0
    for(let i = 0; i < vetorNumeros.length; i++) {
        if(vetor[i] < 0) {
            contaNegativo++
        }
    }
    return `Qtd de números negativos no vetor é: ${contaNegativo}`
}

console.log(contaNumeroNegativo(vetorNumeros))