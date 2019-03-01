const peso1 = 1.0
const peso2 = Number('2.0')
let mediaFinal = null

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(mediaFinal = media.toFixed(2).toString())

if (typeof mediaFinal == 'string'){
    console.log("Confirmado")
}

console.log((10.892).toFixed(2))