"use strict";

require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newList = void 0;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url-search-params.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var newList = function newList(title, listArr, back) {
  var header = document.createElement('header');
  var h1 = document.createElement('h1');
  var ul = document.createElement('ul');
  var footer = document.createElement('footer');
  var footer_h1 = document.createElement('h1');
  var footer_ul = document.createElement('ul');
  var footer_li = document.createElement('li');
  var footer_a = document.createElement('a');
  h1.innerHTML = title;
  header.appendChild(h1);
  document.body.appendChild(header);
  var _iterator = _createForOfIteratorHelper(listArr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      var li = document.createElement('li');
      var a = document.createElement('a');
      var b = document.createElement('b');
      var i = document.createElement('i');
      a.href = new URL(element[0], window.location.href).href;
      b.innerHTML = element[1] + ' - ';
      a.appendChild(b);
      i.innerHTML = element[2];
      a.appendChild(i);
      li.appendChild(a);
      ul.appendChild(li);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  document.body.appendChild(ul);
  footer_h1.innerHTML = 'Menú';
  footer_a.innerHTML = 'Regresar';
  footer_a.href = new URL(back, window.location.href).href;
  footer_li.appendChild(footer_a);
  footer_ul.appendChild(footer_li);
  footer.appendChild(footer_h1);
  footer.appendChild(footer_ul);
  document.body.appendChild(footer);
};
exports.newList = newList;