/* Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla. */

let vector1 = [];
let vector2 = [];
for (let i = 0; i < 5; i++) {
    vector1[i] = Math.floor(Math.random() * 10);  //vector con numeros entre 1 y 10
    vector2[i] = Math.floor(Math.random() * 10);
}
console.log("vector1 "+ vector1);
console.log("vector2 "+ vector2);
