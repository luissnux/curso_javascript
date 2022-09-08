console.log('01)', '1' == 1)  // comparando valor e não o tipo
console.log('02)', '1' === 1) // comparando o tipo e não o valor, estritamente iguais
console.log('03)', '3' != 3) // comparando valor e não o tipo
console.log('04)', '3' !== 3) // comparando o tipo e não o valor, estritamente diferentes

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0) 
console.log('09)', d1 === d2) // irá comparar endereço de memória
console.log('10)', d1 == d2) // irá comparar endereço de memória
console.log('11)', d1.getTime() === d2.getTime())  // irá comparar number
console.log('12)', d1.getTime() == d2.getTime())  // irá comparar number
console.log('13)', undefined == null)
console.log('14)', undefined === null)

// Saída:

// 01) true
// 02) false
// 03) false
// 04) true
// 05) false
// 06) true
// 07) false
// 08) true
// 09) false
// 10) false
// 11) true
// 12) true
// 13) true
// 14) false