import { newList } from "../../app/struts/list_strut/list_strut.js";
import '../../app/css/others.css';
import '../../app/css/others.scss';
let listArr = [['../books/EATPV.html', 'Encuentra a tu persona vitamina', 'Marian Rojas Estapé'],
                ['../books/CDAALM.html', 'Cartas de Amor a los muertos', 'Ava Dellaira'],
                ['../books/EHQC.html', 'El hombre que calculaba', 'Malba Tahan'],
                ['../books/LBDA.html', 'La bailarina de Auschwitz', 'Edith Eger'],
                ['../books/ECSLCDM.html', 'El chico sobre la caja de madera', 'Leon Leyson']
            ]
newList('Libros Populares', listArr, '../../app/index.html');