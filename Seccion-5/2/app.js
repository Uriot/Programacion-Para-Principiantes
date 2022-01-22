//* Implementar

function imprimirTabla(base, limite){
    
    for (let i = 1; i<=limite; i++){
        let resultado = base * i;
    
        console.log( base + ' x ' + i + ' = ' + resultado);
        //console.log('2 x '+ i + '= ' + (i*2));
    }
}

// console.log(imprimirTabla());

imprimirTabla(10,5);
imprimirTabla(3,10);