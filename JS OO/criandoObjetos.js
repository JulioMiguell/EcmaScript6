// Usando a notacao literal

const obj1 = {}

// Object em JS

const obj2 = new Object

//Funcoes construtores

function Produto (nome, preco, desc){
    this.nome = nome,
    
    //encapsulamento
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta', 1.20, 0.1)
const p2 = new Produto('Notebook', 2990, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Function Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = new criarFuncionario('Julio', 1000, 3)
const f2 = new criarFuncionario('Carlos', 1000, 10)

console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma funcao famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) //transforma em objeto, neste caso, info