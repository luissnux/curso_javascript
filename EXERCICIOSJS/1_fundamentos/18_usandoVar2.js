// Variáveis criadas com var, tem escopo global e de função.
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Saída:

// dentro = 2
// fora = 2