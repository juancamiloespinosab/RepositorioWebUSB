<?php

$consulta = json_decode(file_get_contents('php://input'));

$server = 'us-cdbr-iron-east-05.cleardb.net';
$username = 'b3829a1c05ddd3';
$password = '03167713';
$database = 'heroku_a4bce03159f3805';

$conn = new mysqli($server, $username, $password, $database);

$sql1 = "select tb_usb_publicaciones.id_publicacion, tb_usb_profesores.avatar, tb_usb_profesores.nombre, tb_usb_publicaciones.fecha, tb_usb_publicaciones.titulo, tb_usb_publicaciones.descripcion, tb_usb_materia.nombre, tb_usb_programas.nombre, tb_usb_semestre.nombre

FROM tb_usb_publicaciones

INNER JOIN tb_usb_profesores ON tb_usb_publicaciones.id_profesor = tb_usb_profesores.id_profesor
INNER JOIN tb_usb_materia ON tb_usb_publicaciones.id_materia = tb_usb_materia.id_materia
INNER JOIN tb_usb_programas ON tb_usb_materia.id_programa = tb_usb_programas.id_programa
INNER JOIN tb_usb_semestre ON tb_usb_publicaciones.id_semestre = tb_usb_semestre.id_semestre";

if($consulta->tam >= 1){
    //$sql2 = " WHERE tb_usb_publicaciones.id_profesor = ".$consulta->Profesores[0]."";

    $sql2 = " WHERE ";

    // SEMESTRES

    for($i = 0; $i < count($consulta->Semestres); $i++){

        if($i == 0 &&  $sql2 != " WHERE "){
            $sql2 = $sql2." and ";
        }

        if($i == 0){
            $sql2 = $sql2." ( ";
        }

        $sql2 = $sql2."tb_usb_publicaciones.id_semestre = ".$consulta->Semestres[$i]." ";

        if(count($consulta->Semestres) >= 2){
            if($i < count($consulta->Semestres)-1){
                $sql2 = $sql2." or ";
            }
        }

        if($i == count($consulta->Semestres)-1){
            $sql2 = $sql2." ) ";
        }
    };

    // CARRERAS

    for($i = 0; $i < count($consulta->Carreras); $i++){

        if($i == 0 &&  $sql2 != " WHERE "){
            $sql2 = $sql2." and ";
        }

        if($i == 0){
            $sql2 = $sql2." ( ";
        }

        $sql2 = $sql2."tb_usb_programas.id_programa = ".$consulta->Carreras[$i]." ";

        if(count($consulta->Carreras) >= 2){
            if($i < count($consulta->Carreras)-1){
                $sql2 = $sql2." or ";
            }
        }

        if($i == count($consulta->Carreras)-1){
            $sql2 = $sql2." ) ";
        }
    };

    // PROFESORES

    for($i = 0; $i < count($consulta->Profesores); $i++){

        if($i == 0 &&  $sql2 != " WHERE "){
            $sql2 = $sql2." and ";
        }

        if($i == 0){
            $sql2 = $sql2." ( ";
        }

        $sql2 = $sql2."tb_usb_publicaciones.id_profesor = ".$consulta->Profesores[$i]." ";

        if(count($consulta->Profesores) >= 2){
            if($i < count($consulta->Profesores)-1){
                $sql2 = $sql2." or ";
            }
        }

        if($i == count($consulta->Profesores)-1){
            $sql2 = $sql2." ) ";
        }
    };

    // MATERIAS

    for($i = 0; $i < count($consulta->Materias); $i++){

        if($i == 0 &&  $sql2 != " WHERE "){
            $sql2 = $sql2." and ";
        }

        if($i == 0){
            $sql2 = $sql2." ( ";
        }

        $sql2 = $sql2."tb_usb_publicaciones.id_materia = ".$consulta->Materias[$i]." ";

        if(count($consulta->Materias) >= 2){
            if($i < count($consulta->Materias)-1){
                $sql2 = $sql2." or ";
            }
        }

        if($i == count($consulta->Materias)-1){
            $sql2 = $sql2." ) ";
        }
    };

}else{
    $sql2 = "";
}

$sql3 = " ORDER BY tb_usb_publicaciones.id_publicacion DESC;";

$sql = $sql1.$sql2.$sql3;

$res = mysqli_query($conn, $sql);

$json = array();

if(isset($res)){
    $nums = $res->num_rows;
    array_push($json,$nums);
} else {
    $nums = 0;
}



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
    $arr["documentos"] = array();

    $sql2 = "select tipo, nombre , ruta
            FROM tb_usb_documentos
            WHERE id_publicacion = ". $arr["id"] .";";

    $res_docs = mysqli_query($conn, $sql2);

    while($fila_docs = mysqli_fetch_row($res_docs)){
        $arr_docs = array(
            "tipo" => utf8_encode($fila_docs[0]),
            "nombre" => utf8_encode($fila_docs[1]),
            "ruta" => utf8_encode($fila_docs[2])
        );

        array_push($arr["documentos"],$arr_docs);
    }


    array_push($json,$arr);
}

if($nums >= 1){
    echo json_encode($json);
} else {
    echo json_encode($nums);
}

// echo json_encode($sql);


?>