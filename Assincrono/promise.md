# Notas sobre promises

> Promises definem uma ação que será executada podendo ela ser resolvida (caso de sucesso) ou rejeitada (caso de um erro)

Obs: Lançar um erro e rejeitar uma promise são coisas distintas. Lançar um erro fará com que o código pare sua execução ao contrário de rejeitar uma promise, que prosseguirá com a execução.

### Anotamomia de uma promise

```javascript
const promise = new Promise((resolve, reject) => {
    try {
        resolve(funcaoX || 'someValueHere')
    } catch(e) {
        reject(e)
    }
});

p
    .then((param) => /* sucesso */)
    .catch((err) => /* erro */)

// podemos tratar erros e sucessos no then

p 
    .then(resposta => { /*  tratatar a responsa */}, erro => {/* tratar o erro */})

```

### Estados de uma promise

* Peding: Estado inicial da promise. Foi iniciada mas não foi realizada ou rejeitada.
* Fulfilled: Promise resolvida
* Rejected: Promise rejeitada
* Settled: Estado final da promise - quando ela já sabe se foi resolved ou rejected

Todo :
* [] notas sobre encadeamento