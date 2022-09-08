for (let i = 0; i < 10; i++) {
    console.log(i)
}
// Não é possivel acessar a variável 'i', porque a variável foi declarada com o let e ela fica acessível
// apenas dentro do escopo do laço for.
console.log('i =', i)

// Saída:

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// /home/luis/cursowebmoderno/EXERCICIOSJS/fundamentos/21_usandoLetEmLoop1.js:5
// console.log('i =', i)
//                    ^

// ReferenceError: i is not defined