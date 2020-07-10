function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max] //destructuring
    }

    return new Promise (resolve => {
        const aleatório = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatório)
    })
}

gerarNumerosEntre(50,100).then(console.log)