
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

function numeroParesImpares(numeros){
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] % 2 == 0){
            console.log(numeros[i] + ' es un número par');
        }else{
            console.log(numeros[i] + ' es un número impar');
        }
    }
}

numeroParesImpares(numeros);