let a = 3

global.b = 123
// global é um objeto 

this.c = 231
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//Module exports joga as variáveis sem let para fora do modulo 

