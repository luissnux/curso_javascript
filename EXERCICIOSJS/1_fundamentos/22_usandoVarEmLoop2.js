var funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// será impresso o valor 10, porque a declaração da função foi realizada 
// com o var e o var não tem escopo de função.
funcs[2]()
funcs[8]()

