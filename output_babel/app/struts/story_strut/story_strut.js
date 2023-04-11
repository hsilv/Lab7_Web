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
exports.storyStrut = void 0;
var _story_list = require("../list_strut/story_list.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var storyStrut = function storyStrut(name, imgRef, audioRef, par, listArr, back, progress) {
  var title = document.createElement('h1');
  var pic = document.createElement('img');
  var audio = document.createElement('audio');
  var audioSrc = document.createElement('source');
  var artic = document.createElement('article');
  var ret = document.createElement('a');
  var sp = document.createElement('span');
  var prog = document.createElement('progress');
  title.innerHTML = name;
  document.body.appendChild(title);
  if (imgRef != undefined) {
    pic.src = imgRef;
    document.body.appendChild(pic);
  }
  if (audioRef != undefined) {
    audio.controls = true;
    audioSrc.src = audioRef;
    audio.appendChild(audioSrc);
    document.body.appendChild(audio);
  }
  var _iterator = _createForOfIteratorHelper(par),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      var detail = document.createElement('details');
      detail.open = true;
      var summ = document.createElement('summary');
      summ.innerHTML = element[0];
      detail.appendChild(summ);
      var p = document.createElement('p');
      p.innerHTML = element[1];
      detail.appendChild(p);
      if (element[3] != undefined || element[2] != undefined) {
        var a = document.createElement('a');
        a.innerHTML = element[2];
        a.href = element[3];
        detail.appendChild(a);
      }
      artic.appendChild(detail);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  document.body.appendChild(artic);
  if (listArr != undefined) {
    (0, _story_list.newStoryList)(listArr, undefined);
  }
  if (progress != undefined) {
    sp.innerHTML = 'Progreso de lectura: ';
    document.body.appendChild(sp);
    prog.innerHTML = progress + '%';
    prog.value = progress;
    prog.max = 100;
    document.body.appendChild(prog);
  }
  ret.innerHTML = 'Regresar';
  ret.href = back;
  document.body.appendChild(ret);
};
exports.storyStrut = storyStrut;