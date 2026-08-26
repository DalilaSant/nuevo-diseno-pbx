<?php
header('Content-Type: application/json');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$response = $_POST['g-recaptcha-response'] ?? '';

if (empty($response)){
    echo json_encode(['success' => false, 'message' => 'Por favor, complete el recaptcha de Seguridad']);
    exit;
}

if (
    isset($_POST['nombre']) &&
    isset($_POST['correo']) &&
    isset($_POST['empresa']) &&
    isset($_POST['telefono']) &&
    isset($_POST['asesor']) &&
    isset($_POST['mensaje']) 
){
    $nombre =trim($_POST['nombre']);
    $correo =trim($_POST['correo']);
    $empresa =trim($_POST['empresa']);
    $telefono =trim($_POST['telefono']);
    $asesor =trim($_POST['asesor']);
    $mensaje =trim($_POST['mensaje']);

    $cuerpoCorreo = "Nombre: " . $nombre . "\n"
                 . "Correo: " . $correo . "\n"
                 . "Empresa: " . $empresa . "\n"
                 . "Telefono: " . $telefono . "\n"
                 . "Asesor: " . $asesor . "\n\n"
                 . "Mensaje:\n" . $mensaje ;

   $secret = '';
   $url = "https://www.google.com/recaptcha/api/siteverify";
   
   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $url);
   curl_setopt($ch, CURLOPT_POST, 1);
   curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'secret' => $secret,
    'response' => $response
   ]));
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   $result = curl_exec($ch);
   curl_close($ch);

   $resultJson = json_decode($result);

// TOKEN SIMULADO PARA PRUEBAS
// $resultJson = (object)[
//     'success' => true,
//     'score'   => 0.9
// ];
//

   if ($resultJson->success && $resultJson->score >= 0.5) {
        $to = 'dalila191997@gmail.com';
        $subject = 'Nuevo mensaje de contacto Pbx: ' . $empresa;

        $headers = "From: no-reply@pbxhosting.com\r\n" .
                   "Reply-to: ".$correo."\r\n" .
                   "X-Mailer: PHP/" . phpversion();
        
        $mail = mail($to, $subject, $cuerpoCorreo, $headers);
        
        if ($mail){
          echo json_encode(['success' => true, 'message' => '¡Formulario enviado con éxito!']);
        }else{
          echo json_encode(['success' => false, 'message' => 'Ocurrió un error en el servidor al enviar el correo.']);
        }         
   } else {
        echo json_encode(['success' => false, 'message' => 'Validación de seguridad incorrecta o sospecha de bot/spam.']);
   }

} else {
  echo json_encode(['success' => false, 'message' => 'Llene todos los campos obligatorios para continuar.']);
}

exit;
?>
   
