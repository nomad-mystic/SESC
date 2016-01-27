<?php


$args = array( 'post_type' => 'resources_post', 'posts_per_page' => 10 );
$loop = new WP_Query( $args );
while ( $loop->have_posts() ) : $loop->the_post();
  the_title();
  echo '<div class="entry-content testing-archives">';
  the_content();
  echo '</div>';
endwhile;


?>