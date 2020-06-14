function verificar() {
    var date = new Date()
    var year = date.getFullYear()

    var anoNasc = document.querySelector('input#numDigitado').value
    var resul = document.querySelector('div#resultado')
    
    if (anoNasc == 0 || anoNasc > year){
        window.alert('Digite um ano válido')
    }else{
        var sexoEscolhido = document.getElementsByName('sexo')
        var idade = year - anoNasc
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexoEscolhido[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/Gerald.png')
            }else if (idade < 18){
                img.setAttribute('src', 'img/Bart.png')
            }else if (idade < 60){
                img.setAttribute('src', 'img/Homer.png')
            }else {
                img.setAttribute('src', 'img/Grand_father.png')
            }
        }else if (sexoEscolhido[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/Maggie.png')
            }else if (idade < 18){
                img.setAttribute('src', 'img/Lisa.png')
            }else if (idade < 60){
                img.setAttribute('src', 'img/Marge.png')
            }else {
                img.setAttribute('src', 'img/Grand_mon.png')
            }
        }
        
        resul.style.textAlign = 'center'
        resul.innerHTML = `Você ${genero} e tem ${idade} anos de idade`
        resul.appendChild(img)
    }
    
}