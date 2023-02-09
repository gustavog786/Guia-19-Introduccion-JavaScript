/* Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. */

let persona = {
    nombre: "Lalo",
    edad: 30,
    sexo: "H",
    peso: 80,
    altura: 1.75
  };
  
  let propiedades = [];
  
  for (aux in persona) {  //recorro el objeto persona y se lo agrego a propiedad
    propiedades.push(aux);
  }
  
  console.log(propiedades);