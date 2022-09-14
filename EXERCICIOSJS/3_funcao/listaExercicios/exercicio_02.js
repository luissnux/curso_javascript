// function tiposTriangulos(l1, l2, l3) {
//     if (l1 == l2 && l1 == l3) {
//         return 'Equilátero'
//     } else if (l1 == l2 || l2 == l3 || l3 == l1) {
//         return 'Isóceles'
//     } else {
//         return 'Escaleno'
//     }

// }

// console.log(tiposTriangulos(1, 1, 1))


tiposTriangulos = (l1, l2, l3) => {
    if (l1 == l2 && l1 == l3) {
        return 'Equilátero'
    } else if (l1 == l2 || l2 == l3 || l3 == l1) {
        return 'Isóceles'
    } else {
        return 'Escaleno'
    }

}

triangulo = tiposTriangulos(1, 1, 1)
console.log(triangulo)