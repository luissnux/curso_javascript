
// Variável criar com var fica visível fora do escopo (bloco de cógigo)
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

// Variável criada com var dentro de uma função é visível apenas dentro do scopo da função
function teste() {
    var local = 123
}

teste()
// console.log(local)

// Saída:

// Será???
// Será???