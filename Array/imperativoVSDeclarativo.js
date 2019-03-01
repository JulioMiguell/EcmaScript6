const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Julia', nota: 9.2}
]

//Abordagem Imperativa

let total1 = 0

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1/alunos.length)

//Declarativo

/*
permite o reuso, maior coesão.
No imperativo todos os passos são exibidos. Já no declariativo,
os detalhes são abstraídos.
O foco do declaritivo é o que deve ser feito e não como deve ser feito.

*/

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)