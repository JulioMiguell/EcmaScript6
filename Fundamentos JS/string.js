let i = 0
const escola = 'Cod3r'

while (i < 5){
    console.log(escola.charAt(i))
    i++
}

// Funções Strings
console.log(escola.charCodeAt(3)) //retorna o codigo da tabela ASCII
console.log(escola.indexOf(3))
console.log(escola.substring(2)) //retorna uma substring a partir da posição dada
console.log(escola.substring(0,3)) // da posição 0 até a 3
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3,'e'))

//String em um Array

console.log('João, Julio, Mila'.split(','))