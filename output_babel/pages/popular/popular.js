"use strict";

var _list_strut = require("../../app/struts/list_strut/list_strut.js");
require("../../app/css/others.css");
require("../../app/css/others.scss");
var listArr = [['./EATPV.bundle.html', 'Encuentra a tu persona vitamina', 'Marian Rojas Estapé'], ['./CDAALM.bundle.html', 'Cartas de Amor a los muertos', 'Ava Dellaira'], ['./EHQC.bundle.html', 'El hombre que calculaba', 'Malba Tahan'], ['./LBDA.bundle.html', 'La bailarina de Auschwitz', 'Edith Eger'], ['./ECSLCDM.bundle.html', 'El chico sobre la caja de madera', 'Leon Leyson']];
(0, _list_strut.newList)('Libros Populares', listArr, './index.bundle.html');