// 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

geradorNotas = (min, max) => {
    const nota = Math.random() * (max - min) + min
    return Math.floor(nota)
}

let nota1 = 1
let nota2 = 1
let nota3 = 1
let codAluno = 0
let mediaPonderada = 0

while(nota1 > 0 && nota2 > 0 && nota3 > 0) {
    codAluno++    
    nota1 = geradorNotas(-1, 10)
    nota2 = geradorNotas(-1, 10)
    nota3 = geradorNotas(-1, 10)

    if(nota1 > nota2 && nota1 > nota3) {
        mediaPonderada = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
        if(mediaPonderada >= 5) {
            console.log(`Código do aluno: ${codAluno}
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}
            Valor da média poderada: ${mediaPonderada}
            Aluno APROVADO!`)
        } else {
            console.log(`Código do aluno: ${codAluno}
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}
            Valor da média poderada: ${mediaPonderada}
            Aluno REPROVADO!`)
        }
    } else if(nota2 > nota1 && nota2 > nota3) {
        mediaPonderada = (nota1 * 3 + nota2 * 4 + nota3 * 3) / 10
        if(mediaPonderada >= 5) {
            console.log(`Código do aluno: ${codAluno}
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}
            Valor da média poderada: ${mediaPonderada}
            Aluno APROVADO!`)
        } else {
            console.log(`Código do aluno: ${codAluno}
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}
            Valor da média poderada: ${mediaPonderada}
            Aluno REPROVADO!`)
        }
    } else {
        mediaPonderada = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10
        if(mediaPonderada >= 5) {
            console.log(`Código do aluno: ${codAluno}
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}
            Valor da média poderada: ${mediaPonderada}
            Aluno APROVADO!`)
        } else {
            console.log(`Código do aluno: ${codAluno}
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}
            Valor da média poderada: ${mediaPonderada}
            Aluno REPROVADO!`)
        }
    }
}