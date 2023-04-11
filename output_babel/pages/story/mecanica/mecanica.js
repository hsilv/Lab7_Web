"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("../../../app/css/others.css");
require("../../../app/css/others.scss");
var _typing = _interopRequireDefault(require("../../../audio/typing.mp3"));
var _story_strut = require("../../../app/struts/story_strut/story_strut.js");
var par = [['Bielas comprometidas', 'En Ciudad Plutón, hay una boda que se anuncia por todos lados, parece que algo pasó con el anillo de bodas de la novia. Los novios quieren irse por la puerta grande a su luna de miel, y tienen un Ford Mustang GT500 del 69 al que le desean restaurar el motor, en especial para superar los límites de velocidad, por lo que le piden a El hombre reparar el bólido.', 'Bodas Truncas', './bodas_truncas.bundle.html'], ['Dinero y Jabón', 'Una mafia en Ciudad Plutón, entrega paquetes especiales a clientes occidentales americanos. Canelo, el avión de carga que utilizan está averiado, sus dueños dicen que no tiene nada, que solo está enojado por no trabajar por bastante tiempo. Le piden a El hombre que verifique el avión y que lo modifique para una carga "especial y pesada", con un fuselaje a prueba de balas y fuego.', 'Entregas a tiempo', './eat.bundle.html']];
(0, _story_strut.storyStrut)('Abogacia', undefined, _typing["default"], par, undefined, './story.bundle.html', 33);