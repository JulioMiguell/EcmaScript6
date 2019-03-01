class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Olá Mundo meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Júlia')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Julia')
p2.falar()