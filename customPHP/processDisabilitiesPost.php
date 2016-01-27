<?php
/**
 * Created by PhpStorm.
 * User: Nomad_Mystic
 * Date: 1/26/2016
 * Time: 5:33 PM
 */



//$page_href = $_GET['pageHref'];
//$page_href = 'pageHref';
//var_dump($page_href);

function pageCreation()
{
     $testing_text = '<p>Testing Paragraph</p>';
     $category_name = 'traumatic-brain-injury-post';

     if (have_posts()) {
          $count = 0;
          while (have_posts()) {
               the_post();
               $count++;
               woo_get_template_part('content', 'page'); // Get the page content template file, contextually.
          }
     }
     // WP_Query arguments
     $args = array(
          'post_type'              => array('resources_post'),
          'category_name'          => $category_name,
          'order'                  => 'ASC',
          'orderby'                => 'title',
          'posts_per_page'         =>  '-1'
     );


     function buildPosts()
     {
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
          }

     }
     return $testing_text;
}

$testing_text = pageCreation();

echo json_encode($testing_text);