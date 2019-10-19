<?php

$server = 'localhost';
$username = 'root';
$password = '';
$database = 'repositoriousbbog';


  $conn = new mysqli($server,$database, $username, $password);

//echo '<script language="javascript">alert("Conexion realizada");</script>';

/*

   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', '');
   define('DB_DATABASE', 'repositoriousbbog');
   $conn = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
*/
?>