<?php
  require_once __DIR__ . '/vendor/autoload.php';

  $klein = new \Klein\Klein();

  $klein->respond(array('POST', 'GET'), '/', function () {
    $viewRoute = '/view_questions.php';
    require_once __DIR__ . '/views/template.php';
  });

  $klein->respond(array('POST', 'GET'), '/quiz', function () {
    $viewRoute = '/quiz_form.php';
    require_once __DIR__ . '/views/template.php';
  });


  $klein->dispatch();
 ?>
