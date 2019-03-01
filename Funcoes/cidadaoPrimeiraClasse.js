// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar funcao literal

function fun1() {}

// Pode-se armazenar função em uma variável
const fun2 = function(){}

// pode-ser armazenar em array
const array = [function(a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Pode-se armazenar em atributos de objetos

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// Função como parâmetro para outra

function run (fun){
    fun()
}

run(function(){console.log('Executando... hahah')})

//Uma função pode conter/retorna outra funcao

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4) //Como soma retorna outra funcao, 'invoca' a funcao retornada
const cincoMais = soma(2,3)
cincoMais(4)