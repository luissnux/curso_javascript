// 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

retornoDinheiro = valor => {

    let qtd1 = 0
    let qtd5 = 0
    let qtd10 = 0
    let qtd50 = 0
    let qtd100 = 0

    while(valor >= 100) {
        valor -= 100
        qtd100++
    }

    while(valor >= 50) {
        valor -= 50
        qtd50++
    }

    while(valor >= 10) {
        valor -= 10
        qtd10++
    }

    while(valor >= 5) {
        valor -= 5
        qtd5++
    }

    while(valor >= 1) {
        valor -= 1
        qtd1++
    }
    
    if(qtd100 > 0) {
        console.log(`${qtd100} nota(s) de R$100,00`)
    }

    if(qtd50 > 0) {
        console.log(`${qtd50} nota(s) de R$50,00`)
    }

    if(qtd10 > 0) {
        console.log(`${qtd10} nota(s) de R$10,00`)
    }

    if(qtd5 > 0) {
        console.log(`${qtd5} nota(s) de R$5,00`)
    }

    if(qtd1 > 0) {
        console.log(`${qtd1} nota(s) de R$1,00`)
    }
}

retornoDinheiro(11)