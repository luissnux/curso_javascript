// uma funçao sem parâmetro, pode receber parâmetros através da propriedade arguments
function soma() {
    let soma = 0
    for (i in arguments) { // toda função tem esse array interno
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 1.2, "Teste"))
console.log(soma('a', 'b', 'c'))