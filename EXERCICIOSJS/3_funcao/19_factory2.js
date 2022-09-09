function criarProduto(nome, preco) {
    return {
        nome, // não precisa colocar nome: nome, mas se quiser pode colocar
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2199.38))
console.log(criarProduto('iPad', 1199.38))