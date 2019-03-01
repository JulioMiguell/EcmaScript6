// par nome/valor

const saudacao = 'Ola'

function exec() {
    const saudacao = 'Hellooo'
    return saudacao
}

// Objetos: grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 40,
    endereco: {
        logradouro: 'Rua 22 de dezembro',
        numero: 999
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)