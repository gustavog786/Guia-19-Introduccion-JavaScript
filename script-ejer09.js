/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/
let frase = prompt("Ingrese un frase ");
let fraseEspaciada = "";
for(let i=0; i< frase.length; i++){

    fraseEspaciada+= frase.charAt(i) + " ";
}
console.log(fraseEspaciada);
