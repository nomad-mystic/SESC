<?php
/**
 * Header Template
 *
 * Here we setup all logic and XHTML that is required for the header section of all screens.
 *
 * @package WooFramework
 * @subpackage Template
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php echo esc_attr( get_bloginfo( 'charset' ) ); ?>" />
<title><?php woo_title(); ?></title>
<?php woo_meta(); ?>
<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>" />
<?php wp_head(); ?>
<?php woo_head(); ?>

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-69070026-1', 'auto');
		ga('send', 'pageview');

	</script>
</head>
<body <?php body_class(); ?>>
<div id="fb-root"></div>
<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
<?php woo_top(); ?>
<div id="wrapper">

	<div id="inner-wrapper">

	<?php woo_header_before(); ?>

	<header id="header" class="col-full">
		<div id="nomadHeader">
			<div class="floatLeft headerLogo">
				<img src="http://specialeducationsupportcenter.net/wp-content/uploads/2015/10/takeOneBluePeople_10_5_20151.png" alt="Logo For Special Education Support Center Header area">
			</div>
			
			<div class="floatLeft headerh1">
				<h1>Special Education Support Center</h1>
				<h3>A Washington State Needs Project funded by OSPI in Partnership with the WEA</h3> 
			</div>
			<div class="floatLeft headerSocialMediaLogin">
				<ul>
				    <li><a href="https://twitter.com/wa_sped_center" target="_blank" class="twitterIcon"><span class="fa fa-twitter"></span></a></li>
				    <li><a href="https://www.facebook.com/SpecialEdSupportCenter" target="_blank" class="facebookIcon"><span class="fa fa-facebook-official"></span></a></li>
				    <!-- <li><a href="" target="_blank" class="instagramIcon"><span class="fa fa-instagram fa-2x"></span></a></li>
				    <li><a href="" target="_blank" class="linkedInIcon"><span class="fa  fa-linkedin-square fa-2x"></span></a></li>
				    <li><a href="" target="_blank" class="youTubeIcon"><span class="fa fa-youtube fa-2x"></span></a></li> -->
				</ul>
				<div class="pagesButton">
					<a href="http://specialeducationsupportcenter.org/wp-login.php">Log-in</a>
				</div>
				<?php the_widget('WP_Widget_Search'); ?> 
			</div>
		</div>
	</header>
	<?php woo_header_after(); ?>