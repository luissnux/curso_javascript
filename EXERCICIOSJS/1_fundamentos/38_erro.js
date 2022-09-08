
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name, 
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { // é um bloco que será chamado caso ocorra um erro ou não
        console.log('final')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

// Saída:

// final

// /home/luis/cursowebmoderno/EXERCICIOSJS/fundamentos/38_erro.js:7
//     throw {
//     ^
// {
//   nome: 'TypeError',
//   msg: "Cannot read properties of undefined (reading 'toUpperCase')",
//   date: 2022-08-28T22:36:29.796Z
// }