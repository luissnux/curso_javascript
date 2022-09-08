
//Usando Template String

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

// Saída:

// Olá Rebeca! 
//     Olá
//     Rebeca!
// 1 + 1 = 2
// Ei... CUIDADO!