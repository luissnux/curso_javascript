// 08) ​Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
// registro de todos as pontuações feitas por jogo. Após cada jogo ele anota o novo valor confere e se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)


melhorPiorDesempenho = listaString => {
    listaPontuacao = listaString.split(' ') 
    let maiorNum = 0
    let menorNum = listaPontuacao[0]
    let countMaior = 0
    let piorJogo

    for (let i in listaPontuacao) {       
        if (parseInt(listaPontuacao[i]) <= menorNum) {
            menorNum = parseInt(listaPontuacao[i])
            piorJogo = listaPontuacao.indexOf(listaPontuacao[i])
            piorJogo++
        }

        i++
        if (parseInt(listaPontuacao[i]) > maiorNum) {
            maiorNum = parseInt(listaPontuacao[i])
            countMaior += 1
        }
    }

    return resultado = [countMaior, piorJogo]
}

console.log(melhorPiorDesempenho('0 1 2 3 4 5 10 20 30 40 50'))

