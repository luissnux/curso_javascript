
let a = 7
let b = 94
let aux = a;

console.log("Valor de 'a': " + a);
console.log("Valor de 'b': " + b);
console.log("")

a = b;
b = aux;

// depois da troca... a = 94 e b = 7
console.log("Valor de 'a' após troca: " + a);
console.log("Valor de 'b' após troca: " + b);