function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdade(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdade() //undefined - falso
seForVerdade(null) // falso
seForVerdade(undefined) // falso
seForVerdade(NaN) // falso
seForVerdade('') // falso
seForVerdade(0) // falso
seForVerdade(-1) // verdadeiro
seForVerdade(' ') // verdadeiro
seForVerdade('?') // verdadeiro
seForVerdade([]) // verdadeiro
seForVerdade([1, 2]) // verdadeiro)
seForVerdade({}) // verdadeiro

// Saída:

// Aprovado com 8.1
// É verdade... -1
// É verdade...  
// É verdade... ?
// É verdade... 
// É verdade... 1,2
// É verdade... [object Object]