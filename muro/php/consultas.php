<?php

$consulta = json_decode(file_get_contents('php://input'));

$server = 'localhost';
$username = 'root';
$password = '';
$database = 'repositoriousbbog';


$conn = new mysqli($server, $username, $password, $database);

$sql = "select * FROM TB_USB_PUBLICACIONES";

$res = mysqli_query($conn, $sql);

$json = array();

$nums = $res->num_rows;

array_push($json,$nums);

for($i = 0; $i < $nums; $i++){
    $arr = array();

    $fila = mysqli_fetch_row($res);
    $num = count($fila);

    for($o = 0; $o < $num; $o++){
        $dato = utf8_encode($fila[$o]);
        array_push($arr, $dato);
    }

    array_push($json,$arr);
}


/* $json = array(
    "id_publicacion"  => "test",
    "id_profesor" => "test",
    "id_materia" => "test",
    "imagen" => "test",
    "link_video" => "test",
    "pdf" => "test",
    "audio" => "test",
    "word" => "test",
    "titulo" => "test",
    "descripcion" => "test",
    "id_semestre" => "test",
); */

echo json_encode($json);

?>