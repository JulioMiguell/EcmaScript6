/*

*/

let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //comparaComThis aponta para obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // retorno falso, pois o arrow está dentro de um módulo do node
comparaComThisArrow(module.exports) //Será verdadeiro dentro deste módulo