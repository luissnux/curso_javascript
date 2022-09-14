
// Resposta 1
function formatarNumero1(n) {
    return `R$${n.toFixed(2).toString().replace('.', ',')}`
}

console.log(formatarNumero1(0.300000005))

// Resposta 2
formatarNumero2 = numero => {
    const listaNumero = numero.toFixed(2).toString().split('.')
    return console.log(`R$${listaNumero[0]},${listaNumero[1]}`)
}

formatarNumero2(0.3000000008)
