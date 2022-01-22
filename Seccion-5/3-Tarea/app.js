//! Crear una Funcion que me permita determinar la calificacion
//! de 3 alumnos uno con nota 100, otro con nota 80, y el ultimo nota 59;
let contadorAlumnos = 1;

function calcularNota(nota){
    let notaLetra = '';
    if(nota>=90){
        notaLetra = 'A';
    }else if (nota >= 80){
        notaLetra = 'B';
    }else if (nota >= 70){
        notaLetra = 'C';
    }else if(nota >= 60){
        notaLetra = 'D';
    }else{
        notaLetra = 'F'
    }
    console.log('Alumno ' + contadorAlumnos + ' Tiene de nota ' + nota + ' es igual a ' + notaLetra);
    contadorAlumnos++;
}

calcularNota(100);
calcularNota(80);
calcularNota(59);