// 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:

// Plano       Aumento
// A           10%
// B           15%
// C           20%

// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário, calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

calculoSalario = (plano, salario) => {
    switch(plano.toUpperCase()) {
        case 'A':
            return `O novo salário é de: ${salario * 1.1}`
            break
        case 'B':
            return `O novo salário é de: ${salario * 1.15}`
            break
        case 'C':
            return `O novo salário é de: ${salario * 1.2}`
            break
        default:
            return 'Plano inválido.'
    }
}

console.log(calculoSalario('c', 1000))

