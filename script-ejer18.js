/* A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos */


var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3] > valores[4]) {   //esta mal
    console.log(valores[3] + " es mayor que " + valores[4]);
} else {
    console.log(valores[4] + " es mayor que " + valores[3]);
}


console.log(valores[0] || valores[2]);
console.log(valores[0] && valores[2]);

/* El código anterior utiliza los operadores lógicos && (AND) y || (OR) para combinar los valores booleanos en el array valores.
El operador && devuelve true si ambos operandos son true y false en caso contrario. Por lo tanto, valores[0] && valores[2] devuelve false porque uno de los operandos es true (valores[0]) y el otro es false (valores[2]).
El operador || devuelve true si al menos uno de los operandos es true y false solo si ambos operandos son false. Por lo tanto, valores[0] || valores[2] devuelve true porque uno de los operandos es true (valores[0]). */


console.log("La suma de los elementos del array es "+(valores[1]+ valores[5]));
console.log("La resta de los elementos del array es "+(valores[1]- valores[5]));
console.log("La multiplicacion de los elementos del array es "+(valores[1]* valores[5]));
console.log("La division de los elementos del array es "+(valores[1]/ valores[5]));
console.log("El modulo de los elementos del array es "+(valores[1]%valores[5]));