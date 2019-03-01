const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
pilotos.pop() //Massa será removido - remove o último elemento do array

console.log(pilotos)

pilotos.push('Malakoi')

pilotos.shift() //remove o primeiro elemento

pilotos.unshift('Hamilton') //insere no inicio do array

console.log(pilotos)

//add a partir do indice 2, nao remove nada
pilotos.splice(2, 0, 'Bottas', 'Massa')

console.log(pilotos)

pilotos.splice(3,2)

console.log(pilotos)

//pilotos.slice(1,4)
const algunsPilots1 = pilotos.slice(2) // recorta o array a partir do indice indicado
console.log(algunsPilots1)