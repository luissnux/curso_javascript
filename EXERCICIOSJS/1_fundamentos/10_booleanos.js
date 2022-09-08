
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log('-----------')

isAtivo = 1
console.log(!isAtivo)  // negação uma veze se tornar falso
console.log(!!isAtivo)  // negação duas vezes se tornar verdadeiro
console.log(!true)  // negação de true é false
console.log(!false)  // negação de false é true

console.log('-----------')

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')  //espaço em branco é verdadeiro
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')  //string vazia é falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))  //resultado é true, a última condição é true
console.log(('' || null || 0 || 'epa'))  // irá retornar 'epa', único valor verdadeiro
console.log(('' || null || 0 || '' || 123))

console.log('----------')

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Luis'
console.log(nome || 'Desconhecido')

// Saída:

// false
// true
// -----------
// false
// true
// false
// true
// -----------
// os verdadeiros...
// true
// true
// true
// true
// true
// true
// true
// true
// true
// true
// os falsos...
// false
// false
// false
// false
// false
// false
// pra finalizar...
// true
// epa
// 123
// ----------
// Desconhecido
// Luis



