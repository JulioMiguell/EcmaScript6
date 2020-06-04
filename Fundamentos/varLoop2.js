var funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}
// pelo fato de não ter escopo, imprimirá 10
funcs[2]()
funcs[8]()