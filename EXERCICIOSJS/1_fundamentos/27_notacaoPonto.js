console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' // essa linha é equivalente a linha de baixo
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome  // tornando o atributo público
    this.exec = function() { // tornado a função pública, 
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

// Saída:

// 7
// Bola
// Cadeira
// Mesa
// Exec...
