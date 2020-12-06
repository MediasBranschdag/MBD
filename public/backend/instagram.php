<?php
    require_once 'devConfig.php';
    require_once 'instagramConfig.php';

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

	$url = 'https://graph.instagram.com/me/media?fields=id,media_url,caption,thumbnail_url,permalink&access_token='.$INSTAGRAM_ACCESS_TOKEN;

	$inst_stream = callInstagram($url);
	echo $inst_stream;

?> 