function Verificar() {
    var anoNasc = document.querySelector('input#numDigitado').value
    var sexoEscolhido = document.querySelector('input#sexo')
    var resul = document.querySelector('input#resultado')
    var idade = 2020 - anoNasc

    if (sexoEscolhido[0].value == masculino) {
        console.log('vc é homem')
    } else if (sexoEscolhido[1].value == feminino) {
        console.log('vc é mulher')
    }

}