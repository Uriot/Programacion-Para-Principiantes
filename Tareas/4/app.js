

let numeros = [1, 6, 8, 20, 2, 7, 10, 3, 5 ];


function numeroMayor(numeros){
    let maximo = 0;

    for(let i = 0; i<=numeros.length; i++){
        if(maximo<=numeros[i]){
            maximo = numeros[i];
        }
    }

    return maximo;

}

console.log(numeroMayor(numeros));