// 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const numerosInteiros = [1, 2, 5, 6, 8, 9, 27, 48, 59]

lerVetor = numerosInteiros => {
    let numerosPares = 0
    let numerosImpares = 0
    for(let i in numerosInteiros) {
        if(numerosInteiros[i] % 2 == 0) {
            numerosPares++
        } else {
            numerosImpares++
        }
    } 
    return `
    Numeros pares: ${numerosPares}
    Numeros impares: ${numerosImpares}`
}

console.log(lerVetor(numerosInteiros))