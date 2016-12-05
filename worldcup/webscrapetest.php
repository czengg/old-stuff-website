<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8" />
<meta name="keywords" content="nerdfighters, Foundation to Decrease Worldsuck, world cup, fundraiser" />
<meta name="description" content="Vote for which team you want Hank and John to root for!" />
<title>World Cup Fundraiser</title>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//use.typekit.net/kdq7fvv.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<link rel="stylesheet" type="text/css" href="stylesheets/styles.css">
<link href='http://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' type='text/css'>
</head>

<body>
<img src="./pickourteam.png" id="header" alt="Pick Our Team!">
<p>Vote for which team in the FIFA World Cup you want Hank and John<br>
to support by donating to the Foundation to Decrease Worldsuck.<br><br>
<b>One Dollar, One Vote</b></p>

<div id="topnav" class="nav">
        <ul>
            <li id="standing">
                <a href="">TEAM STANDINGS</a>
            </li>
            <li id="matches" class="selected">
                <a href="">UPCOMING MATCHES</a>
            </li>
        </ul>
    </div>

    <div id="groupnav" class="nav">
        <ul id="groupnavlist">
            <li>
                <img id="groupa-img" class="groupimg show" src="images/soccer-ball.png">
                <p id="groupa" class="nav-group active">GROUP A</p>
            </li>
            <li>
                <img id="groupb-img" class="groupimg" src="images/soccer-ball.png">
                <p id="groupb" class="nav-group">GROUP B</p>
            </li>
            <li>
                <img id="groupc-img" class="groupimg" src="images/soccer-ball.png">
                <p id="groupc" class="nav-group">GROUP C</p>
            </li>
            <li>
                <img id="groupd-img" class="groupimg" src="images/soccer-ball.png">
                <p id="groupd" class="nav-group">GROUP D</p>
            </li>
            <li>
                <img id="groupe-img" class="groupimg" src="images/soccer-ball.png">
                <p id="groupe" class="nav-group">GROUP E</p>
            </li>
            <li>
                <img id="groupf-img" class="groupimg" src="images/soccer-ball.png">
                <p id="groupf" class="nav-group">GROUP F</p>
            </li>
            <li>
                <img id="groupg-img" class="groupimg" src="images/soccer-ball.png">
                <p id="groupg" class="nav-group">GROUP G</p>
            </li>
            <li>
                <img id="grouph-img" class="groupimg" src="images/soccer-ball.png">
                <p id="grouph" class="nav-group">GROUP H</p>
            </li>
            <span id="stretch"></span>
        </ul>
    </div>

<?php
$html = file_get_contents('http://www.fifa.com/worldcup/matches/'); //get the html returned from the following url

$fifa_doc = new DOMDocument();

libxml_use_internal_errors(TRUE); //disable libxml errors

if(!empty($html)){ //if any html is actually returned

  $fifa_doc->loadHTML($html);
  libxml_clear_errors(); //remove errors for yucky html
  
  //array of match dates
  $group_stage = array("20140612",
		       "20140613",
		       "20140614",
                       "20140615",
                       "20140616",
                       "20140617",
                       "20140618",
                       "20140619",
                       "20140620",
                       "20140621",
                       "20140622",
                       "20140623",
                       "20140624",
                       "20140625",
                       "20140626");
  $second_stage = array("20140628",
                        "20140629",
                        "20140630",
                        "20140701",
                        "20140704",
                        "20140705",
                        "20140708",
                        "20140709",
                        "20140712",
                        "20140713");

  $fifa_xpath = new DOMXPath($fifa_doc);  

  foreach ($group_stage as $match_date) {
    //$home = $fifa_xpath->query('//div[@id="'.$match_date.'"]//span[contains(@class,"t home")]//span[contains(@class,"t-ntext")]');
    //$away = $fifa_xpath->query('//div[@id="'.$match_date.'"]//span[contains(@class,"t away")]//span[contains(@class,"t-ntext")]');
    $home = $fifa_xpath->query('//div[@id="'.$match_date.'"]/div[contains(@class,"clear-grid")]/div[contains(@class,"fixture")]/div[contains(@class,"mu-m")]/div[contains(@class,"home")]/div[contains(@class,"t-n")]/span[contains(@class,"t-nText")]'); 
    $away = $fifa_xpath->query('//div[@id="'.$match_date.'"]/div[contains(@class,"clear-grid")]/div[contains(@class,"fixture")]/div    [contains(@class,"mu-m")]/div[contains(@class,"away")]/div[contains(@class,"t-n")]/span[contains(@class,"t-nText")]');

    echo "here";
    echo $home->nodeValue . '<br/>';
    echo $away->nodeValue . '<br/>';

    if($home->length > 0){
      foreach($home as $row){
	echo "try here <br/>";
        echo $row->nodeValue . '<br/>';
      }
    }

    if($away->length > 0){
        foreach($away as $row){
	  echo "or here <br/>";
          echo $row->nodeValue . '<br/>';
        } 
     }

  }
}
?>

</body>
</html>

