/*
A promises surgiram diante da necessidade de evitar callbacks hell.
Cenários abaixo exemplificam isto
*/

// setTimeout(function(){
//     console.log('Excutando callback')
    
//     setTimeout(function(){
//         console.log('Excutando callback')
        
//         setTimeout(function(){
//             console.log('Excutando callback')
//         },2000)    
//     },2000)
    
// },2000)

//Solução com promises

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando Promise')
            resolve('valor retornado pela promise')
        }, tempo)
    })
}

esperarPor(3000)
    .then(console.log)
    .then(esperarPor)
    .then(console.log)