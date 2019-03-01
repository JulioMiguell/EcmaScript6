console.log(soma(3,4))
/*
O interpretador do JS carrega primeiro as functions declarations
e depois roda o código. Com function expression e name funciton expression
 isso não ocorre
*/


// function declararion
function soma(x,y) {
    return x + y
}

// function expression
const sub = function (x,y){
    return x - y
}

// named function expression
const mult = function mult(x,y){
    return x * y
}