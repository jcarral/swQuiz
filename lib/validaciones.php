<?php
  function validFields($data){
    $var = (isset($data["pregunta"]) && isset($data["respuesta"]) && isset($data["dificultad"]) && isset($data["subject"]))
        && ((count($data["pregunta"]) == count($data["respuesta"]))
          && (count($data["respuesta"]) == count($data["dificultad"]))
          && (count($data["dificultad"]) == count($data["subject"])));
          return $var;
  }

  function validString($data){
    if(!is_array($data)) return false;
    foreach ($data as $item) {
      if(strlen(trim($item)) == 0) return false;
    }
    return true;
  }

  function validNumber($data, $min, $max){
    if(!is_array($data)) return false;
    foreach ($data as $item) {
      $number = intval($item, 10);
      if(strlen($item) > 1 || $number < $min || $number > $max) return false;
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

  function validateSchema($json){
    $jsonSchemaObject = json_decode(file_get_contents(__DIR__ . "/quizSchema.json"));
    $validator = JVal\Validator::buildDefault();
    $violations = $validator->validate($json, $jsonSchemaObject);
    return empty($violations);
  }
 ?>
