/*
Passar uma função para outra função e
quando um determinado evento acontecer
a função 'será disparada'

*/

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}


fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

/*
Notes about forEach()
In forEach, there`s a param called callbackfn
that accepts up three arguments(value: string index: Number, array: string[])

*/