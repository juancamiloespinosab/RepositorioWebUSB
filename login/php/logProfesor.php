<?php

$data = json_decode(file_get_contents('php://input'));

$user = $data->usuario;
$pass = $data->clave;

function loginCorrecto($user, $pass){
    /*
        REALIZAR CONEXION CON LA BASE DE DATOS,
        VALIDAR SI EL USUARIO Y CONTRASEÑA SON CORRECTOS,
        SI SON VALIDOS DEBE RETORNAR true,
        DE LO CONTRATIO RETORNA false
    */
}

if(loginCorrecto($user, $pass)){
    echo json_encode("true");
} else {
    echo json_encode("false");
}

?>
