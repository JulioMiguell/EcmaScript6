const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // cliente http

axios.get(url).then(response => {
    const funcionarios = response.data
    chinesas = funcionarios.filter(f => f.pais === 'China').filter(f => f.genero === 'F')
    salariosChinesas = funcionarios.filter(f => f.pais === 'China').filter(f => f.genero === 'F').map( f => f.salario)
    menorSalario = Math.min.apply(null,salariosChinesas)
    chinesaMenorSalario = chinesas.filter(f => f.salario === menorSalario)

    
    console.log(chinesaMenorSalario)
})

// desafio: obter a mulher chinesa com o menor salário