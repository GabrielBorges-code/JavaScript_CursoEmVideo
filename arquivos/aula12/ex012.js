//Exercio bom dia, boa tarde e boa noite
var horaAgora = new Date()
var hora = horaAgora.getHours()
if (hora < 12){
    console.log(`Bom dia `)
}else if (hora <= 18){
    console.log(`boa tarde`)
}else if (hora >= 19){
    console.log(`boa noite`)
}else if (hora <= 4){
    console.log(`boa madrugada`)
}
 
console.log(`Agora são ${hora} horas`)
