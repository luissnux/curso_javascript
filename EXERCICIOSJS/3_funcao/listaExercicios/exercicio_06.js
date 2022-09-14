// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function juroSimples(capital, taxa, periodo) {
    const aplicacao = capital * (1 + taxa / 100 * periodo)
    return console.log('Aplicação financeira sob o regime de juros simples: R$' + aplicacao.toFixed(2).toString().replace('.', ','))
}

const juroComposto = (capital, taxa, periodo) => {
    const aplicacao = capital * ((1 + (taxa / 100)) ** periodo)
    return console.log(`Aplicação financeira sob o regime de juros composto: R$${aplicacao.toFixed(2).toString().replace('.', ',')}`)
}

juroSimples(10000, 10, 3)
juroComposto(10000, 10, 3)

