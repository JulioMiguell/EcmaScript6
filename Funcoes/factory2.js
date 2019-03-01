function criarProduto (nome, preco){
    return {
        nome,
        precoProduto: preco - (preco * 0.10) 
    }

}

console.log(criarProduto('Sabão Gourmet', 100))
