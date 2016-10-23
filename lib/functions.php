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
      echo "<div class='alert $class'>$message</div>";
  }

  function addDataToJSON($data, $filePath){
    $jsonObject = json_decode(file_get_contents($filePath));
    for ($i=0; $i < count($data["pregunta"]); $i++) {
      $itemBody = (object) ['p' => htmlspecialchars($data["pregunta"][$i])];
      $correctResponse = (object) ['value' => htmlspecialchars($data["respuesta"][$i])];
      $newQuestion = (object) ['-complexity' => htmlspecialchars($data['dificultad'][$i]),
                                '-subject' => htmlspecialchars($data['subject'][$i]),
                                'itemBody' => $itemBody,
                                'correctResponse' => $correctResponse
                              ];
      array_push($jsonObject->assessmentItems->assessmentItem, $newQuestion);
    }
    file_put_contents($filePath, json_encode($jsonObject));
  }

 ?>
