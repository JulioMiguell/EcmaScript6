//O switch do JavaScript percorre todos os cases

const imprimeResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
        case 6: case 5: case 4:
            console.log('Recuperação')
        case 3, 2, 1, 0:
            console.log('Nota invalida')
    }
}

imprimeResultado(10)
imprimeResultado(1)
imprimeResultado(11)