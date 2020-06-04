const valores = [9, 3, 1.3, 17, 25]
console.log(valores[0], valores[2])
console.log(valores)
valores[5] = 7
console.log(valores)
console.log(valores.length)

//add elementos variados

valores.push({id: 3}, false, null,'Teste')
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)