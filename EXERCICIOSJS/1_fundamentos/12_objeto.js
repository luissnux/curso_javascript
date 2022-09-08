const prod1 = {}  //criando um objeto vazio
prod1.nome = 'Celular Ultra Mega'  // adicionando chave/valor ao objeto
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40  // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }

    }
}

prod2['Desconto Legal'] = 0.40  // evitar atributos com espaço
console.log(prod2)

// Saída:

// criando um json
'{"nome": "Camisa Polo","preco": 79.90}'

// { nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto Legal': 0.4 }
// {
//   nome: 'Camisa Polo',
//   preco: 79.9,
//   obj: { blabla: 1, obj: { blabla: 2 } },
//   'Desconto Legal': 0.4
// }