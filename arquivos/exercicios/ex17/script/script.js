function gerarTabuada(){
    var numeroDig = document.querySelector('input#valorNum')
    var resulSoma = document.querySelector('select#selSoma')
    var resulSub = document.querySelector('select#selSub')
    var resulMult = document.querySelector('select#selMult')
    var resulDiv = document.querySelector('select#selDiv')
    
    if(numeroDig.value.length == 0){
        window.alert(`Por favor, digite um número`)
    }else{
        let numero = Number(numeroDig.value)
        //evitar que fique add embaixo novos elementos
        resulSoma.innerHTML = ``
        resulSub.innerHTML = ``
        resulMult.innerHTML = ``
        resulDiv.innerHTML = ``

        for(var i = 0; i < 11; i++){
            //soma
            //para usaro select faz-se o createElement('option')
            let item = document.createElement('option')
            //faço isso para escrever dentro do select
            item.text = ` ${numero} + ${i} = ${numero - i}`
            //add o elemento 
            resulSoma.appendChild(item)

            //subtração
            let item1 = document.createElement('option')
            item1.text = `${numero} - ${i} = ${numero - i}`
            resulSub.appendChild(item1)

            //Multiplicação
            let item2 = document.createElement('option')
            item2.text = `${numero} * ${i} = ${numero * i}`
            resulMult.appendChild(item2)

            //Divisão
            let div = (numero / i).toFixed(1)
            
            let item3 = document.createElement('option')
            item3.text = `${numero} / ${i} = ${div}`
            resulDiv.appendChild(item3)

            
        }
    }
}