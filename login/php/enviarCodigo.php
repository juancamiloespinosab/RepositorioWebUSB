<?php

$rnd = rand(1000, 9999);

$correo = json_decode(file_get_contents('php://input'));

$correo_destinatario = $correo->correo;
$nombre_remitente = "Repositorio Web USB";
$correo_remitente = "tecnologias.usb.bog2019@gmail.com";
$asunto = "Código de acceso: Repositorio Web Institucional";
$mensaje = "<style>@import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700|Open+Sans:400,600,700,800&display=swap');* {margin: 0; padding: 0;}.cont{border-radius: 20px; color: white; text-align: center; background: #0088B3;}.titulos1{border-top-left-radius: 20px; border-top-right-radius: 20px; padding-top: 20px; font-family: 'Crimson Text', serif; background: #008057; text-align: center; color: white; font-weight: 700; font-size: 200%;}.titulos2{font-family: 'Open Sans', sans-serif; background: #008057; text-align: center; padding: 5px; color: white; font-weight: 700; font-size: 150%;}</style><div class='cont'><h1 class='titulos1'>Universidad de San Buenaventura - Bogotá</h1><h1 class='titulos2'>Repositorio Web Institucional</h1><br><p>Su Código de acceso al repositorio es el siguiente:<p><br><h2>".$rnd."</h2><br></div>";

/* Hacemos uso de mb_encode_mimeheader para codificar correctamente caracteres especiales */
$headers = 'From: "' . mb_encode_mimeheader($nombre_remitente) . '" <' . $correo_remitente . ">\r\n"
  . 'Reply-To: ' . $correo_remitente . "\r\n"
  . 'X-Mailer: PHP/' . phpversion() . "\r\n";
function mailutf8(
  $correo_destinatario,
  $asunto = "(Sin Asunto)",
  $mensaje = "",
  $header = ""
) {
  /* Estas son las cabeceras básicas para el envío de UTF-8 usando codificación de 8 bits */
  $header_on = "MIME-Version: 1.0\r\nContent-type: text/html; charset=\"UTF-8\"\r\nContent-Transfer-Encoding: 8bit\r\n";
  return mail(
    $correo_destinatario,
    mb_encode_mimeheader($asunto),
    $mensaje,
    $header_on . $header
  );
}
/* Enviamos el correo y mostramos un mensaje dependiendo de la salida de la función mail */
$send = mailutf8($correo_destinatario, $asunto , $mensaje, $headers);

$json = array(
    "envio"  => $send,
    "accesKey" => $rnd,
);

echo json_encode($json);

?>