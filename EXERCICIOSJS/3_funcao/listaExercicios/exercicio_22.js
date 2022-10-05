// 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

valorMensalidade = (mes, valorAnuidade) => {
    let valorPagamento = 0

    if(mes == 1) {
        return `O valor a ser pago é de: R$${valorPagamento = (valorAnuidade).toFixed(2).toString().replace('.', ',')}`
    } else if (mes > 1 && mes < 13){
        return `O valor a ser pago é de: R$${valorPagamento = (valorAnuidade * ((1 + 0.05) ** mes)).toFixed(2).toString().replace('.', ',')}`
    } else {
        return 'Mês inválido.'
    }
}

console.log(valorMensalidade(3, 1000))