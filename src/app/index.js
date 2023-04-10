import { newStore } from "./struts/main_strut/store_details.js";
import './css/store.css';
import './css/store.scss';
let menu = {
    name: "Menú",
    list1Name: 'Libros populares',
    list1HRef: './popular.bundle.html',
    list2Name: 'Nuevos Lanzamientos',
    list2HRef: './news.bundle.html',
    summary: 'Comentario',
    comment: 'Generalmente la UX, viene acompañada de la UI. Muchas veces ambos términos están sujetos a malentendidos. La UI, es la interfaz que se le muestra al cliente o al usuario, esta es diseñada en base a la UX. Que es la User Experience, aprender UX es primordial a la hora de diseñar una aplicación, principalmente porque queremos interactuar con humanos, queremos generar un modelo de negocio relacionado con los humanos. Debemos de saber que los humanos son seres guiados por sus emociones, esto explica porqué escogemos entre dos cosas que en esencia son iguales, pero la apariencia es muy distinta, la forma de usar es distinta, las emociones al usarse son distintas, y distintamente, eso nos hace escoger una opción u otra. La experiencia de usuario es una conexión entre el diseñador y el usuario, el usuario necesita ser completamente sincero con sus expectativas y su propia experiencia. Y el diseñador necesita empatizar con el usuario.',
}

newStore('Biblioteca Olivos', 'https://educacion30.b-cdn.net/wp-content/uploads/2021/10/young-woman-studying-at-the-library-min-978x652.jpg', menu,  document.body);