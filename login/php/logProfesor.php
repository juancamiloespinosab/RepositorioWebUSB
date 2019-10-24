<?php

$data = json_decode(file_get_contents('php://input'));

$user = $data->usuario;
$pass = $data->clave;

function loginCorrecto($user, $pass){

    $server = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'repositoriousbbog';


    $conn = new mysqli($server, $username, $password, $database);

    $SQL = "select * FROM TB_USB_PROFESORES WHERE USUARIO='$user' AND CONTRASENA = '$pass'";


    $RES = mysqli_query($conn, $SQL);


    $filas=mysqli_num_rows($RES);
    if($filas>0){
        return true;
    }
    else{
        return false;
    }
}

if(loginCorrecto($user, $pass)){
    echo json_encode("true");
} else {
    echo json_encode("false");
}

?>
