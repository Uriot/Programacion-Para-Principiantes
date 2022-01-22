
function filtrarPorLetra (heroes, letra){
    let nuevoArr = [];
    let heroe = '';
    letra = letra.toUpperCase();
    for(let i = 0; i<heroes.length; i++){
        heroe = heroes[i];
        if(heroe[0] === letra){
            nuevoArr.push(heroe);
        }
    }

    return nuevoArr;
}


let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra( heroes, 'x');
console.log( heroesCon );