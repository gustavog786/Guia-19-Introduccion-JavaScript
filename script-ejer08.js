/*
Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/
let num = 0;
let suma = 0;
let contador = 1;
let max =0;
let min = Number.POSITIVE_INFINITY;
let promedio = 0;

num = parseInt(prompt("Ingrese un numero "));   
while(num !==0){
    min = Math.min(min, num);
    max = Math.max(max,num);
    suma = suma + num;
    promedio = suma/contador;
    contador++;
    num = parseInt(prompt("Ingrese un numero "));
}
console.log("El numero minimo es "+min);
console.log("El numero maximo es "+max);
console.log("El promedio es "+promedio);
