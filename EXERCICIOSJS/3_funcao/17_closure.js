// Closure é o escopo criado quando uma funcção é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
// irá retornar 'Local' por causa do closure, do local onde a função foi definida
console.log(minhaFuncao())  