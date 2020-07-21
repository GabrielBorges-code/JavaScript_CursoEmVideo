let amigo = {
    nome:"José",
    sexo:"M",
    peso:105,
    idade:22,
    engorda(n=0){
        this.peso += n
    } 
}

amigo.engorda(15)

console.log(`${amigo.nome} pesa ${amigo.peso}`)