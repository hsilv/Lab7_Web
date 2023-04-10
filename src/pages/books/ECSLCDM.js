import { newBook } from "../../app/struts/book_strut/book_details.js";
import '../../app/css/books.css';
import '../../app/css/books.scss';
import img from '../../img/ECSLCDM.jpg'
var bookArr = [
  "El Chico Sobre la Caja de Madera",
  "Leon Leyson",
  img,
  "En El chico sobre la caja de madera de Leon Leyson, conoceremos una historia muy cruda y real de la época del nazismo. Leon Leyson fue el sobreviviente más joven de la Lista de Schindler, lista que ayudó a salvarles la vida a muchos judíos. Tenía apenas diez años cuando los nazis invadieron Polonia y, junto con su familia, se refugiaron en el gueto de Cracovia, una parte poco privilegiada y de suburbios. No abandonan este gueto hasta que los mandan al campo de concentración de Plaszow. En este campo, Leyson logra sobrevivir al sadismo de los nazis, incluido el del demoníaco Amon Goeth, comandante de Plaszow. La historia es sencillamente cruda. Nos muestra la cruel realidad que tuvieron que vivir los judíos en una época completamente Nazi. Si eras judío eras considerado una bazofia, tenías culpa de las enfermedades, y básicamente no merecías que te consideren una persona. El desprestigio que sentían era algo inhumano e injusto. Durante el transcurso del libro también conoceremos a Oskar Schindler, una de las personas que como bien dice el libro, deben ser consideradas héroes. Era nazi, si, pero él ayudo en todo lo que pudo a las personas que trabajaban en su fábrica.",
  "69",
  "./popular.bundle.html",
];

newBook(bookArr);