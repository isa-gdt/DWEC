//cuenta atrás

/*let numero = prompt("Introduce un numero: ");
var cadena;
let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        cadena ="0";
        return cadena;
    }
   // console.log(numero);
   cadena = cuentaAtras(numero -1) + "," + numero;
   // return cuentaAtras(numero - 1);
   return cadena;
};
//console.log(cuentaAtras(numero));
console.log (cadena);
*/
numero = prompt("Numero:");
function cuentaAtras(numero){
    if (numero===0){
        return "0";
    } else {
        return (numero +"," + cuentaAtras(numero -1));
    }
}
console.log(cuentaAtras(numero));


numero2 =prompt("factorial");
function factorial(numero2){
    if(numero2===0){
        return "1";
    } else {
        return numero2 * factorial(numero2 - 1);
    }
}
console.log(factorial(numero2));


numero3=prompt("division");
function division (numero3){
    if(numero3===0){
        return "0";
    } else {
        return numero3-division(numero3-1);
    }
}
console.log(division(numero3));



/*
//function cuentaAtras(){
  
    console.log("Cuenta atrás/Countdown");
    function recursivaCuentaAtras(numero) {
        if (numero==0)
            return 0;
        else
           // console.log (numero);
            recursivaCuentaAtras(numero-1);
            console.log (numero); //al cambiarlo de orden hace el LIFO
    }

    recursivaCuentaAtras(prompt("Introduce un número"));

//}


//División

console.log("División");
division(prompt("Introduce un número1"));
division(prompt("Introduce un número2"));
function division(numero1, numero2) {
    if (numero1==0) {
        return 0;
    } else {
       // console.log (numero);
        let resultado= numero1/numero2;
        console.log (resultado); //al cambiarlo de orden hace el LIFO
    }
}
*/

//Factorial

/*
    console.log("Factorial de un número");
    var cadena;
    let numero = prompt("Introduce un numero: ");
    function factorial (numero){

        if (numero===0){
            cadena ="0";
            return cadena;
        } else{
            cadena = factorial(numero*numero-1) + ","+ numero;
            return cadena;
            console.log(cadena);
        }
    }
*/

