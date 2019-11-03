<?php

$rnd = rand(1000, 9999);


$correo = json_decode(file_get_contents('php://input'));

mail($correo->correo, 'Mi título', 'hola');

?>
