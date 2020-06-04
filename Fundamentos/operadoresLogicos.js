function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv100 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    // Aqui retornara um objeto. 
    return { comprarSorvete, comprarTv100, comprarTv32, manterSaudavel}
}

console.log(compras(false, true))

