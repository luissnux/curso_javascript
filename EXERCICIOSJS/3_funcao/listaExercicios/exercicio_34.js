// 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.


function comparaString(texto1, texto2) {
    const listaTexto1 = texto1.toLowerCase().split('')
    const listaTexto2 = texto2.toLowerCase().split('')
    let novaLista = []

    if(listaTexto1.length <= listaTexto2.length) {
        for(let i1 in listaTexto1) {
            for(let i2 in listaTexto2) {
                if(listaTexto1[i1] == listaTexto2[i2]) {
                    novaLista.push(listaTexto1[i1])
                }
            }
        }
    } else{
        for(let i1 in listaTexto2) {
            for(let i2 in listaTexto1) {
                if(listaTexto2[i1] == listaTexto1[i2]) {
                    novaLista.push(listaTexto2[i1])
                }
            }
        }
    }

    if(listaTexto1.length == novaLista.length) {
        return true
    } else if(listaTexto2.length == novaLista.length) {
        return true
    } else {
        return false
    }
}


console.log(comparaString('aBcD', 'EdCbA'))  //true
console.log(comparaString('EdCba', 'abcd'))  //true
console.log(comparaString('edCBa', 'VBcd'))  //false
console.log(comparaString('vbCd', 'eDcbA'))  //false
