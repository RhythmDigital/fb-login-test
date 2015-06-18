<!DOCTYPE html>
<!--[if lt IE 9]><html class="lt-ie9"><![endif]-->
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo SITE_TITLE; ?></title>

	<link rel="stylesheet" href="assets/css/reset.css?v<?php echo SCRIPT_VERSION; ?>">
	<link rel="stylesheet" href="assets/css/fonts.css?v<?php echo SCRIPT_VERSION; ?>">
	<link rel="stylesheet" href="assets/css/main.css?v<?php echo SCRIPT_VERSION; ?>">

	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

	<script>

	</script>

</head>

<body>

<!--
  Below we include the Login Button social plugin. This button uses
  the JavaScript SDK to present a graphical Login button that triggers
  the FB.login() function when clicked.
-->

<a id="login-button" href="javascript:;" class="button">Log in</a>
<a id="logout-button" href="javascript:;" class="button">Log out</a>

<div id="status">
</div>

<div class="app-display">
	<a id="get-me-button" href="javascript:;" class="button">Ooh, Get me</a>
</div>


<!-- libs -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.8/TweenMax.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>


<?php
if(ENVIRONMENT != 'production') :
	/**
	 * DEVELOPMENT JS
	 */
	?>
	<script data-main="<?php echo base_url('assets/js/src/Init.js?v='.SCRIPT_VERSION);?>" src="<?php echo base_url('assets/js/require.js?v='.SCRIPT_VERSION);?>"></script>
<?php
else :
/**
 * PRODUCTION JS
 */
?>
	<script data-main="<?php echo base_url('assets/js/build/main.min.js?v='.SCRIPT_VERSION);?>" src="<?php echo base_url('assets/js/require.js?v='.SCRIPT_VERSION);?>">
		// 'assets/js/build.min.js?v'.SCRIPT_VERSION
	</script>

<?php
endif;
?>
</body>
</html>