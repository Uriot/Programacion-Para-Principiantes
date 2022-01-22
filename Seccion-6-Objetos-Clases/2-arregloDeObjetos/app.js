let persona1 ={
    nombre: 'Fernando',
    edad: 32
};
let persona2 ={
    nombre: 'Melisa',
    edad: 27
};
let persona3 ={
    nombre: 'Juan',
    edad: 40
};

let personas = [persona1, persona2, persona3];

// console.log(personas);

function imprimirPersonas(personas){
    for(let i = 0; i<personas.length; i++){
        // console.log(`${personas[i].nombre} -- ${personas[i].edad}`);
        let persona = personas[i];
        console.log(`${persona.nombre} -- ${persona.edad}`)
    }
}

imprimirPersonas(personas);