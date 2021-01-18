# Notas sobre promises

> Promises definem uma ação que será executada podendo ela ser resolvida (caso de sucesso) ou rejeitada (caso de um erro)

Obs: Lançar um erro e rejeitar uma promise são coisas distintas. Lançar um erro fará com que o código pare sua execução ao contrário de rejeitar uma promise, que prosseguirá com a execução.

### Anatomia de uma promise

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

### Keeping in mind

#### Rewrite using async/await: 
```javascript
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404
```

#### Solution: 

```javascript
async function loadJson(url) {
    const response = await fetch(url)
    if (response.status == 200) return response.json();
    throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(alert)

```