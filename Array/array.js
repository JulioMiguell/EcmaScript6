console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) 

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados.push('José')
aprovados.push('Maria')
console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //A posicação ficará vazia - undefined
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

// array.splice(indexStart, indexEnd, addElement, AddElement)
aprovados.splice(1,1) //serve para remover e add elementos
console.log(aprovados)