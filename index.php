<?php
  require_once __DIR__ . '/vendor/autoload.php';

  $klein = new \Klein\Klein();
	$base  = dirname($_SERVER['PHP_SELF']);

	// Update request when we have a subdirectory
		if(ltrim($base, '/')){

		    $_SERVER['REQUEST_URI'] = substr($_SERVER['REQUEST_URI'], strlen($base));
		}
  //GESTION DE LAS RUTAS
  $klein->respond(array('POST', 'GET'), '/', function () {
    $viewRoute = '/view_questions.php';
    require_once __DIR__ . '/views/template.php';
  });

  $klein->respond(array('POST', 'GET'), '/quiz', function () {
    $viewRoute = '/quiz_form.php';
    require_once __DIR__ . '/views/template.php';
  });

  $klein->respond(array('GET', 'POST'), '/check', function () {
    $viewRoute = '/student_check.php';
    require_once __DIR__ . '/views/template.php';
  });

  $klein->respond(array('GET', 'POST'), '/api/questions', function () {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      echo file_get_contents(__DIR__ . "/static/data/questions.json");
    }else{
      echo str_replace("&quot;", "\&quot;", file_get_contents(__DIR__ . "/static/data/questions.json"));
    }
  });


  $klein->dispatch();
 ?>
