// novo recurso de ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// utilizando o destructuring para extrair informação de dentro de uma estrutura
const { nome, idade } = pessoa
console.log(nome, idade)

// Atribuindo nome as variáveis extraídas
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Extrair informações que não existe, retornará undefined
const { sobrenome, bemHumorada } = pessoa
console.log(sobrenome, bemHumorada)

// Atribuindo um valor padrão a variável
const { sobrenome1 = 'Luis', bemHumorada1 = true} = pessoa
console.log(sobrenome1, bemHumorada1)

// acessando um objetdo dentro do outro objeto
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
