function tratarErroELancar(erro){
    //throw new Error("Ocorreu um erro")
    //throw 10
    //throw 'Ocorreu um erro no seu código'
    throw {
        nome: erro.name,
        msg: erro.message 
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Executou")
    }
}

const obj = { nome: "Roberto"}
imprimirNomeGritado(obj)