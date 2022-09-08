function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

console.log(rand([50, 40]))
console.log(rand([992])) // será o minímo já que o máximo é 1000
console.log(rand([, 10])) // irá assumir o min como 0
console.log(rand([]))
//console.log(rand())

// Saída:

// 47
// 992
// 3
// 320