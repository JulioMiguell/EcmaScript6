// Um obj em JS ele tem a referencia para seu protótipo

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //procura o protótipo (classe Pai)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Array.prototype)