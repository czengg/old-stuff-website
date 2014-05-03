<?php

//CONNECT TO THE DATABASE
	$DB_NAME = 'thevagaband';
	$DB_HOST = 'thevagaband.db.10477243.hostedresource.com';
	$DB_USER = 'thevagaband';
	$DB_PASS = 'Vagaband67!';
	
	$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
	
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
echo "hi!";
// A QUICK QUERY ON A FAKE USER TABLE
	$query = "SELECT * FROM `users` WHERE `status`='bonkers'";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

// GOING THROUGH THE DATA
	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			echo stripslashes($row['username']);	
		}
	}
	else {
		echo 'NO RESULTS';	
	}
// CLOSE CONNECTION
	mysqli_close($mysqli);
	

?>
