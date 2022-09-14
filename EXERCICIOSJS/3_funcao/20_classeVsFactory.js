class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Luis')
p1.falar()

//=========================================

function criarPessoa(nome) {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

p2 = criarPessoa('Marli')
p2.falar()