const nome = 'João'
const concatenacao = 'Ola ' + nome + '!'
const template = ` Olá${nome} ` //Template String suporta quebras de linha
console.log(concatenacao, template)

//Expressões
console.log(`2 elevado a 4 = ${Math.pow(2,4)}`)

//Arrow function
const up = text => text.toUpperCase()

console.log(`EI... ${up('cuidado')}!`)