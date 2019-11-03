<?php

$rnd = rand(1000, 9999);

$correo = json_decode(file_get_contents('php://input'));

require_once('PHPMailer/config.php');

$mail->AddAddress($correo->correo);

$mail->IsHTML(true);
$mail->Subject = 'Código de acceso';


$msg = "
<style>
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700|Open+Sans:400,600,700,800&display=swap');
  * {margin: 0; padding: 0;}

  .cont {
    border-radius: 20px;
    color: white;
    text-align: center;
    background: #0088B3;
  }

  .img {
    height: 100px;
    width: 50px;
  }

  .titulos1 {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 20px; font-family: 'Crimson Text', serif;
    background: #008057;
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 150%;
  }

  .titulos2 {
    font-family: 'Open Sans', sans-serif;
    background: #008057;
    text-align: center;
    padding: 5px;
    color: white;
    font-weight: 700;
    font-size: 120%;
  }
</style>

<div class='cont'>
  <!--<img class='img' src='https://www.usbbog.edu.co/wp-content/uploads/2018/07/universidad_blason.png'>-->
  <h1 class='titulos1'>Universidad de San Buenaventura</h1>
  <h1 class='titulos2'>Bogotá D.C.</h1>
  <br>
  <p>Su código de acceso al repositorio es el siguiente:<p><br><h2>".$rnd."</h2><br>
</div>";

$mail->Body = $msg;
$send = $mail->Send();

$json = array(
    "envio"  => $send,
    "accesKey" => $rnd,
);

echo json_encode('a');

?>
