// Âmbito de função
/*
A função rand recebe como parâmetro um objeto na qual
é capturado min e max pelo uso do destructuring.
*/

// Aqui é usado o operador destructuring
function rand({min = 0, max = 1000}){
    // random gera números abaixo de 1
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

//Aqui é passado um objeto
console.log(rand({max:50, min: 40})) 

const obj = {max: 50, min: 50}

console.log(rand(obj))