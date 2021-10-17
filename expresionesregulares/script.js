let patron = /^\(\+\d{2,3}\)\d{9}$/;
// let patron = new RegExp(/^\(\+\d{2,3}\)\d{9}$/);
let telefono = 954556817;
console.log(patron.test(telefono));