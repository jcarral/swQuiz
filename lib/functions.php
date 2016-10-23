<?php

  function fillTable($row){
    $newRow = "<div class='row'>";
    foreach ($row as $item) {
      $newRow .= "<div class='cell'>". $item . "</div>";
    }
    $newRow .= "</div>";
    return $newRow;
  }

  function validateSchema($path){
    $jsonSchemaObject = json_decode(file_get_contents(__DIR__ . "/quizSchema.json"));
    $json = json_decode(file_get_contents($path));
    $validator = JVal\Validator::buildDefault();
    $violations = $validator->validate($json, $jsonSchemaObject);
    return empty($violations);
  }

 ?>
