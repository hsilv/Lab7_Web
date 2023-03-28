import { newList } from "../../../src/app/struts/list_strut/list_strut.js";
let listArr = [['', 'Ardilla no sabe decir que no', 'Susanna Isern'],
                ['', 'El cociente agallas', 'Mario Alonso Puig'],
                ['', 'Las recetas de Blanca', 'Blanca García-Orea Haro'],
                ['', 'Serbia and The Balkan Front', 'James Lyon'],
                ['', 'Tratado de culinaria para mujeres tristes', 'Hector Abad Faciolince'],
                ['../../../src/pages/story/story.html', 'Historia', 'Sebastián Silva (YO)']
            ]
newList('Nuevos Lanzamientos en Libros', listArr, '../../../src/app/index.html');