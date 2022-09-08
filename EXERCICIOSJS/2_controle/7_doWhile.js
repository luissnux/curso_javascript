function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçãp escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a próxima!')

// Saída:

// Opçãp escolhida foi 0.
// Opçãp escolhida foi 8.
// Opçãp escolhida foi 6.
// Opçãp escolhida foi 2.
// Opçãp escolhida foi 0.
// Opçãp escolhida foi 6.
// Opçãp escolhida foi 0.
// Opçãp escolhida foi -1.
// Até a próxima!
