<?php

/**
 * @package WooFramework
 * @subpackage Template
 */

global $woo_options, $wp_query;
get_header();
$page_template = woo_get_page_template();

?>
     <!-- #content Starts -->
<?php woo_content_before(); ?>

<?php if ((isset($woo_options['woo_slider_biz'] ) && 'true' == $woo_options['woo_slider_biz'] ) && ( isset( $woo_options['woo_slider_biz_full'] ) && 'true' == $woo_options['woo_slider_biz_full'] ) ) { $saved = $wp_query; woo_slider_biz(); $wp_query = $saved; } ?>



<?php woo_main_before(); ?>
<?php woo_main_after(); ?>
<?php woo_content_after(); ?>
<?php get_footer(); ?>


<?php
function pageCreation()
{
//     get_header();
     $category_name = $_GET['pageHref'];
//     $testing_text = '<p>Testing Paragraph</p>';
//     $category_name = $page_href;
     $output = [];
     // WP_Query arguments
     $args = array(
          'post_type'              => array('resources_post'),
          'category_name'          => $category_name,
          'order'                  => 'ASC',
          'orderby'                => 'title',
          'posts_per_page'         =>  '-1'
     );
     // The Query
     $query = new wp_query($args);
     // The Loop
     if ($query->have_posts()) {
          while ($query->have_posts()) {
               $query->the_post();
               $individual_post = '';
               $individual_post .= '<div class="entry-content">';
               $individual_post .= the_content();
               $individual_post .= '</div>';
               array_push($output, $individual_post);
          }
     }
     return 'Testing string';
}

$testing_text = pageCreation();

echo json_encode($testing_text);
?>