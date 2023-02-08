/* Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial. */
let limite = 0;
do{
    limite = parseInt(prompt("Ingrese el numero limite "));
}while(limite<0);

let suma = 0;
do{
    let num1 = parseInt(prompt("Ingrese un numero "));
    suma = suma + num1;
}while(suma<=limite);
console.log("Superaste el limite");
