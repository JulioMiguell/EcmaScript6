console.log('Caso 1)', '1' == 1)
console.log('Caso 2)', '1' === 1) //estritamente igual
console.log('Caso 3)', '3' != 3) // !'=
console.log('Caso 4)', 3 !== 3) // Estritamente diferente !'==

const d1 = new Date(0)
const d2 = new Date(0)

// Não há diferença, pois as variáveis d1 e d2 apontam para 
// o mesmo end de memória
console.log('Caso 5)', d1 === d2)
console.log('Caso 5)', d1 == d2)
