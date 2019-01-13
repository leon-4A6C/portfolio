<?php

$to      = 'leon3110l@gmail.com';
$subject = 'site mail';
$message = "name: $_POST[name]\r\nproject: $_POST[project]\r\nemail: $_POST[email]\r\nphone: $_POST[phone]";
$message = wordwrap($message, 70, "\r\n");
$headers = array(
    'From' => 'info@leonintveld.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers);