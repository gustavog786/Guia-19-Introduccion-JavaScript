/* Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas. */

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    cargarLibro() {
      this.ISBN = prompt("Ingrese el ISBN del libro:");
      this.titulo = prompt("Ingrese el título del libro:");
      this.autor = prompt("Ingrese el autor del libro:");
      this.numPaginas = prompt("Ingrese el número de páginas:");
    }
  
    mostrarLibro() {
      console.log(`ISBN: ${this.ISBN}`);
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Número de páginas: ${this.numPaginas}`);
    }
  }

let libro = new Libro();
libro.cargarLibro();
libro.mostrarLibro();