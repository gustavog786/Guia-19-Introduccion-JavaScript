/* Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado */

let array = [1, 2, 3, 4, 5];

array.splice(-2, 2);

console.log("Array después de eliminar los últimos dos elementos: " + array);

/* En este ejemplo, se usa el método splice para eliminar los dos últimos elementos del array. El primer argumento de splice es la posición desde donde se deben eliminar los elementos (en este caso, se usa -2 para indicar dos posiciones antes del final del array), y el segundo argumento es la cantidad de elementos a eliminar (en este caso, 2). Después de llamar a splice, el array ya no tendrá los dos últimos elementos. Finalmente, se muestra el resultado en la consola. */
