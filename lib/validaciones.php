<?php
  function validFields($data){
    $var = (isset($data["pregunta"]) && isset($data["respuesta"]) && isset($data["dificultad"]) && isset($data["subject"]))
        && ((count($data["pregunta"]) == count($data["respuesta"]))
          && (count($data["respuesta"]) == count($data["dificultad"]))
          && (count($data["dificultad"]) == count($data["subject"])));
          echo "<pre>";
          var_dump($data);
          echo "</pre>";
          return $var;
  }

  function validString($data){
    foreach ($data as $item) {
      if(strlen(trim($item)) == 0) return false;
    }
    return true;
  }

  function validNumber($data, $min, $max){
    foreach ($data as $item) {
      $number = intval($item);
      if($number < $min || $number > $max) return false;
    }
    return true;
  }

  function validForm($data){
    return validFields($data)
      && validString($_POST["pregunta"])
      && validString($data["respuesta"])
      && validString($data["subject"])
      && validNumber($data["dificultad"], 1, 5);
  }

  function validateSchema($path){
    $jsonSchemaObject = json_decode(file_get_contents(__DIR__ . "/quizSchema.json"));
    $json = json_decode(file_get_contents($path));
    $validator = JVal\Validator::buildDefault();
    $violations = $validator->validate($json, $jsonSchemaObject);
    return empty($violations);
  }
 ?>
