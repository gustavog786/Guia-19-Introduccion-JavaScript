/* Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */


let num1 = parseInt(prompt("Ingrese el primer numero "));
let num2 = parseInt(prompt("Ingrese el segundo numero "));
let opcion = prompt(`Ingrese la operacion a realizar:  
S  para la suma, 
R para la resta, 
M para la multiplicación
y D para la división.`).toUpperCase()

switch (opcion) {
    case "S":
        alert("La suma de los numeros es " + (num1 + num2));
        break;
    case "R":
        alert("La resta de los numeros es " + (num1 - num2));
        break;
    case "M":
        alert("La multiplicacion de los numeros es " +(num1 * num2));
        break;
    case "D":
        alert("La division de los numeros es " + (num1 / num2));
        break;
    default:
        
        break;
}