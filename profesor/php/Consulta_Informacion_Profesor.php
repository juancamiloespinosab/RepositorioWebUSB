<?php
require_once('conexion.php');

$id_profesor = $_POST['id_profesor'];

$sql = ("select nombre, correo, password, descripcion, usuario from tb_usb_profesores where id_profesor = '$id_profesor'");
$registros = mysqli_query($conexion,$sql) or
    die ("Problemas con el SELECT => ".mysqli_error($conexion));

$rawdata = array();

while($row = mysqli_fetch_array($registros))
{
    $rawdata = $row;
}
echo json_encode($rawdata);
?>