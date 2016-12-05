<!DOCTYPE html>
<html>
<meta charset="utf-8" />
<title>How Much?</title>
<?php
$con = mysqli_connect("localhost","fightwor_user","3i2.aF@4^C([","fightwor_ldsuck");
$val = mysqli_fetch_array(mysqli_query($con, 'SELECT SUM(amount_donated) AS total FROM countries'));
mysqli_close($con);
echo "<h1 style=\"text-align: center\">$".number_format($val['total'], 2, '.', ',')." Raised!</h1>\n";
?>
</html>
