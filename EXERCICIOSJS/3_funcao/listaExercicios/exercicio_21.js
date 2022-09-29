// 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
// 1) crianças com menos de 10 anos pagam R$80; 
// 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
// 4) conveniados acima de 60 anos pagam R$130;

planoDeSaude = idade => {
    const valorPlono = 100

    if(idade <= 10) {
        return `Valor a ser pago R$${(valorPlono + 80).toFixed(2).toString().replace('.', ',')}`
    } else if(idade > 10 && idade <= 30) {
        return `Valor a ser pago R$${(valorPlono + 50).toFixed(2).toString().replace('.', ',')}`
    } else if(idade > 30 && idade <= 60) {
        return `Valor a ser pago R$${(valorPlono + 95).toFixed(2).toString().replace('.', ',')}`
    } else if(idade > 60) {
        return `Valor a ser pago R$${(valorPlono + 130).toFixed(2).toString().replace('.', ',')}`
    } else {
        'Idade inválida.'
    }
}

console.log(planoDeSaude(61))