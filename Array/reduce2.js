const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 8.7, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: todos os alunos são bolsistas? 

const alunosBolsistas = alunos.map(a => a.bolsista).reduce((acumulador, atual) => {
    booleanBolsista = acumulador && atual
    console.log(`Ac: ${acumulador} e At: ${atual}`)
    return booleanBolsista
})

console.log(alunosBolsistas)

// Desafio 2: Algum aluno é bolsista?