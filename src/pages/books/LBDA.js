import { newBook } from "../../app/struts/book_strut/book_details.js";
import '../../app/css/books.css';
import '../../app/css/books.scss';
var bookArr = [
  "La Bailarina de Auschwitz",
  "Edith Eger",
  "../../img/LBDA.jpg",
  "Eger tenía dieciséis años cuando los nazis invadieron su pueblo de Hungría y se la llevaron con el resto de su familia a Auschwitz. Al pisar el campo, sus padres fueron enviados a la cámara de gas y ella permaneció junto a su hermana, pendiente de una muerte segura. Pero bailar El Danubio azul para Mengele salvó su vida, y a partir de entonces empezó una nueva lucha por la supervivencia. Primero en los campos de exterminio, luego en la Checoslovaquia tomada por los comunistas y, finalmente, en Estados Unidos, donde acabaría convirtiéndose en discípula de Viktor Frankl. Fue en ese momento, tras décadas ocultando su pasado, cuando se dio cuenta de la necesidad de curar sus heridas, de hablar del horror que había vivido y de perdonar como camino a la sanación. Su mensaje es claro: tenemos la capacidad de escapar de las prisiones que construimos en nuestras mentes y podemos elegir ser libres, sean cuales sean las circunstancias de nuestra vida. «Este libro es un regalo para la humanidad. Una de esas historias únicas y eternas que nunca quieres terminar de leer y que te cambian la vida para siempre.» Desmond Tutu, premio Nobel de la Paz",
  "43",
  "../popular/popular.html",
];

newBook(bookArr);