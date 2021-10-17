function ejercicio15() {
    //Creación de la clase teléfono
    class Telefono {
        //constructor de clase por el que se le pasarán dos parámetros: marca y modelo
        constructor (marca, modelo){
            this.marca = marca;
            this.modelo = modelo;
        } 
    }
    //Creación de la clase persona
    class Persona {
        //constructor de clase por el que se le pasarán dos parámetros: nombre y apellido
        constructor (nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
        //método get que devolverá el nombre y apellido pasados como parámetros en la clase persona.
        get nombreCompleto(){
            return this.nombre + " " + this.apellido;
        }
    }
    //Creación de una instancia de cada clase
    let t1 = new Telefono ("xiaomi", 10);
    let p1= new Persona ("isa", "gdt");

    //Se muestra por consola el objeto t1 
    console.log(t1.marca + " " + t1.modelo);
    //Muestra por consola el resultado del método get con el objeto p1
    console.log(p1.nombreCompleto);
}

//Actividad 02

function ejercicio16(){

    //Creación de la clase teléfono
    class Telefono {
        //constructor de clase por el que se le pasarán dos parámetros: marca y modelo
        constructor (marca, modelo){
            this.marca = marca;
            this.modelo = modelo;
        }
        
        get marca(){
            return this.marca;
        }

        set marca(nuevaMarca){
            this.marca=nuevaMarca;
        }

        get modelo(){
            return this.modelo;
        }

        set modelo (nuevoModelo){
            this.modelo = nuevoModelo;
        }
    }
    let t2 = new Telefono("alcatel", "note");
    console.log(t2.marca)
    console.log(t2.marca)
}