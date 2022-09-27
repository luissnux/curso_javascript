// 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O 
// programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com 
// os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará 
// a soma de 2 e 3. 

// Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

calculadora = (n1, operacao, n2) => {
    switch (operacao) {
        case '+':
            return `A soma de ${n1} + ${n2} = ${n1 + n2}`
            break
        case '-':
            return `A subtração de ${n1} - ${n2} = ${n1 - n2}`
            break
        case '*':
            return `A multiplicação de ${n1} * ${n2} = ${n1 * n2}`
            break
        case '/':
            return `A divisão de ${n1} / ${n2} = ${n1 / n2}`
            break
        default:
            return 'Operação inválida.'

    }
}

console.log(calculadora(2, '+', 2))
