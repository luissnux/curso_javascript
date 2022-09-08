const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(4)
imprimirResultado(8)
imprimirResultado('Epa!') // Cuidado!!! irá comparar a string, resultado vai ser false e imprime reprovado

// Saída:

// Reprovado!
// Aprovado!
// Reprovado!
