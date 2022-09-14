// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!') 
    // tudo que for definido aqui dentro, const, variável, objeto irá ficar
    // dentro do contexto dessa função.
})()