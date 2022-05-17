module.exports = class cliente{
    constructor () {
    this.id = 0
    this.nome = "" 
    this.telefone = ""

    }

    nomeUpercase(){
    return this.nome.toUpperCase()

    }


    static primeiro (){
        return new cliente()
    }
    
    static todos (){
        return [ 
            new cliente(),
            new cliente(),
            new cliente(),
            new cliente(),
            new cliente(),
            new cliente(),
            new cliente(),
            new cliente(),
            new cliente(),
            new cliente(),
        ]
    }
}