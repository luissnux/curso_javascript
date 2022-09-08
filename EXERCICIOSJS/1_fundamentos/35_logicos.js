function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // operador bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// Saída:

// {
//     comprarSorvete: true,
//     comprarTv50: true,
//     comprarTv32: false,
//     manterSaudavel: false
//   }
//   {
//     comprarSorvete: true,
//     comprarTv50: false,
//     comprarTv32: true,
//     manterSaudavel: false
//   }
//   {
//     comprarSorvete: true,
//     comprarTv50: false,
//     comprarTv32: true,
//     manterSaudavel: false
//   }
//   {
//     comprarSorvete: false,
//     comprarTv50: false,
//     comprarTv32: false,
//     manterSaudavel: true
//   }