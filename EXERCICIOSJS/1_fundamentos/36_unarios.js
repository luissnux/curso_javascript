let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1  // tem precendência sobre num1++
console.log(num1)

console.log(++num1 === num2--) // true: momento da comparação num2 ainda vale 2 e depois de é subtraido
console.log(num1 === num2)

// Saída:

// 2
// 1
// true
// false
