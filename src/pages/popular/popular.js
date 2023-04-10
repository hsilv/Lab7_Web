import { newList } from "../../app/struts/list_strut/list_strut.js";
import '../../app/css/others.css';
import '../../app/css/others.scss';
let listArr = [['./EATPV.bundle.html', 'Encuentra a tu persona vitamina', 'Marian Rojas Estapé'],
                ['./CDAALM.bundle.html', 'Cartas de Amor a los muertos', 'Ava Dellaira'],
                ['./EHQC.bundle.html', 'El hombre que calculaba', 'Malba Tahan'],
                ['./LBDA.bundle.html', 'La bailarina de Auschwitz', 'Edith Eger'],
                ['./ECSLCDM.bundle.html', 'El chico sobre la caja de madera', 'Leon Leyson']
            ]
newList('Libros Populares', listArr, './index.bundle.html');