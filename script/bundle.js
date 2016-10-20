(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  form.addEventListener('submit', submitForm);
  btnAddQuestion.addEventListener('click', insertQuestion);
};

var preguntas = void 0;
var quizJSON = {
  "assessmentItems": {
    "assessmentItem": []
  }
};

//UI elements
var btnAddQuestion = document.getElementById('newQuestion');
var form = document.getElementById('formQuiz');

var validarPregunta = function validarPregunta(pregunta) {
  var inputs = pregunta.getElementsByTagName('input');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;

      if (input.value === '') return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};

var validarForm = function validarForm() {
  preguntas = document.getElementsByClassName('quiz-question');
  var question = void 0;
  var title = "titulo";

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = preguntas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var pregunta = _step2.value;

      question = {};
      if (!validarPregunta(pregunta)) return false;
      question["-complexity"] = 2;
      question["-subject"] = "Prueba";
      question.itemBody = {
        "p": title
      };
      addQuestion(question);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
};

var addQuestion = function addQuestion(question) {
  quizJSON.assessmentItems.assessmentItem.push(question);
};

var submitForm = function submitForm(e) {
  e.preventDefault();
  if (validarForm()) console.log(quizJSON);else window.alert("Formulario con campos vacios");
  return false;
};

var insertQuestion = function insertQuestion() {
  var questionContent = "\n      <div class=\"quiz-question-container\">\n          <div class=\"question-pos\">1</div>\n          <input type=\"text\" name=\"pregunta[]\" value=\"\" placeholder=\"Introduce una nueva pregunta...\" class=\"question\" required>\n      </div>\n      <div class=\"quiz-question--answer\">\n          <label for=\"respuestas[]\" class=\"fa fa-check correct\"></label>\n          <input type=\"text\" name=\"respuestas[]\" class=\"answer\" value=\"\" required>\n          <label for=\"dificultad[]\" class=\"fa fa-tachometer\"></label>\n          <input type=\"number\" min=\"0\" max=\"5\" name=\"dificultad[]\" value=\"0\" class=\"quiz-difficulty\">\n          <label for=\"subject[]\" class=\"fa fa-book\"></label>\n          <select class=\"select-subject\" name=\"\">\n            <option value=\"Internet\">Internet</option>\n            <option value=\"Web\">Web</option>\n          </select>\n      </div>\n  ";

  var nodeQuestion = document.createElement('div');
  nodeQuestion.classList = "quiz-question";
  nodeQuestion.innerHTML = questionContent;
  form.insertBefore(nodeQuestion, btnAddQuestion);
};

},{}],2:[function(require,module,exports){
"use strict";

var _form = require("./form.js");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("cargando...");
(0, _form2.default)();

},{"./form.js":1}]},{},[2])


//# sourceMappingURL=bundle.js.map
