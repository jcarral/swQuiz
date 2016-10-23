<?php
require_once __DIR__ . "/../lib/functions.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $filePath = __DIR__ . "/../static/data/questions.json";
  if(isset($_POST['vJS'])){
    if(validateSchema($filePath)){
      file_put_contents($filePath, $_POST['vJS']);
      $message = 'Preguntas añadidas correctamente';
      $class = 'success';
    }else{
      $message = 'No intentes meter un JSON que no es valido, a mi no me la cuelas';
      $class = 'error';
    }
  }elseif (isset($_POST['pregunta'])) {
      //TODO: Gestionar el envio de datos versión básica
  }else{
    $message = 'Tu POST no es correcto, ¿Qué intentas hacer?';
    $class = 'error';
  }
  insertAlertMessage($message, $class);
}
 ?>
<h3 class="container-title title">Inserta las preguntas nuevas:</h3>
<form method="POST" action="" class="quiz" id="formQuiz">
    <div class="quiz-question">
        <div class="quiz-question-container">
            <div class="question-pos">1</div>
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
    </div>

    <div class="hexagon" id="newQuestion">
        <i class="fa fa-plus"></i>
    </div>

  
    <input type="submit" name="name" value="¡ Añadir pregunta/s v.PHP !" class="quiz-submit">
    <input type="button" name="name" value="¡ Añadir pregunta/s v.JS !" id="btn-submit-js">
</form>
