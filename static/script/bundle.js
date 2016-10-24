(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var preguntas = void 0;
var quizJSON = require('../../static/data/questions.json');

//UI elements
var btnAddQuestion = document.getElementById('newQuestion');
var btnSendJS = document.getElementById('btn-submit-js');
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = preguntas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var pregunta = _step2.value;

            if (!validarPregunta(pregunta)) return false;
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

var generarJSON = function generarJSON() {
    preguntas = document.getElementsByClassName('quiz-question');
    var question = void 0;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = preguntas[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var pregunta = _step3.value;

            question = {};
            if (!validarPregunta(pregunta)) return false;
            var select = pregunta.querySelector('select');
            question["-complexity"] = pregunta.querySelector('input[type=number]').value.toString();
            question["-subject"] = select.options[select.selectedIndex].value;
            question.itemBody = {
                "p": pregunta.querySelector('.question').value
            };
            question.correctResponse = {
                "value": pregunta.querySelector('.answer').value
            };
            quizJSON.assessmentItems.assessmentItem.push(question);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return true;
};

var submitFormPHP = function submitFormPHP(e) {
    e.preventDefault();
    if (!validarForm()) window.alert("Formulario con campos vacios");else {
        //TODO: Gestionar el envio de datos v.PHP
        form.submit();
    }
};

var postData = function postData(path) {
    var newForm = document.createElement("form");
    newForm.setAttribute("method", 'POST');
    newForm.setAttribute("action", path);
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", 'vJS');
    hiddenField.setAttribute("value", JSON.stringify(quizJSON));
    newForm.appendChild(hiddenField);
    document.body.appendChild(newForm);
    newForm.submit();
};
var submitFormJS = function submitFormJS(e) {

    e.preventDefault();
    if (validarForm()) {
        generarJSON();
        postData('/quiz');
    } else window.alert("Formulario con campos vacios");
};

var insertQuestion = function insertQuestion() {
    var count = document.getElementsByClassName('quiz-question').length + 1;
    var questionContent = '\n      <div class="quiz-question-container">\n          <div class="question-pos">' + count + '</div>\n          <input type="text" name="pregunta[]" value="" placeholder="Introduce una nueva pregunta..." class="question" required>\n      </div>\n      <div class="quiz-question--answer">\n          <label for="respuestas[]" class="fa fa-check correct"></label>\n          <input type="text" name="respuesta[]" class="answer" value="" required>\n          <label for="dificultad[]" class="fa fa-tachometer"></label>\n          <input type="number" min="1" max="5" name="dificultad[]" value="0" class="quiz-difficulty">\n          <label for="subject[]" class="fa fa-book"></label>\n          <select class="select-subject" name="subject[]">\n            <option value="Internet">Internet</option>\n            <option value="Web">Web</option>\n          </select>\n      </div>\n  ';
    if (!validarForm()) return window.alert('No puedes añadir más preguntas si aún hay sin rellenar');
    var nodeQuestion = document.createElement('div');
    nodeQuestion.classList = "quiz-question";
    nodeQuestion.innerHTML = questionContent;
    form.insertBefore(nodeQuestion, btnAddQuestion);
};

var setForm = exports.setForm = function setForm() {
    if (form === null || form === undefined) return false; //Que siga ejecutando el main, no estas en la página
    form.addEventListener('submit', submitFormPHP);
    btnAddQuestion.addEventListener('click', insertQuestion);
    btnSendJS.addEventListener('click', submitFormJS);
};

},{"../../static/data/questions.json":4}],2:[function(require,module,exports){
'use strict';

var _form = require('./form.js');

var _table = require('./table.js');

(0, _table.setTable)();
(0, _form.setForm)();

},{"./form.js":1,"./table.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


//UI elements
var table = document.getElementById('table-quiz');

var addRow = function addRow(data) {
  var row = '';
  data.forEach(function (value, i) {
    row += i === 2 ? '<div class="cell cell-answer">' + value + '</div>' : '<div class="cell">' + value + '</div>';
  });
  return row;
};

var getJSONPost = function getJSONPost() {
  return new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();
    var url = "/api/questions";
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        resolve(http.responseText);
      }
    };
    http.send();
  });
};

var fillTable = function fillTable() {
  if (table === null || table === undefined) return false; //Para que se siga ejecutando si no es la pagina
  getJSONPost().then(function (data) {
    data = JSON.parse(data);
    var questions = data.assessmentItems.assessmentItem;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = questions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var question = _step.value;

        var row = document.createElement('div');
        row.classList += ' row';
        var _data = [question['itemBody']['p'], question['-complexity'], question['correctResponse']['value'], question['-subject']];
        row.innerHTML = addRow(_data);
        table.appendChild(row);
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
  });
};

var setTable = exports.setTable = fillTable;

},{}],4:[function(require,module,exports){
module.exports={"assessmentItems":{"assessmentItem":[{"-complexity":"2","-subject":"Web","itemBody":{"p":"Tag HTML para añadir un formulario"},"correctResponse":{"value":"FORM"}},{"-complexity":"4","-subject":"Internet","itemBody":{"p":"Este protocolo acabará funcionando incluso entre dos latas unidas por un cordón"},"correctResponse":{"value":"TCP/IP"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"Preg1"},"correctResponse":{"value":"Res1"}},{"-complexity":"2","-subject":"Web","itemBody":{"p":"Preg2"},"correctResponse":{"value":"Res2"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"Voy a validar con JS"},"correctResponse":{"value":"Y te cuelo un 0"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"Los 0 no pasan "},"correctResponse":{"value":"Solo 1"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"Me apetece joder la tabla "},"correctResponse":{"value":"Voy a descuadrarla a ver que pasa, si pongo una respuesta larga se va a tomar por culo? Puto css"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"jgc"},"correctResponse":{"value":"jgc"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"cjkjn"},"correctResponse":{"value":"124"}},{"-complexity":"3","-subject":"Internet","itemBody":{"p":"dfhjk"},"correctResponse":{"value":"va con php..."}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"jgc"},"correctResponse":{"value":"jgc"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"cjkjn"},"correctResponse":{"value":"124"}},{"-complexity":"3","-subject":"Internet","itemBody":{"p":"dfhjk"},"correctResponse":{"value":"va con php..."}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"sadad"},"correctResponse":{"value":"asdas"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"122131"},"correctResponse":{"value":"SASDASD"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"as"},"correctResponse":{"value":"aSas&lt;h1&gt;"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"&lt;h1&gt; Te la cuelo? &lt;/h1&gt;"},"correctResponse":{"value":"NO!"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"Pregunta JS"},"correctResponse":{"value":"Ahí va una"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"dzsdas"},"correctResponse":{"value":"1212"}},{"-complexity":"1","-subject":"Internet","itemBody":{"p":"Pregunta nueva"},"correctResponse":{"value":"respuesta vieja"}}]}}
},{}]},{},[2]);
