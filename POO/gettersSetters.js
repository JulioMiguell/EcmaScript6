const sequencia = {
    _valor: 1,

    get valor(){
        return this._valor++
    },
    
    set valor(val){
        if(val > this._valor){
            this._valor = val
        }
        

    }
}