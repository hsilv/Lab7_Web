import { newBook } from "../../app/struts/book_strut/book_details.js";
import '../../app/css/books.css';
import '../../app/css/books.scss';
import img from '../../img/CDAALM.jpg';
var bookArr = [
  "Cartas de Amor a Los Muertos",
  "Ava Dellaira",
  img,
  "Todo comienza con un trabajo de Lengua: escribirle una carta a alguien que haya muerto. Laurel escoge a Kurt Cobain porque su hermana lo adoraba. Y porque él murió joven, como ella. En poco tiempo tiene un cuaderno lleno de cartas a Judy Garland, Amy Winehouse, Heath Ledger y muchos otros. Sin embargo, no se las entrega a su profesora. Les escribe sobre el comienzo del instituto, sus nuevas amistades, su primer amor y sobre cómo está aprendiendo a vivir ahora que su familia se ha roto. Y sobre lo que ocurrió cuando su hermana aún estaba viva.",
  "14",
  "./popular.bundle.html",
];

newBook(bookArr);