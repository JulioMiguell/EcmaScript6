// armazenando uma funcao em uma variavel
const imprimirSoma = function(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel ""=> substitui o nome function 
const soma = (a, b) => {
    return a + b
}

//retorno implicito

const subtracao = (a,b) => a - b