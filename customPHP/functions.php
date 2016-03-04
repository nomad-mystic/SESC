<?php

/*
Add any custom functions to your child theme here
*/
// Enable PHP in widgets

/**
 * Register our sidebars and widgetized areas.
 */
/* redirect users to front page after login */
function my_login_redirect( $url, $request, $user ){
     if( $user && is_object( $user ) && is_a( $user, 'WP_User' ) ) {
          if( $user->has_cap( 'administrator' ) ) {
               $url = admin_url();
          } else {
               $url = home_url();
          }
     }
     return $url;
}
add_filter('login_redirect', 'my_login_redirect', 10, 3 );

/*-------this is going to be the navigation for the cadreArea Page-----*/
//function cadre_area_nav_widgets_init() {
//
//	register_sidebar( array(
//		'name'          => 'Cadre Area Page Nav Left Col',
//		'id'            => 'cadre_area_page_nav',
//		'before_widget' => '<div id="cadreAreaNav">',
//		'after_widget'  => '</div>',
//		'before_title'  => '',
//		'after_title'   => '',
//	) );
//
//}
//add_action( 'widgets_init', 'cadre_area_nav_widgets_init' );

/* This is going to add a Cadre Log in Area for members on the Cadre Page*/
function cadre_login_widgets_init() {
	register_sidebar(array(
		'name'          => 'Cadre Log In Page',
		'id'            => 'cadre_login',
		'before_widget' => '<div id="cadreLoginPageWidget">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	));
}
add_action( 'widgets_init', 'cadre_login_widgets_init' );
/* This is going to add a File Cabinet Area for members on the File Cabinet Page*/
function cadre_file_cabinet_widgets_init() {
	register_sidebar(array(
		'name'          => 'Cadre File Cabinet Page',
		'id'            => 'cadre_file_cabinet',
		'before_widget' => '<div id="cadreFileCabinetPageWidget">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	));
}
add_action( 'widgets_init', 'cadre_file_cabinet_widgets_init' );
/*-------------This is going to be the Projects Page left Col Widget area---------*/
function projects_page_widgets_init() {

	register_sidebar( array(
		'name'          => 'Projects Page Left Col',
		'id'            => 'projects_page',
		'before_widget' => '<div id="projectsPageNavWidget">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );

}
add_action( 'widgets_init', 'projects_page_widgets_init' );
/*-------------This is going to be the Resources Page left Col Widget area---------*/
function resource_page_widgets_init() {

	register_sidebar( array(
		'name'          => 'Resource Page Left Col',
		'id'            => 'resource_page',
		'before_widget' => '<div id="resourcePageNavWidget">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );

}
add_action( 'widgets_init', 'resource_page_widgets_init' );
/*-------------This is for the aboutPage cadre area nav WIDGET ----------*/
function about_page_widgets_init() {

	register_sidebar( array(
		'name'          => 'About Page Left Col',
		'id'            => 'about_page',
		'before_widget' => '<div id="aboutPageNAVWidget">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );

}
add_action( 'widgets_init', 'about_page_widgets_init' );


/*---------------this is for the Stay Current Page--------------*/
function stay_current_nav_widgets_init() {

	register_sidebar( array(
		'name'          => 'Stay Current Page Nav Left Col',
		'id'            => 'stay_current_page_nav',
		'before_widget' => '<div id="stayCurrentNav">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );

}
add_action( 'widgets_init', 'stay_current_nav_widgets_init' );
/*-----------This is going to be the widget area for Instructional Support---*/
function instructional_support_nav_widgets_init() {

	register_sidebar( array(
		'name'          => 'Instructional Support Page Nav Left Col',
		'id'            => 'instructional_support_page_nav',
		'before_widget' => '<div id="instructionalSupportNav">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );

}
add_action( 'widgets_init', 'instructional_support_nav_widgets_init' );
/*------This is going to be the news Custom Post Type------*/
function news_custom_post() {
    $args = array(
      'public' => true,
      'label'  => 'News',
      'supports'  => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
      'show_ui' => true,
      'publicly_queryable' => true,
      'taxonomies' => array('category', 'post_tag'),
      'rewrite'            => array( 'slug' => 'news' )
	
    );
    register_post_type('news', $args);
}
add_action( 'init', 'news_custom_post');
/*---------------This for the resources custom post type----*/
if (!function_exists('resources_custom_post')) {

// Register Custom Post Type
function resources_custom_post() {

	$labels = array(
		'name'                => _x( 'Resources', 'Post Type General Name', 'text_domain' ),
		'singular_name'       => _x( 'Resource', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'           => __( 'Resources Post', 'text_domain' ),
		'name_admin_bar'      => __( 'Resources Post', 'text_domain' ),
		'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
		'all_items'           => __( 'All Items', 'text_domain' ),
		'add_new_item'        => __( 'Add New Item', 'text_domain' ),
		'add_new'             => __( 'Add New', 'text_domain' ),
		'new_item'            => __( 'New Item', 'text_domain' ),
		'edit_item'           => __( 'Edit Item', 'text_domain' ),
		'update_item'         => __( 'Update Item', 'text_domain' ),
		'view_item'           => __( 'View Item', 'text_domain' ),
		'search_items'        => __( 'Search Item', 'text_domain' ),
		'not_found'           => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
	);
	$args = array(
		'label'               => __( 'Resource', 'text_domain' ),
		'description'         => __( 'resources_custom_post', 'text_domain' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'trackbacks', 'revisions', 'custom-fields', 'page-attributes', 'post-formats', ),
		'taxonomies'          => array( 'category', 'post_tag' ),
		'hierarchical'        => true,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_position'       => 5,
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => true,
		'can_export'          => true,
		'has_archive'         => true,		
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
	);
	register_post_type('resources_post', $args);

}
add_action('init', 'resources_custom_post', 0);

}
/*//////////////////////This is all the resource page rightAside widgets----*/
/* This is for the custom-post-deaf-blindness template*/
//function deaf_blindness_widgets_init() {
//
//	register_sidebar( array(
//		'name'          => 'Deaf Blindness Right Aside',
//		'id'            => 'deaf_blindness_right_widget',
//		'before_widget' => '<div id="deafBlindnessWidget">',
//		'after_widget'  => '</div>',
//		'before_title'  => '',
//		'after_title'   => '',
//	) );
//
//}
//add_action( 'widgets_init', 'deaf_blindness_widgets_init' );

/*-------------------change the length of the post excerpt---*/
function custom_excerpt_length($length) {
	return 20;
}
add_filter('excerpt_length', 'custom_excerpt_length', 999);

/////This is for removing register form the Woothemes Sensei my courses page
global $woothemes_sensei;
remove_action('sensei_login_form', array($woothemes_sensei->frontend, 'sensei_login_form'), 10);

add_action('sensei_login_form', 'custom_sensei_login_form' , 10);

function custom_sensei_login_form() {
	global $woothemes_sensei;

	?><div id="my-courses">
	<?php $woothemes_sensei->notices->print_notices(); ?>
	<div class="col2-set" id="customer_login">

		<div class="col-1">
			<?php
			// output the actual form markup
			$woothemes_sensei->frontend->sensei_get_template('user/login-form.php');
			?>
		</div>
	</div>
	</div>

	<?php
} // End custom_sensei_login_form()
// This is going to rename the complete lesson button on lesson-meta.php
add_filter('sensei_complete_lesson_text', 'sensei_custom_complete_lesson_text', 10);

function sensei_custom_complete_lesson_text () {
	$text = "Mark Lesson Complete";
	return $text;
}
add_filter( 'sensei_view_lesson_quiz_text', 'sensei_custom_lesson_quiz_text', 10 );
/// This is going to rename the view lesson quiz
function sensei_custom_lesson_quiz_text () {
	$text = "Report What You Have Learned";
	return $text;
}
?>