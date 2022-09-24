// 12)​ Faça um algoritmo que calcule o fatorial de um número.

fatorialNumero = numero => {
    let fatorial = 1

    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }

    return fatorial
}

console.log(fatorialNumero(5))