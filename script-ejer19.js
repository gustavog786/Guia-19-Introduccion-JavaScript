/* Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20. */

let array50 = [];
let array20 = [];

for(let i = 0; i <50 ; i++) {
    array50 [i] = Math.floor(Math.random() * 100);
}
for(let i = 0; i <20    ; i++) {
    array20 [i] = Math.floor(Math.random() * 100);
}
console.log(array50);
console.log(array20);

array50.sort((a,b) => a-b);  //ordeno de menor a mayor
console.log(array50);

// Copio los primeros 10 elementos ordenados de A a B
array20 = array50.slice(0,10); 
/* for (let i = 0; i < 10; i++) {
    array20[i] = array50[i];
  } */
console.log(array20);
// Relleno los 10 últimos elementos de B con el valor 0.5
for (let i = 10; i < 20; i++) {
    array20[i] = 0.5;
}
console.log(array20);
console.log(array50);


