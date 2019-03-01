function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`Você passou com a nota ${nota}`)
    }
}

soBoaNoticia(7)
soBoaNoticia(9)

function seForVerdade(valor){
    //O valor é convertido para true
    if (valor){
        console.log("É verdade!" + valor)
    }
}

seForVerdade()
seForVerdade("")
seForVerdade(9)
seForVerdade(0)
seForVerdade(1)
