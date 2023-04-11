"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _book_details = require("../../app/struts/book_strut/book_details.js");
require("../../app/css/books.css");
require("../../app/css/books.scss");
var _CDAALM = _interopRequireDefault(require("../../img/CDAALM.jpg"));
var bookArr = ["Cartas de Amor a Los Muertos", "Ava Dellaira", _CDAALM["default"], "Todo comienza con un trabajo de Lengua: escribirle una carta a alguien que haya muerto. Laurel escoge a Kurt Cobain porque su hermana lo adoraba. Y porque él murió joven, como ella. En poco tiempo tiene un cuaderno lleno de cartas a Judy Garland, Amy Winehouse, Heath Ledger y muchos otros. Sin embargo, no se las entrega a su profesora. Les escribe sobre el comienzo del instituto, sus nuevas amistades, su primer amor y sobre cómo está aprendiendo a vivir ahora que su familia se ha roto. Y sobre lo que ocurrió cuando su hermana aún estaba viva.", "14", "./popular.bundle.html"];
(0, _book_details.newBook)(bookArr);