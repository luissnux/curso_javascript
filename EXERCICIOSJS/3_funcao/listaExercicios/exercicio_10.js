// 10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 
// e retorne true ou false.

divisivelPorTres = numero => {
    if (Number.isInteger(numero)) {
        return numero % 3 == 0
    } return 'Não é um número inteiro!'
}

console.log(divisivelPorTres(9))