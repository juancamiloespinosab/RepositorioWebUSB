<?php

$consulta = json_decode(file_get_contents('php://input'));

$server = 'us-cdbr-iron-east-05.cleardb.net';
$username = 'b3829a1c05ddd3';
$password = '03167713';
$database = 'heroku_a4bce03159f3805';

$conn = new mysqli($server, $username, $password, $database);

$sql = "select tb_usb_publicaciones.id_publicacion, tb_usb_profesores.avatar, tb_usb_profesores.nombre, tb_usb_publicaciones.fecha, tb_usb_publicaciones.titulo, tb_usb_publicaciones.descripcion, tb_usb_materia.nombre, tb_usb_programas.nombre, tb_usb_semestre.nombre

FROM tb_usb_publicaciones

INNER JOIN tb_usb_profesores ON tb_usb_publicaciones.id_profesor = tb_usb_profesores.id_profesor
INNER JOIN tb_usb_materia ON tb_usb_publicaciones.id_materia = tb_usb_materia.id_materia
INNER JOIN tb_usb_programas ON tb_usb_materia.id_programa = tb_usb_programas.id_programa
INNER JOIN tb_usb_semestre ON tb_usb_publicaciones.id_semestre = tb_usb_semestre.id_semestre

ORDER BY tb_usb_publicaciones.id_publicacion DESC

;";

$res = mysqli_query($conn, $sql);

$json = array();

$nums = $res->num_rows;

array_push($json,$nums);




echo json_encode($consulta);

?>