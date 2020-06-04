// destructring "retira" atributos dos objetos

const pessoa = {
    nome: 'Júlia',
    idade: 21,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 777
    }
}

const {nome, idade} = pessoa //Destructuring

console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: { logradouro, numero}} = pessoa
console.log(logradouro, numero)