function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,1,1,1,1,1))
console.log(soma())
console.log(soma('teste', ' legal'))

//arguments é um array interno