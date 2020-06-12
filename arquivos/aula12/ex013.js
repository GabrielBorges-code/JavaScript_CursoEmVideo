var agora = new Date()
var diaSemana = agora.getDay()

console.log(diaSemana)
/*
O get day atribui valores para os dias
0 - Sunday
1 - Monday
2 - Tuesday
3 - Wednesday
4 - Thursday
5 - Friday
6 - Sartuday
*/
switch (diaSemana){
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`[ERRO] Dia inválido`)
        break
}