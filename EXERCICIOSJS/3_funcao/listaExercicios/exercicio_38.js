// 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.


imprimeImpares = (inicio, fim) => {
    if (inicio < fim) {
        for (let i = inicio; i < fim; i++) {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    } else {
        for (let i = fim; i < inicio; i++) {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    }
}

imprimeImpares(100, 0)