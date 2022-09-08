// variável que recebe uma função anônima
let dobro = function(a) {
    return 2 * a
}

// reescrevendo a função acima com arrow, se quiser chamar a função arrow novamente quem que armazenar
// ela em uma variável ou em uma constante.
dobro = (a) => {
    return 2 * a
}

// ainda podemos escrever a arrow function de uma forma ainda mais reduzida quando tiver
// apena um parâmetro
dobro = a => 2 * a  // return está implícito
console.log(dobro(Math.PI))


// outro exemplo

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // por se tratar de uma função sem parametro, pode demos usar '_' ao invés de '()'

console.log(ola())