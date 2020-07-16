function contar(){
    var inicio = document.querySelector('input#inicio')
    var passo = document.querySelector('input#passo')
    var fim = document.querySelector('input#fim')
    var resultado = document.querySelector('div#resultado')

    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        window.alert(`Impossível contar, por favor preencher todo o formulário`) 
      
    }else{
        resultado.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(fim.value)
        
        if(p <= 0){
            window.alert (`Passo Inválido ❗ Será atribuido o valor 1`)
            p = 1
        }

        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `👉 ${c}  `
            }
        }else{
            //contagem decrescente 
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += `👉 ${c}  `
                
            }
        }
        resultado.innerHTML += ` 🏁`
    }
}