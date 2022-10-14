// 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá 
// conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com 
// valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes 
// para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão 
// aparecer no console.

const vetorInterio = [10, 20, 30, 40]
const vetorString = ['maça', 'uva', 'banana', 'laranja']
const vetorDouble = [1.3, 2.5, 3.6, 6.7]

for(let i = 0; i < 4; i++) {
    console.log(`${vetorString[i]} `.concat(`${vetorInterio[i]} `).concat(vetorDouble[i]))
}

console.log(vetorInterio.concat(vetorString.concat(vetorDouble)))