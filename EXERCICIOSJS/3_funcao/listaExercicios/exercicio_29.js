// 29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e 
// quantos deles estão fora do intervalo, escrevendo estas informações.

const vetorNumeros = [-1, -4, 3, 5, 9, 10, 18, 20, 28, 30]

percorreVetor = vetor => {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }
    return `Valores dentro do intervalo: ${dentroIntervalo} e valores fora do intervalo: ${foraIntervalo}`
}

console.log(percorreVetor(vetorNumeros))




