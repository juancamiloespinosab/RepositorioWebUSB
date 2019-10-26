<?php
require_once('conexion.php');
    
    $folder = 'recursos/';
    
    $titulo = $_POST['titulo'];
    $descripcion  = $_POST['descripcion'];
    $img = $_FILES['img']['name'];
    $audio = $_FILES['audio']['name'];
    $pdf = $_FILES['pdf']['name'];
    $video = $_POST['video'];
    $word = $_FILES['word']['name'];
    $id = 0;

    $sql = ("select * from publicaciones");
 
    $registros = mysqli_query($conexion,$sql) or
    die("Problemas con el SELECT => ".mysqli_error($conexion));
    
    $rawdata = array();
    $i = 0;

    while($row = mysqli_fetch_array($registros))
    {
        $rawdata[$i] = $row;
        $i++;
    }
    echo json_encode($rawdata);
//convertir consulta select a un json para devolverlo a JS
  
    //$publicaciones = $registro->fetchAll(PDO::FETCH_OBJ);
    //print_r ($registros);
    //echo json_encode(":D");

    if($titulo != ''){
        move_uploaded_file($_FILES['img']['tmp_name'], "$folder".$_FILES['img']['name']);
        move_uploaded_file($_FILES['pdf']['tmp_name'], "$folder".$_FILES['pdf']['name']);
        move_uploaded_file($_FILES['word']['tmp_name'], "$folder".$_FILES['word']['name']);
        move_uploaded_file($_FILES['audio']['tmp_name'], "$folder".$_FILES['audio']['name']);
 
         $sql = ("insert into publicaciones (id_publicacion,titulo, descripcion, img, pdf, word, audio, video) values
         ('$id','$titulo','$descripcion','$img','$pdf','$word','$audio','$video')");
 
         $resultado = mysqli_query($conexion,$sql) or
         die("problemas en el INSERT => ".mysqli_error($conexion));
 
         // CONSULTA
           
            //echo "<pre>";
               //  print_r($_POST);
             //echo "</pre>";
            // echo "<pre>";
            //     print_r($_FILES);
             //echo "</pre>";
    }
    else {
        //echo json_encode("titulo vacio.");
        //echo (":D");
    }    
?>