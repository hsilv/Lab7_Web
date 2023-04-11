"use strict";

require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newStoryList = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var newStoryList = function newStoryList(listArr, back) {
  var ul = document.createElement('ul');
  var hRefBack = document.createElement('a');
  var _iterator = _createForOfIteratorHelper(listArr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      var li = document.createElement('li');
      var a = document.createElement('a');
      var b = document.createElement('b');
      a.href = element[0];
      b.innerHTML = element[1];
      a.appendChild(b);
      li.appendChild(a);
      ul.appendChild(li);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  document.body.appendChild(ul);
  if (back != undefined) {
    hRefBack.href = back;
    hRefBack.innerHTML = 'Regresar';
    document.body.appendChild(hRefBack);
  }
};
exports.newStoryList = newStoryList;