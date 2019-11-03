<?php

$data = json_decode(file_get_contents('php://input'));

$user = $data->usuario;
$pass = $data->clave;

function loginCorrecto($user, $pass){

    $server = 'us-cdbr-iron-east-05.cleardb.net';
    $username = 'b3829a1c05ddd3';
    $password = '03167713';
    $database = 'heroku_a4bce03159f3805';


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
