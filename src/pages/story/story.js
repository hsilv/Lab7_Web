import "../../app/css/others.css";
import "../../app/css/others.scss";
import img from '../../img/Boogey.JPG';
import {
    storyStrut
} from "../../app/struts/story_strut/story_strut.js";
let par = [
    ['Sinopsis', 'En 1855, había un joven secretario de una mafia secreta en Inglaterra, era un hombre honrado y sencillo, que solo buscaba ganar lo necesario para poder mantener a su familia. Sin embargo, debido a todas las influencias involucradas, y a su reconocido trabajo, debido a que no era útil solo como secretario, sino como sicario, comediante, abogado, mecánico, etc. Sin dudas era un hombre de muchas virtudes, de pronto comenzaron a buscarlo, no por su talento, si no por el daño que sus trabajos habían hecho a otras mafias, por lo que tuvo que ocultarse detrás de una bolsa de papel.', undefined, undefined]
]
let listArr = [
    ['./abogacia.bundle.html', 'Abogacía'],
    ['./sicariato.bundle.html', 'Sicariato'],
    ['./mecanica.bundle.html', 'Mecánica'],
]
storyStrut('El misterioso Hombre de la Bolsa', img, undefined, par, listArr, './news.bundle.html', undefined);