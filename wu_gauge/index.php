<html>


<head>




<title>Weather Underground Style Wind Gauge</title>


<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name = "viewport" content = "width=device-width,initial-scale = 1.0, user-scalable = no">




<script src="js/jquery.min.js"></script>

<script src="js/scripts-wu-gauge.js"></script>

<link rel="stylesheet" href="css/styles-wu-gauge.css" type="text/css">






<style type="text/css">




/* position it on the page (not necessary) */
#windCircle {

	margin-left: auto;
	margin-right: auto;
	margin-top: 200px;

	text-align: middle;

}


</style>


<body>


<div id="container">


	<!-- insert this wherever you want your wind circle -->
	<div id="windCircle">
		<img id="windCircleGraphic" src='images/circle-off.png' width=100>
		<div id="windCircleSpeed" class="highlight"></div>
		<div id="windCircleCompassLabel">N</div>
		<div id="windCircleSummary"></div>
	</div>


</div>	

</html>