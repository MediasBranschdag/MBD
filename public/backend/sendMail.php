<?php
    include_once "devConfig.php";

    $mailContent = $_POST;

    $to = "foretag@nlg.medieteknik.com";

    $subject = $mailContent['subject'];
    $comapanyName = $mailContent['companyName'];
    $contactPerson = $mailContent['contactPerson'];
    $senderMail = $mailContent['email'];

    $message = 
    "Från företaget: " . $comapanyName . "\n"
    . "Kontaktperson: " . $contactPerson . "\n\n"
    . "Kontaktas via: " . $senderMail . "\n\n"
    . "Meddelande:" . "\n" . $mailContent['message'];

    $headers = "webb@nlg.medieteknik.com"; //Has to be a valid end existing email to work
	if( mail($to,$subject,$message,$headers) ){
        echo true;
    }
    else{
        throw new Exception('Could not send mail');
    }