// libras a kilogramos

let libras= 160;

function convertirAKilogramos(libras){
    let kilogramos = 0;
    
    kilogramos = (libras/2.2046).toFixed(2);
    //! otra forma Math.round(kilogramos);
    //console.log(libras + ' lb = ' + kilogramos + ' kl');
    return kilogramos;
}
convertirAKilogramos(libras);

console.log(convertirAKilogramos(libras) + ' Kilogramos');
