// Tratamento de erros com promises

function funcionarOuNao(valor, chanceErro) {
    return new Promise( (resolve, reject) => {
        try {
            con.log('algo') //forçando erro
            if(Math.random() < chanceErro) reject('Ocorreu um erro')
            else resolve(valor)
        }
        catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))    