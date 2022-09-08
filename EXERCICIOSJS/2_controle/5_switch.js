const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
        case 9: 
            console.log("Quadro de Honra") // se for 10 ou 9 irá executar essa linha de código
            break  // apenas irá sair do switch que colocar o break
        case 8: case 7: { // pode ser utlizado um bloco de código, mas não é muito utilizado
            console.log('Aprovado')
            break
        }            
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // caso não entre em nenhum case irá executar
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.75)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

// Saída:

// Quadro de Honra
// Aprovado
// Recuperação
// Reprovado
// Nota inválida
// Nota inválida
