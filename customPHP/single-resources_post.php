<?php
/**
 * Template Name: Resources Archive Page 
 *
 * The business page template displays your posts with a "business"-style
 * content slider at the top.
 *
 * @package WooFramework
 * @subpackage Template
 */

$args = array( 'post_type' => 'resources_post', 'posts_per_page' => 10 );
$loop = new WP_Query( $args );
while ( $loop->have_posts() ) : $loop->the_post();
  the_title();
  echo '<div class="entry-content testing-resources">';
  the_content();
  echo '</div>';
endwhile;


?>