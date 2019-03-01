// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar branca'
delete produto.tag
console.log(produto)

//Object.seal - selar um objeto - não pode add novos att nem excluí-los, mas podem ser mexidos

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrebome = 'Silva'
delete pessoa.nome
pessoa.idade = 25
console.log(pessoa)
