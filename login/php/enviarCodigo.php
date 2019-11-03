<?php

$rnd = rand(1000, 9999);

$correo = json_decode(file_get_contents('php://input'));

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

/*

require_once('phpmailer2/PHPMailer.php');
require_once('phpmailer2/SMTP.php');

// Load Composer's autoloader

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(false);

    //Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'tecnologias.usb.bog2019@gmail.com';                     // SMTP username
    $mail->Password   = 'Tecnologiasusbbog';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 25;                                    // TCP port to connect to
    $mail->CharSet = 'UTF-8';

    //Recipients
    $mail->setFrom('tecnologias.usb.bog2019@gmail.com', 'Repositorio Web Institucional');
    $mail->addAddress($correo->correo); 

    // Attachments

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Código de acceso';
    $mail->Body    = $msg;
    $mail->AltBody = 'Su Código de acceso al repositorio es: '.$rnd;

    $send = $mail->send();

$json = [
  "envio"  => $send,
  "accesKey" => $rnd,
];

echo json_encode($json);

*/

require_once("SendGrid/sendgrid-php.php");

$from = new SendGrid\Email("Repositorio Web Institucional", "repositorioweb@academia.usbbog.edu.co");
$subject = "Código de acceso";
$to = new SendGrid\Email(null, $correo->correo);
$content = new SendGrid\Content("text/html", $msg);
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);

$json = [
  "envio"  => $response->statusCode(),
  "accesKey" => $rnd,
];

echo json_encode($json);

?>
