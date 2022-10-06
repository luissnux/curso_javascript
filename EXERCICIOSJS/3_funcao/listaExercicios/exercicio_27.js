// 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const crianca1 = {
    altura: 150,
    taxacrescimento: 15
}

const crianca2 = {
    altura: 150,
    taxacrescimento: 10
}

calculoTaxaCrescimento = (crianca1, crianca2) => {
    let qtdAno = 0
    if(crianca1.altura < crianca2.altura) {
        let alturaCrianca1 = crianca1.altura
        let alturaCrianca2 = crianca2.altura
        if(crianca1.taxacrescimento > crianca2.taxacrescimento) {            
            while(alturaCrianca1 < alturaCrianca2) {
                alturaCrianca1 += crianca1.taxacrescimento
                alturaCrianca2 += crianca2.taxacrescimento
                qtdAno++
            }
            return 'Criança 1 é menor que Criança 2: ' + 'ultrapassa a altura em: ' + qtdAno
        }
        return 'Criança 1 é menor que Criança 2: não irá ultrapassar a altura.'
    } else if(crianca2.altura < crianca1.altura) {
        let alturaCrianca1 = crianca1.altura
        let alturaCrianca2 = crianca2.altura
        if(crianca2.taxacrescimento > crianca1.taxacrescimento) {            
            while(alturaCrianca2 < alturaCrianca1) {
                alturaCrianca1 += crianca1.taxacrescimento
                alturaCrianca2 += crianca2.taxacrescimento
                qtdAno++
            }
            return 'Criança 2 é menor que Criança 1: ' + 'ultrapassa a altura em: ' + qtdAno
        }
        return 'Criança 2 é menor que Criança 1: não irá ultrapassar a altura.'
    } else {
        return 'Crianças com a mesma altura.'
    }
}

console.log(calculoTaxaCrescimento(crianca1, crianca2))