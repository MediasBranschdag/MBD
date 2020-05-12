<?php
    include_once "devConfig.php";

    $mailContent = $_POST;

    $to = "branschdag@medieteknik.com";

	$subject = $mailContent['subject'];
    $message = $mailContent['message'];

    $headers = "From: notifikation@branschdag.com";
	if( mail($to,$subject,$message,$headers) ){
        echo true;
    }
    else{
        throw new Exception('Could not send mail');
    }

?>