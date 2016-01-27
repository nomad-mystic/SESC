<?php
/**
 * Created by PhpStorm.
 * User: Nomad_Mystic
 * Date: 10/23/2015
 * Time: 11:14 PM
 */

?>

<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <title></title>
</head>
<body>

<h3>Recent Posts</h3>
<?php
/// Close but not working with tile and link
//$postslist = get_posts('numberposts=2&order=DESC&orderby=date');
//foreach ($postslist as $post) :
//     setup_postdata($post);
//     ?>
<!--     <div class="entry">-->
<!--          <h3><a href="--><?php //echo get_permalink($ID); ?><!--">--><?php //echo get_the_title($ID); ?><!--</a></h3>-->
<!--          --><?php //the_time(get_option('date_format')) ?>
<!--          --><?php //the_excerpt(); ?>
<!--          <P>--><?php //echo $ID; ?><!--</P>-->
<!--     </div>-->
<?php //endforeach; ?>

<?php
$args = array (
     'post_type'              => array('post'),
     'order'                  => 'ASC',
     'orderby'                => 'title',
     'posts_per_page'         =>  '3'
);

// The Query
$query = new WP_Query( $args );

// The Loop
if ( $query->have_posts() ) {
     while ( $query->have_posts() ) {
          $query->the_post();
          $link_address = get_permalink($post);
          echo '<div class="entry-content">';
          echo '<h2 class="pagesButton">';
          echo "<a href='$link_address'>";
          echo  the_title();
          echo '</a>';
          echo '</h2>';
          the_excerpt();
          echo '</div>';
     }
} else {
     // no posts found
}
?>

</body>
</html>
