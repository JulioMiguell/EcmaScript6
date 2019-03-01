let isAtivo = false
console.log(isAtivo)
isAtivo = true

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Duas negações
console.log(!isAtivo) // uma negação

/*
Negação duas vezes !! transforma qualquer coisa em true.
*/

console.log(!!'Name')

console.log("falsos: ")
console.log(!!0)
console.log(!!'') // String vazia sem espaço em branco
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let nome = ''

console.log(nome || 'Entrada não fornecida')