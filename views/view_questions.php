<a href="/quiz"class="btn-addQuestion">
  <i class="fa fa-plus"></i>
  <p  class="">Añadir pregunta/s</p>
</a>
<div class="table">
  <div class="row header">
    <div class="cell">
      Pregunta
    </div>
    <div class="cell">
      Complejidad
    </div>
    <div class="cell">
      Respuesta
    </div>
    <div class="cell">
      Subject
    </div>
  </div>

  <?php
    require_once __DIR__ . "/../lib/functions.php";
    require_once __DIR__ . "/../lib/validaciones.php";
    $pathToJson = __DIR__ . "/../static/data/questions.json";
    $jsonString = file_get_contents($pathToJson);
    $data = json_decode($jsonString);
    if(validateSchema($pathToJson)){
      $tableRows = "";
      foreach ($data->assessmentItems->assessmentItem as $item) {
        $row = array($item->itemBody->p, $item->{"-complexity"}, $item->correctResponse->value, $item->{"-subject"});
        $tableRows .= fillTable($row);
      }
      echo $tableRows;
    }else{
      echo "No hay preguntas disponibles ahora mismo";
    }
   ?>


</div>
