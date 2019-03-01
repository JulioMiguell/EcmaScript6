// resulta em um único valor de retorno. Sintaxe: arra.reduce(callback(acumulador, valorAtual), param - pode ser qualquer um)

const array1 = [1,2,3,4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

console.log(array1.reduce(reducer))


const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.8, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    console.log(`Ac: ${acumulador} e At: ${atual}`)
    return acumulador + atual
})

console.log(resultado)