/*
 * O operador ternário é divido em três partes:
 * - Expressão lógica;
 * - Retorno se a expressão for verdadeira;
 * - Retorno se a expressão for falsa;
*/ 


const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"

console.log(resultado(7.1))
console.log(resultado(6.9))

// Saída: 

// Aprovado
// Reprovado

