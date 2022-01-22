
function masLargo(heroes){
    let heroe;
    let posicionMasGrande;
    let mayorCaracteres = 0;
    let tamanio = 0;
    for(let i = 0; i<heroes.length; i++){
        heroe = heroes[i];
        tamanio = heroe.length;
        if(mayorCaracteres < tamanio){
            mayorCaracteres = tamanio;
            posicionMasGrande = i;
        }
    }
    return (heroes[posicionMasGrande]);
}


let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Xavier'];
let heroeLargo = masLargo( heroes );

console.log( heroeLargo ); 