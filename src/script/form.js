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
      question["-complexity"] = pregunta.querySelector('input[type=number]').value.toString()
      question["-subject"] = select.options[select.selectedIndex].value
      question.itemBody = {
          "p": pregunta.querySelector('.question').value
      }
      question.correctResponse = {
          "value": pregunta.querySelector('.answer').value
      }
      quizJSON.assessmentItems.assessmentItem.push(question)
  }

  return true
}


const submitFormPHP = function(e) {
    e.preventDefault()
    if (!validarForm()) window.alert("Formulario con campos vacios")
    else{
      //TODO: Gestionar el envio de datos v.PHP
      form.submit()
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


const insertQuestion = () => {
    let questionContent = `
      <div class="quiz-question-container">
          <div class="question-pos"></div>
          <input type="text" name="pregunta[]" value="" placeholder="Introduce una nueva pregunta..." class="question" required>
      </div>
  `

  let answerContent = `<label for="respuestas[]" class="fa fa-check correct"></label>
    <input type="text" name="respuesta[]" class="answer" value="" required>
    <label for="dificultad[]" class="fa fa-tachometer"></label>
    <input type="number" min="1" max="5" name="dificultad[]" value="1" class="quiz-difficulty">
    <label for="subject[]" class="fa fa-book"></label>
    <select class="select-subject" name="subject[]">
      <option value="Internet">Internet</option>
      <option value="Web">Web</option>
      <option value="Subject3">Subject3</option>
      <option value="Subject4">Subject4</option>
      <option value="Subject5">Subject5</option>
      <option value="Subject6">Subject6</option>
    </select>`
    if(!validarForm()) return window.alert('No puedes añadir más preguntas si aún hay sin rellenar')
    let deleteBtn = document.createElement('div')
    let nodeQuestion = document.createElement('div')
    let questionAnswerBox = document.createElement('div')

    questionAnswerBox.classList = 'quiz-question--answer'
    questionAnswerBox.innerHTML = answerContent
    deleteBtn.classList = 'quiz-question--answer-delete fa fa-trash'
    deleteBtn.addEventListener('click', removeQuestion)
    questionAnswerBox.appendChild(deleteBtn)
    nodeQuestion.classList = "quiz-question"
    nodeQuestion.innerHTML = questionContent
    nodeQuestion.appendChild(questionAnswerBox)
    form.insertBefore(nodeQuestion, btnAddQuestion)
}

const removeQuestion = function(e){
  e.target.parentElement.parentElement.remove();
}
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

export const setForm = () => {
    if(form === null || form === undefined) return false //Que siga ejecutando el main, no estas en la página
    form.addEventListener('submit', submitFormPHP)
    btnAddQuestion.addEventListener('click', insertQuestion)
    btnSendJS.addEventListener('click', submitFormJS)

}
