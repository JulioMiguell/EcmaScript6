/*
Obj: mostrar que o This não varia nas funções Arrow
*/

function Pessoa() {
    this.idade =0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa