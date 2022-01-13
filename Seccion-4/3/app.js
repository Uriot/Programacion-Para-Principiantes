/*
Cree un algoritmo que permita determinar la calificacion de un alumno 

si la nota se encuentra entre 100 a 90  = A;
si la nota se encuenta entre 80 a 89 = b
70 a 79 C
60 a 69 D
inferior a 60 F
*/

let nota = prompt("Nota");
let notaLetra = '';

// if(nota >=90 && nota <=100){
//     notaLetra = 'A';
// }else if(nota >=80 && nota <90){
//     notaLetra = 'B';
// }else if(nota >=70 && nota <80){
//     notaLetra = 'C';
// }else if(nota >=60 && nota <70){
//     notaLetra = 'D';
// }else if (nota <60){
//     notaLetra = 'F';
// }



if(nota >=90){
    notaLetra = 'A';
}else if(nota >=80){
    notaLetra = 'B';
}else if(nota >=70){
    notaLetra = 'C';
}else if(nota >=60){
    notaLetra = 'D';
}else{
    notaLetra = 'F';
}

console.log(nota + ' es igual a ' + notaLetra);