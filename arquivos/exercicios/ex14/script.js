function load (){
    var content = window.document.getElementById('content')
    var photo = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()

    content.innerHTML = `Agora são ${hour} horas`

    if(hour >= 5 && hour < 12 ){
        //Bom dia
        photo.src = 'img/manha.png'
        document.body.style.background = '#feca91'
    }else if (hour >= 12 && hour < 18){
        //boa tarde
        photo.src = 'img/meio-dia.png'
        document.body.style.background = '#55a5d8'
    }else{
        // boa noite
        photo.src = 'img/noite.png'
        document.body.style.background = '#1f0c18'
    }
}
