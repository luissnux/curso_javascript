
let valor // não inicializada
console.log(valor)  // como a variável não foi inicializada, retorna o valor padrão undefined

valor = null  // null quer dizer que não está apontando para nenhum endereço de memória
console.log(valor)
// console.log(valor.toString()) // TypeError: Cannot read properties of null (reading 'toString')

const produto = {}
console.log(produto.preco)  // undefined: não está definido o preco dentro do produto
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)


produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

// Saída: 

// undefined
// null
// undefined
// {}
// { preco: 3.5 }
// false
// { preco: undefined }
// false
// { preco: null }
