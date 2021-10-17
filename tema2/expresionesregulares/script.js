let patron = /^\(\+\d{2,3}\)\d{9}$/;
// let patron = new RegExp(/^\(\+\d{2,3}\)\d{9}$/);
let telefono = "(+34)954556817";
console.log(patron.test(telefono));


let patron2=/^\d{2}\/\d{2}\/\d{2}$/;
let fecha = "07/10/21";
console.log(patron2.test(fecha));

let patron3 = /^[a-z]+\@\[a-z]+\.\[a-z]+$/;
let email = "isa@holi.com";
console.log(patron3.test(email));

