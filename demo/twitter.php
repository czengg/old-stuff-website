<?php
    function buildBaseString($baseURI, $method, $params) {
        $r = array();
        ksort($params);
        foreach($params as $key=>$value){
            $r[] = "$key=" . rawurlencode($value);
        }
        return $method."&" . rawurlencode($baseURI) . '&' . rawurlencode(implode('&', $r));
    }

    function buildAuthorizationHeader($oauth) {
        $r = 'Authorization: OAuth ';
        $values = array();
        foreach($oauth as $key=>$value)
            $values[] = "$key=\"" . rawurlencode($value) . "\"";
        $r .= implode(', ', $values);
        return $r;
    }

    $url = "https://api.twitter.com/1.1/trends/place.json";

    $oauth_access_token = "620702285-8fOlvzBlfgNcULqmIze4E13iZCZpavcNTnwtbJK7";
    $oauth_access_token_secret = "8wJIsIpo5jBQ2D5Cq6B5GpzQPoIQY0R5M9CKuWBIEtoxI";
    $consumer_key = "uwJ5oyp2DXE7hoDCw4nvv9bKc";
    $consumer_secret = "6T5d4A81ieb8qvrA9WoSFs1z8acaolDSeNTZ5JAYV05av4nZd9";
    $id = $_REQUEST['id'];

    $oauth = array(
           'id' => $id,
           'oauth_consumer_key' => $consumer_key,
           'oauth_nonce' => time(),
           'oauth_signature_method' => 'HMAC-SHA1',
           'oauth_token' => $oauth_access_token,
           'oauth_timestamp' => time(),
           'oauth_version' => '1.0'
         );

    $base_info = buildBaseString($url, 'GET', $oauth);
    $composite_key = rawurlencode($consumer_secret) . '&' . rawurlencode($oauth_access_token_secret);
    $oauth_signature = base64_encode(hash_hmac('sha1', $base_info, $composite_key, true));
    $oauth['oauth_signature'] = $oauth_signature;

    // Make requests
    $header = array(buildAuthorizationHeader($oauth), 'Expect:');
    $options = array( CURLOPT_HTTPHEADER => $header,
                      CURLOPT_HEADER => false,
                      CURLOPT_URL => $url . "?id=$id",
                      CURLOPT_RETURNTRANSFER => true,
                      CURLOPT_SSL_VERIFYPEER => false);

    $feed = curl_init();
    curl_setopt_array($feed, $options);
    $json = curl_exec($feed);
    curl_close($feed);
    print $json;
    return $json;
