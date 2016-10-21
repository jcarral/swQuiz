let preguntas
let quizJSON = {
    "assessmentItems": {
        "assessmentItem": []
    }
}

//UI elements
const btnAddQuestion = document.getElementById('newQuestion')
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
    let question
    let title = "titulo"

    for (let pregunta of preguntas) {
        question = {}
        if (!validarPregunta(pregunta)) return false
        question["-complexity"] = 2
        question["-subject"] = "Prueba"
        question.itemBody = {
            "p": title
        }
        addQuestion(question)
    }
    return true
}

const addQuestion = (question) => {
    quizJSON.assessmentItems.assessmentItem.push(question)
}

const submitForm = function(e) {
    e.preventDefault()
    if (validarForm()) console.log(quizJSON)
    else window.alert("Formulario con campos vacios")
    return false

}

const insertQuestion = () => {
    let pos = document.getElementsByClassName('quiz-question').length + 1
    let questionContent = `
      <div class="quiz-question-container">
          <div class="question-pos">${pos}</div>
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

    let nodeQuestion = document.createElement('div')
    nodeQuestion.classList = "quiz-question"
    nodeQuestion.innerHTML = questionContent
    form.insertBefore(nodeQuestion, btnAddQuestion)

}

export default function() {

    form.addEventListener('submit', submitForm)
    btnAddQuestion.addEventListener('click', insertQuestion)
}
