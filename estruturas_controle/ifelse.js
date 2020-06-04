function juntarPalavras(cadeia){
    let cadeiaInvertida = ''
    arrayCadeia = cadeia.split(' ')
    console.log(arrayCadeia)
    let tamanhoArrayCadeia = arrayCadeia.length

    for (let i = 0; i < tamanhoArrayCadeia; i++){
        console.log(i)
        cadeiaInvertida += arrayCadeia[i]
    }

    return cadeiaInvertida
}

function palindromo(cadeia){
    let cadeiaSaida = cadeia
    cadeia = juntarPalavras(cadeia)
    let inversoCadeia = cadeia.split('').reverse().join('')
    console.log(inversoCadeia)
    if(cadeia == inversoCadeia){
        console.log(`A palavra ${cadeiaSaida} é um palíndromo!`)
    } else{
        console.log(`A palavra ${cadeiaSaida} não é palíndromo`)
    }
}

palindromo('ame o poema')