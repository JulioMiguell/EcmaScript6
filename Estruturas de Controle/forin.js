const nota = [1,2,4,6,2,8,7]

for (let i in nota){
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Souza',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}