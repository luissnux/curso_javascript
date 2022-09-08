function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçãp escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

// Saída:

// Opçãp escolhida foi 8.
// Opçãp escolhida foi 5.
// Opçãp escolhida foi 4.
// Opçãp escolhida foi 8.
// Opçãp escolhida foi 5.
// Opçãp escolhida foi 8.
// Opçãp escolhida foi 3.
// Opçãp escolhida foi 5.
// Opçãp escolhida foi 0.
// Opçãp escolhida foi 2.
// Opçãp escolhida foi 4.
// Opçãp escolhida foi 7.
// Opçãp escolhida foi 7.
// Opçãp escolhida foi 0.
// Opçãp escolhida foi -1.
// Até a próxima!