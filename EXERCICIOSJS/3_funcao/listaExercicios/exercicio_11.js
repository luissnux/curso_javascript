// 11) ​As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.


anoBissexto = ano => {
    if (Number.isInteger(ano)) {
        if (ano % 400 == 0 || ano % 100 == 0 || ano % 4 == 0) {
            console.log('É um ano bissexto!')
            return true
        } else {
            console.log('Não é um ano bissexto!')
            return false
        }
    } return 'Não é um ano válido!'
}

validaBissexto = anoBissexto(2023)
console.log(validaBissexto)