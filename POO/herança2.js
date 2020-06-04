// prototype chain


const avo = {att1: 'A'}
const pai = {__proto__: avo, att2: 'B', att3: '3'}
const filho = {__proto__: pai, att3: 'C'}

console.log(filho.att1, filho.att2, filho.att3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual+= delta

        }
        else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 320 //Shadowing
}

const volvo = {
    modelo: 'V40',
    velMax: 240,
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //estabelece uma relação de prototipos entre dois objetos
Object.setPrototypeOf(volvo, carro) // volvo -> carro - aponta para o protótipo

console.log(ferrari) // mostra apenas os atributos do objeto ferrari

volvo.acelerarMais(103)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())