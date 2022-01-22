
// let carro1={
//     marca: 'Toyota',
//     tipo: 'Sedan'
// }

class Carro{

    //! SE DISPARA POR CADA INSTANCIA
    //! CREA COSAS AUTOMATICAS
    constructor(marca, tipo, puertas){
        //! constructor = argumento
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }
    //* MEtodos
    encenderCarro(){
        if(this.encendido){
            console.log('El Carro esta ya esta encendido');
        }else{
            this.encendido = true;
            console.log('El carro esta encendido');
        }
        //!imprime la instancia del carro
        return this;

    }

    realizarViaje(consumo){


        if(!this.encendido) return console.log ('Carro Apagado');

        if (consumo >this.gasolina) return console.log(`La gasolina no alcanza para el viaje: Gasolina = ${this.gasolina}`);

        //* El retur termina la funcion
        this.gasolina -= consumo;
        return `Le queda ${this.gasolina}`;

        // if(this.encendido){
        //     if(this.gasolina<consumo){
        //         console.log( `La Gasonila no alcanza para el viaje  Gasolina = ${this.gasolina}`);
        //     }else{
        //         this.gasolina -= consumo;
        //         return `Le queda ${this.gasolina}`;
        //     }
        // }else{
        //     console.log(`Debe encender el auto Primero`);
        //     return this;
        // }
        
    }


}

let carro = new Carro('Mazda', 'Sedan', 2);

console.log(carro);