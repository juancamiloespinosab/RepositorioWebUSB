<?php

$consulta = json_decode(file_get_contents('php://input'));

$server = 'localhost';
$username = 'root';
$password = '';
$database = 'repositoriousbbog';

$id_pub = 0;


$conn = new mysqli($server, $username, $password, $database);

$sql = "select tb_usb_publicaciones.id_publicacion, tb_usb_profesores.avatar, tb_usb_profesores.nombre, tb_usb_publicaciones.fecha, tb_usb_publicaciones.titulo, tb_usb_publicaciones.descripcion, tb_usb_materia.nombre, tb_usb_programas.nombre, tb_usb_semestre.nombre

FROM tb_usb_publicaciones

INNER JOIN tb_usb_profesores ON tb_usb_publicaciones.id_profesor = tb_usb_profesores.id_profesor
INNER JOIN tb_usb_materia ON tb_usb_publicaciones.id_materia = tb_usb_materia.id_materia
INNER JOIN tb_usb_programas ON tb_usb_materia.id_programa = tb_usb_programas.id_programa
INNER JOIN tb_usb_semestre ON tb_usb_publicaciones.id_semestre = tb_usb_semestre.id_semestre

ORDER BY tb_usb_publicaciones.id_publicacion DESC

;";

$sql2 = "select tb_usb_documentos.tipo, tb_usb_documentos.ruta
FROM tb_usb_documentos
WHERE tb_usb_documentos.id_publicacion = ". $id_pub;

$res = mysqli_query($conn, $sql);

$json = array();

$nums = $res->num_rows;

array_push($json,$nums);

$arr = array(
    "id",
    "avatar",
    "profesor",
    "fecha",
    "titulo",
    "descripcion",
    "materia",
    "carrera",
    "semestre",
    "documentos"
);

for($i = 0; $i < $nums; $i++){

    $fila = mysqli_fetch_row($res);

    $arr["id"] = utf8_encode($fila[0]);
    $arr["avatar"] = utf8_encode($fila[1]);
    $arr["profesor"] = utf8_encode($fila[2]);
    $arr["fecha"] = utf8_encode($fila[3]);
    $arr["titulo"] = utf8_encode($fila[4]);
    $arr["descripcion"] = utf8_encode($fila[5]);
    $arr["materia"] = utf8_encode($fila[6]);
    $arr["carrera"] = utf8_encode($fila[7]);
    $arr["semestre"] = utf8_encode($fila[8]);

    $id_pub = $fila[0];

    $res_docs = mysqli_query($conn, $sql2);
    $num_res_docs = count($res_docs);

    $arr_docs = array();

    


    array_push($json,$arr);
}

echo json_encode($json);

?>