//A função callback recebe três parâmetros (nome, indice, array)

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//forEach(callback function)
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) 

const exibirAprovados = aprovado => console.log(aprovado)

console.log(" ")
aprovados.forEach(exibirAprovados)
