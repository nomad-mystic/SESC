<?php
/**
 * Template Name: custom-post-intellectual-disabilities
 *
 * The business page template displays your posts with a "business"-style
 * content slider at the top.
 *
 * @package WooFramework
 * @subpackage Template
 */
global $woo_options, $wp_query;
get_header();

$page_template = woo_get_page_template();
?>
 <!-- #content Starts -->
	<?php woo_content_before(); ?>
	<?php if ( ( isset( $woo_options['woo_slider_biz'] ) && 'true' == $woo_options['woo_slider_biz'] ) && ( isset( $woo_options['woo_slider_biz_full'] ) && 'true' == $woo_options['woo_slider_biz_full'] ) ) { $saved = $wp_query; woo_slider_biz(); $wp_query = $saved; } ?>
    <div id="content" class="col-full business">

    	<div id="main-sidebar-container">

            <!-- #main Starts -->
            <?php woo_main_before(); ?>

	<?php if ( ( isset( $woo_options['woo_slider_biz'] ) && 'true' == $woo_options['woo_slider_biz'] ) && ( isset( $woo_options['woo_slider_biz_full'] ) && 'false' == $woo_options['woo_slider_biz_full'] ) ) { $saved = $wp_query; woo_slider_biz(); $wp_query = $saved; } ?>

            <section id="main"  class="resourcePostPage intellectual-disabilities-post-page">
    <h2><?php echo get_the_title($ID); ?></h2>
    &nbsp;
<?php
	woo_loop_before();
		
		if (have_posts()) { $count = 0;
			while (have_posts()) { the_post(); $count++;
				woo_get_template_part('content', 'page'); // Get the page content template file, contextually.
			}
		}
		// WP_Query arguments
		$args = array(
			'post_type'              => array('resources_post'),
			'category_name'          => 'intellectual-disabilities-post',
			'order'                  => 'ASC',
			'orderby'                => 'title',
			'posts_per_page'         =>  '-1'
		);
		// The Query
		$query = new WP_Query($args);

		// The Loop
		if ($query->have_posts()) {
			while ($query->have_posts()) {
				$query->the_post();
				echo '<div class="entry-content">';
		  		the_content();
 		  		echo '</div>';
			}
		} else {
			// no posts found
		}
		// Restore original Post Data
		wp_reset_postdata();
	woo_loop_after();
?>
            </section><!-- /#main -->
            <?php woo_main_after(); ?>

			<?php get_sidebar(); ?>

		</div><!-- /#main-sidebar-container -->
		<!---Added by nomad for widget area-->
		<?php if (is_active_sidebar('resource_page')) : ?>
			<aside id="resourceSidebarNav" class="primary-sidebar widget-area leftColNav" role="complementary">
				<?php dynamic_sidebar('resource_page'); ?>
			</aside><!-- #primary-sidebar -->
		<?php endif; ?>

    </div><!-- /#content -->
	<?php woo_content_after(); ?>

<?php get_footer(); ?>