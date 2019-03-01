// Objs em JS é uma colecao dinamica de pares chaves/valor

const produto = new Object 

produto.nome = 'Cadeira'

produto['Marca do produto'] = 'Generica'

produto.preco = 220

console.log(produto)

delete produto.preco

console.log(produto)

const carro = {

    modelo: 'CB20',
    valor: 90000,
    proprietario: {

        nome: 'Raul',
        idade: 56,
        endereco: {

            logradouro: 'Rua Nova',
            numero: 123
        }

    },

    condutores: [{
        nome: 'Junior',
        idade: 20
    },{
        nome: 'Ana',
        idade: 29
    }],

    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000

console.log(carro)