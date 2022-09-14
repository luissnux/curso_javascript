function divisao(dividendo, divisor) {
    let oper = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`O resultado da divisão é: ${oper.toFixed(2)}, o resto da divisão é: ${resto}`)
}

divisao(5, 3)
