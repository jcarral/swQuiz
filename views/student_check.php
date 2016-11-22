<?php
  if($_SERVER['REQUEST_METHOD'] === 'POST'){
    if(isset($_POST['correo'])){
      $validMessage = 'Estudiante almacenado correctamente';
      $uri = 'https://swrest.herokuapp.com/api/add';
      $nombreUsuario = (isset($_POST['nombre']))?$_POST['nombre']:'SinNombre';
      $data = '{"estudiante": {"correo": "'.$_POST['correo'].'", "nombre": "'.$nombreUsuario.'" }}';
      $res = \Httpful\Request::put($uri) //Envía la peticion a la uri
        ->sendsJson()
        ->body($data)
        ->send();
       if(is_object($res) && strcmp($res->body->message, $validMessage) == 0){ //Compara el mensaje de respuesta para verificar que ha ido bien
         $tooltipMessage = array('valid', 'Estudiante añadido correctamente');
       }else{
         $tooltipMessage = array('error', 'Error al intentar añadir un estudiante');
       }
    }else{
      $tooltipMessage = array('error', 'Error al intentar añadir un estudiante');
    }
  }
 ?>
<h3 class="rest-title container-title quiz-title">Comprobar matrícula (JS)</h3>
<form class="" action="" method="" id="checkForm" class="validator-form">
  <input type="email" name="correo" value="" id="checkMail" class="rest-input" placeholder="Introducir correo electronico">
  <input type="submit" name="name" value="Comprobar" class="rest-submit">
  <div class="tooltip hidden" id="tooltipCheck"></div>
  <div class="bowlG hidden" id='spinnerCheck'>
    <div id="bowl_ringG">
      <div class="ball_holderG">
        <div class="ballG">
        </div>
      </div>
    </div>
  </div>
</form>

<h3 class="rest-title container-title quiz-title">Añadir estudiante (PHP)</h3>
<form action="" id="addStudent" method="POST">
  <input type="email" name="correo" class="rest-input" value="" placeholder="Introducir correo electronico"required>
  <input type="text" name="nombre" class="rest-input" value="" placeholder="Introducir nombre del estudiante">
  <input type="submit" value="Añadir estudiante nuevo" class="rest-submit">
  <?php if(isset($tooltipMessage)){
    echo "<div class='tooltip top $tooltipMessage[0]'> $tooltipMessage[1] </div>";
  } ?>
  <div class="bowlG hidden">
    <div id="bowl_ringG">
      <div class="ball_holderG">
        <div class="ballG">
        </div>
      </div>
    </div>
  </div>
</form>

<h3 class="rest-title container-title quiz-title">Borrar estudiante (JS)</h3>
<form action="" id="deleteStudent">
  <input type="email" name="name" class="rest-input" value="" required id='inputDelete' placeholder="Introducir correo electronico">
  <input type="submit" name="name" value="Borrar estudiante" class="rest-submit">
  <div class="tooltip hidden" id="tooltipDelete"></div>
  <div class="bowlG hidden" id="spinnerDelete">
    <div id="bowl_ringG">
      <div class="ball_holderG">
        <div class="ballG">
        </div>
      </div>
    </div>
  </div>
</form>
