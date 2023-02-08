/* Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript” */

function palabraMasLarga(frase){
    let palabras= frase.split(" ");
    let longestWord = "";
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > longestWord.length) {
      longestWord = palabras[i];
    }
  }
  return longestWord;
}

console.log(palabraMasLarga("Guia de JavaScript")); // "JavaScript"