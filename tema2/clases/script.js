class Punto {
// Constructor de la clase
    constructor ( pX , pY ){
        this.pX = pX;
        this.pY = pY;
    }
// Método estático para calcular distancia entre dos puntos
    static distancia ( a , b) {
        const dx = a.pX - b.pX;
        const dy = a.pY - b.pY;
        return Math.sqrt ( dx * dx + dy * dy );
    }   
// Método indicado para ser usado como getter
    get coordX() {
        return this.pX;
    }
// Método normal
    devuelveXporY () {
        return this.pX * this.pY;
    }
}

let p1 = new Punto(5, 5);
let p2 = new Punto(10, 10);
//Llamada método estático
console.log (Punto.distancia(p1, p2));
//Llamada método normal
console.log (p1.devuelveXporY());
// Al ser un getter, puede usarse como una propiedad
console.log (p1.coordX);