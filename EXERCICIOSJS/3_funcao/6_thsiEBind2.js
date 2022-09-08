
// function Pessoa() {
//     this.idade = 0

//     setInterval(function() {  // setInterval é um temporizador, irá ficar executando a função
//         this.idade++
//         console.log(this.idade)
//     }, 1000)  // o intervalo é passado em milisegundos, 1000ms = 1s
// }

// new Pessoa

// Retorna NaN porque o this está apontando para a função setInterval e não para o objeto Pessoa

// Saída:

// NaN
// NaN
// NaN
// NaN
// NaN

// -----------------------------------------------------------------

// Uma maneira de resolver isso seria utilizando a função bind

// function Pessoa() {
//     this.idade = 0

//     setInterval(function() {
//         this.idade++
//         console.log(this.idade)
//     }.bind(this), 1000)  // utilizando a função bind para utilizar o this de Pessoa
// }

// new Pessoa

// Saída:

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8

// -----------------------------------------------------------------


function Pessoa() {
    this.idade = 0

    const self = this // como a variável self está dentro de pessoa, self irá receber this de Pessoa
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

Saída:

1
2
3
4
5
6
7