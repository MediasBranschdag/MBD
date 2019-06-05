<?php
    $mailContent = json_decode($_GET["mailContent"], TRUE);

    $to = "branschdag@medieteknik.com";

	$subject = $mailContent['subject'];
    $name = $mailContent['name'];
    $senderMail = $mailContent['email'];

    $message = "Från: " . $name . "\n"
    . "Kontaktas via: " . $senderMail . "\n\n"
    . "Meddelande:" . "\n" . $mailContent['message'];

    $headers = "From: notifikation@branschdag.com";

	if( mail($to,$subject,$message,$headers) ){
        echo true;
    }
    else{
        echo false;
    }
?>
