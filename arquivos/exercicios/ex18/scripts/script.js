var valorDig = document.querySelector('input#inNum')
var resulNum = document.querySelector('select#resultado')
var guardaValores = []

function adicionar(){
    if(valorDig.value == 0 || valorDig.value > 100){
        window.alert(`Valor inválido ou já encontrado na Lista`)
        
    }else{
        let numero = Number(valorDig.value)
        guardaValores.push(numero)
        
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        resulNum.appendChild(item)

    }
}

function verificar(){
    for(var i = 0; i < guardaValores.length; i++){
        console.log(`item ${i} na posicao ${guardaValores[i]}`)
    }
    let escreve = document.querySelector('div#result')
    //escreve.innerHTML += `valores digitado é ${numero} <br> `
}

//|| guardaValores.indexOf(numero)