<?php
require_once('conexion.php');

$id_profesor = $_POST['id_profesor'];

$sql = ("select imagen, link_video, pdf, audio, word, titulo, descripcion from tb_usb_publicaciones where id_profesor = '$id_profesor'");
$registros = mysqli_query($conexion,$sql) or
    die ("Problemas con el SELECT => ".mysqli_error($conexion));

$rawdata = array();

while($row = mysqli_fetch_array($registros))
{
    $rawdata = $row;
}
echo json_encode($rawdata);
?>