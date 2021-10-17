
//Ejercicio 01
function ejercicio1() {

//Mostrar desde consola

console.log ("Hola mundo desde la consola");

// Mostrar con ventana emergente

alert("Hola mundo desde una ventana emergente");

}


//Ejercicio 2.1

function numero(){

    let numero = prompt("Introduce un número");

    if (numero > 10)
        alert("El número intoducido es mayor que 10");
    else 
        alert ("El numero introducido es menor o igual a 10");
}

//Ejercicio 2.2

function fecha (){

    let fecha = prompt ("Introduce una fecha (formato DD/MM");

        if (fecha === "25/12")
            alert("Feliz Navidad!");
        else
            alert ("NO es Navidad :(");

}

//Ejercicio 2.3

function calcularSalario(){

    let salario = prompt ("Introduce tu salario en euros");
    let antiguedad = prompt ("Introduce tu antigüedad en años");
    let nuevoSalario;

    if ((salario < 500) && (antiguedad > 10)){
        nuevoSalario = salario*3;    
    } else if ((salario < 500) && (antiguedad < 10)){
        nuevoSalario = salario*2;
    } else if (salario > 500){
        nuevoSalario = salario;
    }

    alert("Tu nuevo salario es: " + nuevoSalario);

}

//Ejercicio 2.4

function calcularNota(){

    let nota = prompt ("Introduce tu nota del 1 al 10");

    //En caso de que las notas fueran sin decimales
    switch(nota){
        case "1":
        case "2":
            console.log("Muy deficiente");
            break;
        case "3":
        case "4":
            console.log("Insuficiente");
            break;
        case "5":
            console.log("Bien");
            break;
        case "6":
        case "7":
        case "8":
            console.log("Notable");
            break;
        case "9":
            console.log("Sobresaliente");
            break;
        case "10":
            console.log("Matricula de Honor");
            break;
        default:
            console.log("Introduce una nota del 1 al 10");
        
    }

    //En caso de que las notas tuvieran decimales
    /*
    if (nota < 1.0 ){
        console.log("Notano válida. Introduce una nota entre 1 y 10");
    } else if (nota >= 1.0 && nota <3.0){
        console.log("Muy deficiente");
    } else if ( nota >=3.0 && nota <5.0){
        console.log("Insuficiente");
    } else if (nota >=5.0 && nota <6.0) {
        console.log("Suficiente");
    } else if (nota >=6.0 && nota <9.0) {
        console.log("Notable");
    } else if (nota >=9.0 && nota <10.0) {
        console.log("Sobresaliente");
    }
    */

}


//Ejercicio 3.1

function secuencia(){
    let numero = prompt("Introduce un número límite");
    let starter= 2;

        while (starter < numero){
            console.log(starter);
            starter= starter+2;
        }
}


//Ejercicio 3.2

function secuenciaImpar(){
    let numero = prompt("Introduce un número límite");
    let starter= 1;

        while (starter < numero){
            console.log(starter);
            starter= starter+2;
        }
}

//Ejercicio 3.3

function multiplicar() {
    let numero = prompt("Introduce un número del 1 al 9");
    let tabla=1;
    let resultado;

    do {
        resultado = numero * tabla;
        console.log (numero + "*" + tabla+ "= " +resultado)
        tabla= tabla+1;

    } while (tabla <11)
}

//Ejercicio 3.4

function tabla(){
    let fila = prompt ("Introduce el número de filas");
    let columna = prompt ("Introduce el número de columnas");

    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i =0; i<=columna; i++){
        var hilera = document.createElement ("tr");

        for (var j=0; j<= fila; j++){
            var celda= document.createElement("td");
            var textoCelda= document.createTextNode("Fila " +(i+1)+ " Columna " +(j+1));
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}


//Ejercicio 3.5

function esPrimo(){

    let numero = prompt("Introduce un número");

    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) 
          console.log("No es primo"); 
      }
      console.log("Es primo");    
}

//Ejercicio 4.1

function suma(numero1, numero2){

    var numero1 = parseInt(prompt("Introduce el primer número"));
    var numero2 = parseInt(prompt("Introduce el segundo número"));

    let resultado= numero1 + numero2;
    console.log(resultado);
}

//Ejercicio 4.2---- REVISAR

function bisiesto(){
    let numero= parseInt (prompt("Introduce un año"));
    return ((numero % 4 == 0 && numero % 100 != 0) || numero % 400 == 0) ? true : false;
}

//Ejercicio 4.3

function perimetro (){
    let numero1 = parseInt (prompt("Introduce el lado a"));
    let numero2 = parseInt (prompt("Introduce el lado b"));
    let resultado = (numero1*2) + (numero2*2);
    console.log("El perímetro del rectángulo es "+ resultado);
}

//Ejercicio 4.4 ---REVISAR

function factorial (){
    numeroFactorial =prompt("Introduce un número:");
    function calculo(numeroFactorial){
        if(numeroFactorial===0){
            return "1";
        } else {
            return numeroFactorial * factorial(numeroFactorial - 1);
        }
    }
    console.log(calculo(numeroFactorial));

}


