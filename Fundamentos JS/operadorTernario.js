/*
A primeira parte do operador ternário é uma expressão. 
A segunda é a '?' e a terceira é um dos possíveis resultados:
'Aprovado' : 'Reprovado'
Resumo: sitaxe: (Expressão) ?  1: 2

*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))