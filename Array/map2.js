const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


// retornar um array com apenas os preços


let carrinhoMaped = carrinho.map(e => JSON.parse(e)).map(e => e.preco )

 console.log(carrinhoMaped)