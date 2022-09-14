function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

//==================================

const carro = { preco: 49990, desc: 0.20 }

// chamando a função getPreco.call, getPreco.apply e passando o contexto carro
console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro))

// a diferença entre o call e o apply é apenas a passagem dos parâmetros, no call é passado
// os argumentos diretamente para a função
console.log(getPreco.call(carro, 0.17, '$')) 
// o apply é passado diretamente de um array
console.log(getPreco.apply(carro, [0.17, '$'])) 