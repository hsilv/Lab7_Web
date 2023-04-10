import { newBook } from "../../app/struts/book_strut/book_details.js";
import '../../app/css/books.css';
import '../../app/css/books.scss';
import img from '../../img/EATPV.jpg'
var bookArr = [
  "Encuentra a tu persona vitamina",
  "Marian Rojas Estapé",
  img,
  "¿Por qué hay personas que nos hacen sufrir tanto y otras que nos generan confianza y cuya sola presencia nos reconforta? ¿Por qué hay gente que tiene tendencia a establecer relaciones complicadas y dolorosas? ¿Amamos como nos amaron? ¿Hay «algo» bioquímico detrás de la confianza, el apego y el amor? ¿Cómo podemos acertar a la hora de elegir pareja? Estamos diseñados para vivir en familia y en sociedad, relacionarnos y querernos. Nuestra felicidad va a depender en gran medida de la capacidad que tengamos para mantener buenas relaciones con aquellos que nos rodean. Muchos, hoy en día, arrastramos heridas emocionales que nos impiden conectar de forma sana con el entorno. Encuentra tu persona vitamina te ayudará a comprender el vínculo con tus padres, tus hijos, tu pareja, tus amigos y tus compañeros de trabajo a la vez que entiendes tu historia emocional. Porque cuando uno se comprende, se siente aliviado. La doctora Marian Rojas Estapé te acerca al apego, a la infancia y al amor desde un punto de vista científico, psicológico y humano, y te habla de una hormona fundamental, la oxitocina. Un libro que te impulsa a encontrar personas vitamina, aquellas que sacan lo mejor de ti, te inspiran, te apoyan y con ello mejoran tu sistema inmune.",
  "32",
  "./popular.bundle.html",
];

newBook(bookArr);