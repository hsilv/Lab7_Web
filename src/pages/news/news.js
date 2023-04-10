import { newList } from "../../app/struts/list_strut/list_strut.js";
import '../../app/css/others.css';
import '../../app/css/others.scss';
let listArr = [['', 'Ardilla no sabe decir que no', 'Susanna Isern'],
                ['', 'El cociente agallas', 'Mario Alonso Puig'],
                ['', 'Las recetas de Blanca', 'Blanca García-Orea Haro'],
                ['', 'Serbia and The Balkan Front', 'James Lyon'],
                ['', 'Tratado de culinaria para mujeres tristes', 'Hector Abad Faciolince'],
                ['./story.bundle.html', 'Historia', 'Sebastián Silva (YO)']
            ]
newList('Nuevos Lanzamientos en Libros', listArr, './index.bundle.html');