console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 1
module.exports.c = 3

exports = null
console.log(module.exports)

/*
exports é somente uma outra variável que aponta para o mesmo objeto
Quem retorna é o module.exports
*/

module.exports = { novoObjeto: true}