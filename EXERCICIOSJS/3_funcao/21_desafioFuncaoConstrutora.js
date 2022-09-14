// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('Luis')
// p1.falar()


function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

p1 = new Pessoa('Luis')
p1.falar()

// foi declarada a variável this.nome para que se possa ter acesso ao nome:
console.log(p1.nome)
