// armazendo uma função anônima em uma variável
const soma = function (x, y) {
    return x + y
}

// atribuindo a função soma ao argumento oraperação
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // não há a necessida de passar a função soma
imprimirResultado(3, 4, soma)

// passando outra função dentro da função imprimirResultado, nesse caso irá utilizar a função
// anômina declara dentro da função
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

// passando uma função anônima (arrow function) como argumento
imprimirResultado(3, 4, (x, y) => x * y)

// adicionando uma função dentro de objeto 
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()
