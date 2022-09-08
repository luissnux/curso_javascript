function Pessoa() {
    this.idade = 0

    // utilizando a função arrow o this não varia
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// Saída:

// 1
// 2
// 3
// 4
// 5
// 6
// 7