function describirPersona(p){

    //! Normal
    console.log(p.nombre + ' tiene una edad de ' + p.edad + ' y mide ' + p.estatura);

    //!Template String
    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}


let persona ={
    nombre: 'Elliot',
    edad: 23,
    estatura: 1.74,
}


describirPersona(persona);