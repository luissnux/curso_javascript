// 19) ​O cardápio de uma lanchonete é o seguinte:

// Código      Descrição do Produto        Preço
// 100         Cachorro Quente             R$3,00
// 200         Hambúrguer Simples          R$4,00
// 300         Cheeseburguer               R$5,50
// 400         Bauru                       R$7,50
// 500         Refrigerante                R$3,50
// 600         Suco                        R$2,80

// Implemente uma função que receba como parâmetros o código do item pedido, a 
// quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada 
// execução somente será calculado um item. Use o comando switch. Crie um caso default 
// para produto não existente.

valorPedido = (codigo, qtd) => {
    switch(codigo) {
        case 100:
            return `Código do pedido: ${codigo}
                    Descrição: Cachorro Quente
                    Qtd: ${qtd}
                    Valor unitário: R$3,00
                    Valor total: R$${(qtd * 3).toFixed(2).toString().replace('.', ',')}`
            break
        case 200:
            return `Código do pedido: ${codigo}
                    Descrição: Cachorro Quente
                    Qtd: ${qtd}
                    Valor unitário: R$4,00
                    Valor total: R$${(qtd * 4).toFixed(2).toString().replace('.', ',')}`
            break
        case 300:
            return `Código do pedido: ${codigo}
                    Descrição: Cachorro Quente
                    Qtd: ${qtd}
                    Valor unitário: R$5,50
                    Valor total: R$${(qtd * 5.5).toFixed(2).toString().replace('.', ',')}`
            break
        case 400:
            return `Código do pedido: ${codigo}
                    Descrição: Cachorro Quente
                    Qtd: ${qtd}
                    Valor unitário: R$7,50
                    Valor total: R$${(qtd * 7.5).toFixed(2).toString().replace('.', ',')}`
            break
        case 500:
            return `Código do pedido: ${codigo}
                    Descrição: Cachorro Quente
                    Qtd: ${qtd}
                    Valor unitário: R$3,50
                    Valor total: R$${(qtd * 3.5).toFixed(2).toString().replace('.', ',')}`
            break
        case 600:
            return `Código do pedido: ${codigo}
                    Descrição: Cachorro Quente
                    Qtd: ${qtd}
                    Valor unitário: R$2,80
                    Valor total: R$${(qtd * 2.8).toFixed(2).toString().replace('.', ',')}`
            break
        default:
            return 'Produto não existe.'        
    }
}

console.log(valorPedido(100, 2))