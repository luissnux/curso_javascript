// 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

vetorDeNotas = [2, 5.6, 7.9, 6, 9, 10]

conceitoNotas = (vetorNotas) => {  
    for (let i = 0; i < vetorNotas.length; i++) {
        if (vetorNotas[i] >= 0.0 && vetorNotas[i] <= 4.9) {
            console.log(`Nota: ${vetorNotas[i]} - conceito: D`)
        } else if (vetorNotas[i] >= 5.0 && vetorNotas[i] <= 6.9) {
            console.log(`Nota: ${vetorNotas[i]} - conceito: C`)
        } else if (vetorNotas[i] >= 7.0 && vetorNotas[i] <= 8.9) {
            console.log(`Nota: ${vetorNotas[i]} - conceito: B`)
        } else if (vetorNotas[i] >= 9.0 && vetorNotas[i] <= 10.0) {
            console.log(`Nota: ${vetorNotas[i]} - conceito: A`)
        } else {
            console.log('Notas inválida.')
        }
    }
}

conceitoNotas(vetorDeNotas)