var teste = function palavra(x){
    return x*2
    
}

teste(5)

function fatorial(numero){
    let fat = 1
    for(var i = numero; i > 1; i--){
        fat *= i
    }
    return fat
}

fatorial(5)

function fatorialRecusiva(num){
    if(num == 1){
        return 1
    }else{
        return num * fatorialRecusiva(num-1) 
    }
}

console.log(fatorialRecusiva(6))