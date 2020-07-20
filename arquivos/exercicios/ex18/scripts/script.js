var valorDig = document.querySelector('input#inNum')
var resulNum = document.querySelector('select#resultado')
var escreve = document.querySelector('div#result')
var guardaValores = []

function adicionar(){
    escreve.innerHTML = ` `
    let numero = Number(valorDig.value)
    if(valorDig.value == 0 || valorDig.value > 100){
        return msgErro()
        
    }else if (guardaValores.indexOf(numero) == -1){
        guardaValores.push(numero)

        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        resulNum.appendChild(item)
        
    }else{
        return msgErro()
    }
    valorDig.value = ``
    valorDig.focus()
}

function verificar(){
    if(guardaValores == 0){
       return msgErro()

    }else{
        let tamVetor = guardaValores.length
        let min = Math.min(...guardaValores)
        let max = Math.max(...guardaValores)
        let soma = 0
        
        for(var i = 0; i < guardaValores.length; i++){
            soma += Number(guardaValores[i])    
            
        }

        let media = (soma / tamVetor).toFixed(2)
    
        escreve.innerHTML = `Ao todo temos ${guardaValores.length} armazenados <br>
        O menor valor informado foi ${min} <br>
        O maior valor informado foi ${max} <br>
        A soma dos valores é ${soma} <br>
        A média dos valores é ${media} <br>`

    }
}

function msgErro(){
    window.alert(`Valor inválido ou o valor já se encontra no array`)
}