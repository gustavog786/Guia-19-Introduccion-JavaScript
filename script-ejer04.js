/* Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

let letra = prompt("Ingrese una letra: ").toUpperCase();
alert( letra =="S" | letra == "N" ? "Correcto" : "Incorrecto");