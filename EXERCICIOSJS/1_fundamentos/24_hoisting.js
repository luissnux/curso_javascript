
console.log('a =', a)
var a = 2
console.log('a =', a)

// será executado um hosting (issamento), será exectudo dessa format
// var a
// console.log('a =', a)
// a = 2
// console.log('a =', a)

// também irá ocorrer o issamento
function teste() {
    console.log('b =', b)
    var b = 2
    console.log('b =', b)
}

teste()
// a variável 'b' não está acessível fora da função
// console.log('b =', b)

// o issamento não ocorre quando a variável é declarada com o let
// console.log('c =', c)
// let c = 3
// console.log('c = ', c)

// Saída:

// a = undefined
// a = 2
// b = undefined
// b = 2
