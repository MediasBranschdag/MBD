<?php

    //$access_token = "260572790.4b60dde.cd792e4418a149008c21bfe67fc28951"; // emil
    $access_token = "3254827429.a11a3fa.df05ebc0ed3247b3bc97ae2c3cdc71b4"; //MBD16

    function callInstagram($url){
		$ch = curl_init();
        // php compatible with version 4.0.2
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,TRUE);
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);
        curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,2);

		$result = curl_exec($ch);
		curl_close($ch);
		return $result;
	}

	$url = 'https://api.instagram.com/v1/users/self/media/recent?access_token='.$access_token;

	$inst_stream = callInstagram($url);
	echo $inst_stream;

?>
