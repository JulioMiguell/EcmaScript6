function getPreco(imposto = 0,  moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1


console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 100000, desc: 0.20}

console.log(getPreco.call(carro)) //Uso do call
console.log(getPreco.apply(carro)) //Uso do Apply

console.log(getPreco.call(carro, 0.10, 'U$')) //O call permite passar os parâmetros -> primeiro o contexto depois os parametros
console.log(getPreco.apply(global, [0.17, '$'])) //No apply usa-se um array