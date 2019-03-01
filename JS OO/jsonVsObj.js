// Json muito usado no mercado para interoperabilidade entre sistemas - formato textual generico
// json validator - ferramentas online

const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) - inválido
console.log(JSON.parse('{"a": 1, "b":2, "c": 3}')) //transforma o JSON em um objeto JS

console.log(JSON.parse('{"a": 1, "b":"string", "c": true, "d": {}, "e": []}'))
