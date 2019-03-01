const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
//Uso de funções anônimas:
imprimirResultado(3,4, function (x, y){
    return x - y
})

//Usando ArrowFunction
imprimirResultado(3,4, (x, y) => x * y)

const pessoa = {
    falar: function (){
        console.log('Olá')
    }
}

pessoa.falar()