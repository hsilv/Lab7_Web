import { newList } from "../../../src/app/struts/list_strut/list_strut.js";
let listArr = [['libro-detalles-EATPV.html', 'Encuentra a tu persona vitamina', 'Marian Rojas Estapé'],
                ['libro-detalles-CDAALM.html', 'Cartas de Amor a los muertos', 'Ava Dellaira'],
                ['libro-detalles-EHQC.html', 'El hombre que calculaba', 'Malba Tahan'],
                ['libro-detalles-LBDA.html', 'La bailarina de Auschwitz', 'Edith Eger'],
                ['libro-detalles-ECSLCDM.html', 'El chico sobre la caja de madera', 'Leon Leyson']
            ]
newList('Libros Populares', listArr, '../../../src/app/index.html');