<?php

$consulta = json_decode(file_get_contents('php://input'));

$server = 'localhost:3309';
$username = 'root';
$password = '';
$database = 'repositoriousbbog';

$conn = new mysqli($server, $username, $password, $database);

$consultas = array();
$names = array('Semestres', 'Carreras', 'Profesores','Materias');
$colors = array('bgSemestre', 'bgCarrera', 'bgProfesor', 'bgMateria');

array_push($consultas, "select * FROM tb_usb_semestre ORDER BY id_semestre DESC;");
array_push($consultas, "select * FROM tb_usb_programas ORDER BY id_programa DESC;");
array_push($consultas, "select * FROM tb_usb_profesores ORDER BY id_profesor DESC;");
array_push($consultas, "select * FROM tb_usb_materia ORDER BY id_materia DESC;");

// $consultas[] = "";
// $consultas[] = "";
// $consultas[] = "";

$json = array();

for($i = 0; $i < count($consultas); $i++){

    $arr = [
        "filtro" => [
            "tam",
            "color",
            "name",
            "checks" => []
        ]
    ];
    
    
    $chk = [
        "checkID",
        "checkText"
    ];

    $consulta = $consultas[$i];
    $query = mysqli_query($conn, $consulta);

    $arr["filtro"]["tam"] = $query->num_rows;
    $arr["filtro"]["color"] = $colors[$i];
    $arr["filtro"]["name"] = $names[$i];

    while($fila = mysqli_fetch_row($query)){
        $chk["checkID"] = $fila[0];
        $chk["checkText"] = utf8_encode($fila[1]);
        array_push($arr["filtro"]["checks"], $chk);
    }

    array_push($json, $arr);
}


echo json_encode($json);

?>