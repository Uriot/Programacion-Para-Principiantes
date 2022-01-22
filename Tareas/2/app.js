//! Kilomtros a millas

let kilometros = 20;

function convertirAMillas(kilometros){
    let millas = 0;
    millas = (kilometros * 0.62).toFixed(2);
    return millas;
}

console.log(convertirAMillas(kilometros) + ' Millas');