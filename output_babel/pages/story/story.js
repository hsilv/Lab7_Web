"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("../../app/css/others.css");
require("../../app/css/others.scss");
var _Boogey = _interopRequireDefault(require("../../img/Boogey.JPG"));
var _story_strut = require("../../app/struts/story_strut/story_strut.js");
var par = [['Sinopsis', 'En 1855, había un joven secretario de una mafia secreta en Inglaterra, era un hombre honrado y sencillo, que solo buscaba ganar lo necesario para poder mantener a su familia. Sin embargo, debido a todas las influencias involucradas, y a su reconocido trabajo, debido a que no era útil solo como secretario, sino como sicario, comediante, abogado, mecánico, etc. Sin dudas era un hombre de muchas virtudes, de pronto comenzaron a buscarlo, no por su talento, si no por el daño que sus trabajos habían hecho a otras mafias, por lo que tuvo que ocultarse detrás de una bolsa de papel.', undefined, undefined]];
var listArr = [['./abogacia.bundle.html', 'Abogacía'], ['./sicariato.bundle.html', 'Sicariato'], ['./mecanica.bundle.html', 'Mecánica']];
(0, _story_strut.storyStrut)('El misterioso Hombre de la Bolsa', _Boogey["default"], undefined, par, listArr, './news.bundle.html', undefined);