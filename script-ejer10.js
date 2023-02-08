/* Escribir una función flecha que reciba una palabra y la devuelva al revés. */

/* let frase = prompt("Ingrese una frase ").split("").reverse().join("");
console.log(frase); */


let reversa = frase => frase.split("").reverse().join("");
console.log(reversa("Hola"));