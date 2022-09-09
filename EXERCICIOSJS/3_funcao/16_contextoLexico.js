
// A função carrega com sigo o local onde ela foi definida, então irá procurar as informações dentro
// o escopo léxico onde ela foi definida, caso não encontre irá buscar em um escopo mais abrangente.

const valor = 'Global'

// o contexto lexico no qual essa função foi declarada, foi dentro do arquivo (módulo) do node,
// dentro do arquivo contextoLexico.js, não foi dentro de um objeto e nem dentro de outra função.
function minhaFuncao() {
    console.log(valor) // aqui irá mostrar o conteúdo de valor normalmente
}

function exec() {
    const valor = 'Local'
    minhaFuncao()  // por causa do contexto lexico, irá mostrar o valor 'Glocal'
}

exec()
