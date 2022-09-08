// Variáveis criadas com o let tem escopo global, função e de bloco de código.
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

console.log('===========')

// Quando a variável que esta sendo acessada não se encontra dentro do escopo local, será verificado se a
// variável existe fora do escopo, caso existir a variável será retornada. 
{
    let numero2 = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Saída:

// dentro = 2
// fora = 1
// ===========
// dentro = 1
// fora = 1