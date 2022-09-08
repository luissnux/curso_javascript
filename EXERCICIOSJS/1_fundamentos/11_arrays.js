const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])  //undenined - indenifido

valores[4] = 10
console.log(valores)

//valores[10] = 10
//console.log(valores.length)  // irá mostrar a qtd de elementos do array
//console.log(valores)  // irá mostrar "5 empty items" - (5 itens vazios)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')  // adicionando valores no array
console.log(valores)

console.log(valores.pop())  // apaga o último valor do array
delete valores[0]  // deleta um valor do array, apartir do índice
console.log(valores)

console.log(typeof valores)  // mostra o tipo object

// Saída:

// 7.7 9.2
// undefined
// [ 7.7, 8.9, 6.3, 9.2, 10 ]
// 5
// [
//   7.7,     8.9,
//   6.3,     9.2,
//   10,      { id: 3 },
//   false,   null,
// ]
// teste
// [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]
// object





