<?php
require_once __DIR__ . "/../lib/functions.php";
require_once __DIR__ . "/../lib/validaciones.php";

$filePath = __DIR__ . "/../static/data/questions.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if(isset($_POST['vJS'])){ //Peticion usando JS
    if(validateSchema(json_decode($_POST['vJS']))){ //Valida si el esquema recibido por POST es valido
      addContentToQuestions(json_decode($_POST['vJS'])); //Añade la/s pregunta/s junto al resto
      $message = 'Pregunta/s añadida/s correctamente';
      $class = 'success';
    }else{
      $message = 'No intentes meter un JSON que no es valido, a mi no me la cuelas. v.JS';
      $class = 'error';
    }
  }elseif (isset($_POST['pregunta'])) { //Peticion usando PHP
      if(validForm($_POST)){ //Valida los datos del formulario
        addDataToJSON($_POST, $filePath); //Añade los datos al JSON que contiene el resto
        $message = 'Pregunta/s añadida/s correctamente';
        $class = 'success';
      }else{
        $message = 'No intentes meter un JSON que no es valido, a mi no me la cuelas. v.PHP';
        $class = 'error';
      }
  }else{
    $message = 'Tu POST no es correcto, ¿Qué intentas hacer?';
    $class = 'error';
  }
  insertAlertMessage($message, $class);
}
 ?>
<h3 class="container-title quiz-title">Inserta las preguntas nuevas:</h3>
<form method="POST" action="" class="quiz" id="formQuiz">
    <div class="quiz-question">
        <div class="quiz-question-container">
            <div class="question-pos"></div>
            <input type="text" name="pregunta[]" value="" placeholder="Introduce una nueva pregunta..." class="question" required>
        </div>
        <div class="quiz-question--answer">
            <label for="respuestas[]" class="fa fa-check correct"></label>
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
            </select>
        </div>
    </div>

    <div class="hexagon" id="newQuestion">
        <i class="fa fa-plus"></i>
    </div>

  <div class="quiz-submit">
    <input type="submit" name="name" value="¡ Añadir pregunta/s v.PHP !" class="php-submit btn-submit">
    <input type="button" name="name" value="¡ Añadir pregunta/s v.JS !" id="btn-submit-js" class="js-submit btn-submit">
  </div>
</form>
