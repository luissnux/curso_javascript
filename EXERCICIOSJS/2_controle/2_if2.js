function teste1(num) {
    if(num > 7)  // quando não utlizar chaves, apenas uma senteça será executado pelo if
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {  // cuidado com o ";", não usar com as estruturas de controle 
        console.log(num)
    }

    // if(num > 7) 
    //     ;       // Sentença de código vazia
    // {
    //     console.log(num)  // bloco que será executado
    // }
}

teste2(2)
teste2(8)

// Saída:

// Final
// 8
// Final
// 2
// 8
