// 37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
// bem como a soma dos elementos.


progressaoAritmetica = (ntermo, primeirotermo, razao) => {
    let pa = 0
    let vetorProgressaoAritmetica = []
    let somaProgressaoAritmetica = 0

    for (let i = 0; i < ntermo; i++) {
        if (pa == 0) {
            pa = primeirotermo + razao
            vetorProgressaoAritmetica.push(primeirotermo)
        } else {
            pa += razao
        }
        vetorProgressaoAritmetica.push(pa)
    }

    for (let i in vetorProgressaoAritmetica) {
        somaProgressaoAritmetica += vetorProgressaoAritmetica[i]
    }

    return `Progressão Aritmética: ${vetorProgressaoAritmetica}
Somatória dos elementos: ${somaProgressaoAritmetica}`
}

progressaoGeometrica = (ntermo, primeirotermo, razao) => {
    let pg = 0
    let vetorProgressaoGeometrica = []
    let somaProgressaoGeometrica = 0

    for (let i = 0; i < ntermo; i++) {
        if (pg == 0) {
            pg = primeirotermo * razao
            vetorProgressaoGeometrica.push(primeirotermo)
        } else {
            pg *= razao
        }
        vetorProgressaoGeometrica.push(pg)
    }

    for (let i in vetorProgressaoGeometrica) {
        somaProgressaoGeometrica += vetorProgressaoGeometrica[i]
    }

    return `Progressão Geométrica: ${vetorProgressaoGeometrica}
Somatória dos elementos: ${somaProgressaoGeometrica}`
}

console.log(progressaoAritmetica(5, 1, 2))
console.log('')
console.log(progressaoGeometrica(5, 1, 2))