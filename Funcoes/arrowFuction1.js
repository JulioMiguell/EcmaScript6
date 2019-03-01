/*
Funções Arrow são anônimas e o This não varia
" arrowFunction =" (parametros) => retorno implícito

*/

let dobro = function(a) {
    return 2 * a 
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Return implícito

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Parametro '_' que pode ser omitido ao ser chamada
console.log(ola())
