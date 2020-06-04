console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//prototype - pode add novos funcoes e atributos dentro de um determinado protótipo

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('julio miguel'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,4,5].first())