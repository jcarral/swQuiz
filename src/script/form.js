let preguntas
let quizJSON = require('../../static/data/questions.json')

//UI elements
const btnAddQuestion = document.getElementById('newQuestion')
const btnSendJS = document.getElementById('btn-submit-js')
const form = document.getElementById('formQuiz')


const validarPregunta = (pregunta) => {
    let inputs = pregunta.getElementsByTagName('input')
    for (let input of inputs) {
        if (input.value === '') return false
    }
    return true
}

const validarForm = () => {
    preguntas = document.getElementsByClassName('quiz-question')

    for (let pregunta of preguntas) {
        if (!validarPregunta(pregunta)) return false
    }
    return true
}

const generarJSON = () => {
  preguntas = document.getElementsByClassName('quiz-question')
  let question

  for (let pregunta of preguntas) {
      question = {}
      if (!validarPregunta(pregunta)) return false
      let select = pregunta.querySelector('select')
      question["-complexity"] = pregunta.querySelector('input[type=number]').value
      question["-subject"] = select.options[select.selectedIndex].value
      question.itemBody = {
          "p": pregunta.querySelector('.question').value
      }
      question.correctResponse = {
          "value": pregunta.querySelector('.answer').value
      }
      quizJSON.assessmentItems.assessmentItem.push(question)
  }
  writeFile()
  return true
}


const submitFormPHP = function(e) {
    e.preventDefault()
    if (!validarForm()) window.alert("Formulario con campos vacios")
    else{
      //TODO: Gestionar el envio de datos v.PHP
    }
}

const postData = (path) => {
    let  newForm = document.createElement("form")
    newForm.setAttribute("method", 'POST')
    newForm.setAttribute("action", path)
    let hiddenField = document.createElement("input")
    hiddenField.setAttribute("type", "hidden")
    hiddenField.setAttribute("name", 'vJS')
    hiddenField.setAttribute("value", JSON.stringify(quizJSON))
    newForm.appendChild(hiddenField)
    document.body.appendChild(newForm)
    newForm.submit()
}
const submitFormJS = function(e) {
  e.preventDefault()
  if(validarForm()){
    generarJSON()
    postData('/quiz')
  }
  else window.alert("Formulario con campos vacios")
}

const writeFile = () => {
  let filePath = '/static/data/preguntas.json'
  let file = new File([JSON.stringify(quizJSON, null, 2)], filePath)

}

const insertQuestion = () => {
    let count = document.getElementsByClassName('quiz-question').length + 1
    let questionContent = `
      <div class="quiz-question-container">
          <div class="question-pos">${count}</div>
          <input type="text" name="pregunta[]" value="" placeholder="Introduce una nueva pregunta..." class="question" required>
      </div>
      <div class="quiz-question--answer">
          <label for="respuestas[]" class="fa fa-check correct"></label>
          <input type="text" name="respuestas[]" class="answer" value="" required>
          <label for="dificultad[]" class="fa fa-tachometer"></label>
          <input type="number" min="0" max="5" name="dificultad[]" value="0" class="quiz-difficulty">
          <label for="subject[]" class="fa fa-book"></label>
          <select class="select-subject" name="">
            <option value="Internet">Internet</option>
            <option value="Web">Web</option>
          </select>
      </div>
  `
    if(!validarForm()) return window.alert('No puedes añadir más preguntas si aún hay sin rellenar')
    let nodeQuestion = document.createElement('div')
    nodeQuestion.classList = "quiz-question"
    nodeQuestion.innerHTML = questionContent
    form.insertBefore(nodeQuestion, btnAddQuestion)

}

export default function() {
    form.addEventListener('submit', submitFormPHP)
    btnAddQuestion.addEventListener('click', insertQuestion)
    btnSendJS.addEventListener('click', submitFormJS)
}
