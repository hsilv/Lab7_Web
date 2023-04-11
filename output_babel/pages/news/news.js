"use strict";

var _list_strut = require("../../app/struts/list_strut/list_strut.js");
require("../../app/css/others.css");
require("../../app/css/others.scss");
var listArr = [['', 'Ardilla no sabe decir que no', 'Susanna Isern'], ['', 'El cociente agallas', 'Mario Alonso Puig'], ['', 'Las recetas de Blanca', 'Blanca García-Orea Haro'], ['', 'Serbia and The Balkan Front', 'James Lyon'], ['', 'Tratado de culinaria para mujeres tristes', 'Hector Abad Faciolince'], ['./story.bundle.html', 'Historia', 'Sebastián Silva (YO)']];
(0, _list_strut.newList)('Nuevos Lanzamientos en Libros', listArr, './index.bundle.html');