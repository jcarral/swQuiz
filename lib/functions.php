<?php


  function fillTable($row){
    $newRow = "<div class='row'>";
    foreach ($row as $key=>$item) {
      $newRow .= ($key == 2)?"<div class='cell cell-answer'>". $item . "</div>":"<div class='cell'>". $item . "</div>";
    }
    $newRow .= "</div>";
    return $newRow;
  }

  function insertAlertMessage($message, $class){
      echo "<div class='alert $class'><p>$message</p><a href='/' class='fa fa-hand-o-right'> Ir a ver preguntas </a></div>";
  }

  //Función para añadir preguntas al JSON
  function addDataToJSON($data, $filePath){
    $jsonObject = json_decode(file_get_contents($filePath)); //Carga el fichero con las preguntas
    for ($i=0; $i < count($data["pregunta"]); $i++) { //Recorre a traves de todas las preguntas
      $itemBody = (object) ['p' => htmlspecialchars($data["pregunta"][$i])]; //Crea un objeto itemBody con un atributo p con la pregunta
      $correctResponse = (object) ['value' => htmlspecialchars($data["respuesta"][$i])];
      $newQuestion = (object) ['-complexity' => htmlspecialchars($data['dificultad'][$i]),
                                '-subject' => htmlspecialchars($data['subject'][$i]),
                                'itemBody' => $itemBody,
                                'correctResponse' => $correctResponse
                              ];
      array_push($jsonObject->assessmentItems->assessmentItem, $newQuestion); //Añade la pregunta al resto
    }
    file_put_contents($filePath, json_encode($jsonObject)); //Guarda en el fichero todas las preguntas
  }

  function addContentToQuestions($data){
    $filePath = __DIR__ . "/../static/data/questions.json";
    $jsonObject = json_decode(file_get_contents($filePath));
    //En el atributo assesmentItem donde se almacenan las preguntas se guardan las viejas junto a las nuevas
    $jsonObject->assessmentItems->assessmentItem = array_merge($jsonObject->assessmentItems->assessmentItem, $data->assessmentItems->assessmentItem);
    file_put_contents($filePath, json_encode($jsonObject));

  }
 ?>
