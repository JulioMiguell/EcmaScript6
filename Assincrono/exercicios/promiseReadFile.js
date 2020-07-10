const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
console.log(caminho)
function lerConteudo(caminho) {
   
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))
    })
}

lerConteudo(caminho).then(conteudo => console.log(conteudo))