<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8" />
<meta name="keywords" content="nerdfighters, Foundation to Decrease Worldsuck, world cup, fundraiser" />
<meta name="description" content="Vote for which team you want Hank and John to root for!" />
<title>World Cup Fundraiser</title>
<script src="//use.typekit.net/kdq7fvv.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<style type="text/css">
<!--
body {
	background-color: #317F33;
	margin: 0;
	min-width: 1000px;
}

p {
	text-align: center;
	font-family: "garamond-premier-pro-caption", serif;
	font-size: 22px;
	color: #FFF;
	margin: 0;
}

#header {
	display: block;
	margin: 35px auto;
}

#topdiv {
	margin: 45px 0 0 0;
	border-top: 3px solid #153615;
}

.evenrows {
	width: auto;
}

.oddrows {
	width: auto;
	background-color: #266227;
}

.container {
	margin: 0 auto;
	width: 1000px;
}

.country {
	padding: 30px 15px 20px 15px;
	width: 220px;
	margin: 0px;
	display: inline-block;
}

.flag {
	display: block;
	margin: 15px auto;
	height: 50px;
	-webkit-box-shadow:  0px 0px 5px 0px #000;
        box-shadow:  0px 0px 5px 0px #000;
}

form {
	display: block;
	padding-top: 5px;
}

.button {
	display: block;
	margin: 0 auto;
}
-->
</style>
</head>
<body>
<img src="./pickourteam.png" id="header" alt="Pick Our Team!">
<p>jfldksjfldasfjVote for which team in the FIFA World Cup you want Hank and John<br>
to support by donating to the Foundation to Decrease Worldsuck.<br><br>
<b>One Dollar, One Vote</b></p>
<?php
$user = "fightwor_user";
$password = "3i2.aF@4^C([";
$database = "fightwor_ldsuck";

//Memcached caching code
$memcache = new Memcache;
$memcache->connect('localhost', 11211);

$page = $memcache->get('worldsuck.pickourteam.core');

if ( !$page ){
    //Only connect if the cache is empty
    $con = mysqli_connect("localhost",$user,$password,$database);
    
    if (mysqli_connect_errno($con)) {
    	echo "An error occured, please try again soon.";
    } else {
        echo "<!-- from db -->";
        
        //Use output buffering to cache the HTML
        ob_start();
        
        for($row = 0; $row < 8; $row++) {
        	echo '<div ';
        	if($row == 0){echo 'id="topdiv" ';}
        	if($row % 2 == 0){echo 'class="oddrows">';}
        	else{echo 'class="evenrows">';}

        	echo "\n".'<div class="container">';
        	for($col = 0; $col < 4; $col++) {
        		$result = mysqli_fetch_assoc(mysqli_query($con, "SELECT * FROM countries WHERE `pos`=" . (4 * $row + $col)));
        		echo '<div class="country">';
        		echo "\n".'<p><b>'.$result['country'].'</b><br>$'.number_format($result['amount_donated']).' Donated</p><img src="./flags/'.$result['country'].'.png" class="flag" alt="'.$result['country'].'">';
        		echo "\n".'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">';
        		echo "\n".'<input type="hidden" name="cmd" value="_s-xclick">';
        		echo "\n".'<input type="hidden" name="hosted_button_id" value="'.$result['hosted_button_id'].'">';
        		echo "\n".'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" class="button">';
        		echo "\n".'<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
        		echo "\n".'</div>';
        	}
        	echo "\n".'</div>'."\n".'</div>';
        }
        mysqli_close($con);
        
        //Read the contents of the output buffer
        $page = ob_get_contents();
        
        //Flush the buffer to browser
        ob_flush();
        
        //Cache for 5 mins
        $memcache->set('worldsuck.pickourteam.core', $page, null, 60*5);
    }
} else {
    echo "<!-- from cache -->";
    //We got the data from cache, just echo it
    echo $page;
}
?>
</body>
</html>
