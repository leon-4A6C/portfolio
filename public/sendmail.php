<?php

require "config.php";

$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=". RECAPTCHA_KEY ."&response=".$_POST["g-recaptcha-response"]."&remoteip=".$_SERVER['REMOTE_ADDR']);
$obj = json_decode($response);

if($obj->success == true) {
    $to      = 'leon3110l@gmail.com';
    $subject = 'site mail';
    $message = "name: $_POST[name]\r\nproject: $_POST[project]\r\nemail: $_POST[email]\r\nphone: $_POST[phone]";
    $message = wordwrap($message, 70, "\r\n");

    mail($to, $subject, $message);
} else {
    http_response_code(500);
}