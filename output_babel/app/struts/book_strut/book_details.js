"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newBook = void 0;
var newBook = function newBook(bookArr) {
  //Importación de recursos

  /* GUIA PARA PLANTILLA DE LIBRO
      [titulo de libro, 
          autor, 
          ruta de imagen, 
          sinopsis, 
          valor de progreso, 
          ruta de regreso]
  */

  //Creación de Elementos del DOM
  var header = document.createElement('header');
  var name = document.createElement('h1');
  var metadata = document.createElement('div');
  var figure = document.createElement('figure');
  var portrait = document.createElement('img');
  var imgCap = document.createElement('figcaption');
  var description = document.createElement('div');
  var descTag = document.createElement('h3');
  var synopsis = document.createElement('p');
  var progressLabel = document.createElement('span');
  var progressBar = document.createElement('progress');
  var footer = document.createElement('footer');
  var back = document.createElement('a');

  //Asignación de clases
  metadata.className = 'bkMetadata';
  description.className = "bkDescContainer";
  figure.className = "bkImgContainer";
  descTag.className = "bkDescTag";
  header.className = "bkHeader";
  progressLabel.className = "bkProgLabel";
  footer.className = "bkFooter";

  //Asignación de ID's
  portrait.id = "bkImg";
  imgCap.id = "bkImgCaption";
  name.id = "bkTitle";
  synopsis.id = "bkSynopsis";
  progressBar.id = "bkProgBar";
  back.id = "bkBack";

  //Asignación de atributos
  document.title = bookArr[0]; //bookArr[0] es el título del libro en el arreglo
  name.innerHTML = bookArr[0];
  portrait.src = bookArr[2]; //bookArr[2] contiene la ruta de la imagen de la portada del libro
  portrait.alt = "Portada de Libro";
  imgCap.innerHTML = bookArr[0] + " - " + bookArr[1]; //bookArr[1] contiene el autor del libro 

  descTag.innerHTML = "Descripción";
  synopsis.innerHTML = bookArr[3]; //bookArr[3] contiene la sinopsis del libro.

  progressLabel.innerHTML = "Progreso de Lectura: ";
  progressBar.value = bookArr[4]; //bookArr[4] contiene el valor del progreso de lectura
  progressBar.max = "100";
  progressBar.innerHTML = bookArr[4] + "%";
  back.href = bookArr[5]; //bookArr[5] contiene la ruta de la página de la que provino el usuario.
  back.innerHTML = "Regresar";

  //Agregación en el DOM
  header.appendChild(name);
  document.body.appendChild(header);
  figure.appendChild(portrait);
  figure.appendChild(imgCap);
  metadata.appendChild(figure);
  document.body.appendChild(metadata);
  description.appendChild(descTag);
  description.appendChild(synopsis);
  description.appendChild(progressLabel);
  description.appendChild(progressBar);
  document.body.appendChild(description);
  footer.appendChild(back);
  document.body.appendChild(footer);
};
exports.newBook = newBook;