<?php

if (isset($_POST['submit'])) {
$name = $_POST['name']:
$subject = $_POST['subject'];
$visitor_email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$email_from = 'margarito.pineda.jr@gmail.com';
$email_subject = "New Form Submission($subject)"
$email_body = "User Name: $name.\n".
    "User Subject: $subject.\n".
    "User Email: $visitor_email.\n".
    "User Phone: $phone.\n".
    "User Message: $message.\n";

$to = "margarito.pineda.jr@gmail.com";
$headers = "From: $email_from \r\n";
$header .= "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");
}
?>