/* Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio */

let radio = prompt("Ingrese el redio de la circunferencia: ");
let area = Math.PI* radio*radio;
let perimetro = 2*Math.PI* radio;

console.log("El area de la circunferencia es: "+area);
console.log("El perimetro de la circunferencia es: "+perimetro);
