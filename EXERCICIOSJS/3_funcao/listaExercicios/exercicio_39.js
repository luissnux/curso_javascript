// 39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

let vertorA = [1, 2, 3, 4, 5]
let vertorB = [10, 20, 30, 40, 50]

trocaPosicao = (vertorA, vertorB) => {
    for (let i = 0; i < 5; i++) {
        vertorA[5] = vertorA[i]
        vertorA[i] = vertorB[i]
        vertorB[i] = vertorA[5]        
    }
    delete vertorA[5]
    return `Vetor A: ${vertorA} Vetor B: ${vertorB}`
}

console.log(trocaPosicao(vertorA, vertorB))