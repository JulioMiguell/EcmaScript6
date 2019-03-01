const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
//O This não estará mais apontando mais para o objeto pessoa
//Obs: Quando chama os parênteses, está invocando a função
const falar = pessoa.falar
falar() // Conflito de paradigmas OO e funcional

// O bind amarra a função no contexto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()