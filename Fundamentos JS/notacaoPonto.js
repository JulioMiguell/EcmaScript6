console.log(Math.ceil(6.1)) 

const obj1 = {}
obj1.nome = 'Celular'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Julio')
const obj3 = new Obj('João')

console.log(obj2.nome)
console.log(obj3.nome)