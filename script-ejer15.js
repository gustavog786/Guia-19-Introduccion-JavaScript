/* Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario. */

class Circulo {
    constructor(radio) {
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio * this.radio;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }

let radio = prompt("Ingrese el radio del círculo:");
let circulo = new Circulo(radio);

console.log(`Área: ${circulo.calcularArea().toFixed(2)}`);
console.log(`Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`);


/* El método toFixed(2) es un método de JavaScript que se utiliza en números para formatear un número como una cadena de texto con un número específico de decimales. La cantidad de decimales que se deben mostrar se pasa como argumento a toFixed(x), donde x es el número de decimales que se deben mostrar.

Por ejemplo, si tienes un número 3.14159, y lo conviertes a una cadena de texto con toFixed(2), el resultado sería "3.14". De esta manera, puedes formatear un número con un número específico de decimales para su uso en tus programas. */