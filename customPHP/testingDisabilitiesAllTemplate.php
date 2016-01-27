<?php
/**
 * Template Name: Disabilities Categories
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
<?php if ((isset( $woo_options['woo_slider_biz']) && 'true' == $woo_options['woo_slider_biz']) && (isset($woo_options['woo_slider_biz_full']) && 'true' == $woo_options['woo_slider_biz_full'])) {
          $saved = $wp_query; woo_slider_biz();
          $wp_query = $saved;
     }
?>
     <div id="content" class="col-full business">
          <div id="main-sidebar-container">
               <!-- #main Starts -->
               <?php woo_main_before(); ?>

               <?php if ((isset($woo_options['woo_slider_biz']) && 'true' == $woo_options['woo_slider_biz']) && (isset($woo_options['woo_slider_biz_full']) && 'false' == $woo_options['woo_slider_biz_full'])) {$saved = $wp_query; woo_slider_biz(); $wp_query = $saved;} ?>

               <section id="main"  class="resourcePostPage traumatic-brain-injury-post-page">
                    <h2><?php echo get_the_title($ID); ?></h2>
                    &nbsp;
                    <div id="hiddenFormDiv"></div>

                    <div id="PHPResultsOutput"></div>
                    <script>
                         jQuery(document).ready(function($) {
                              var callForm = function() {
                                   // This grabbing the location.pathname to pass to the php form that will process the URL
                                   var pagePath = window.location.pathname;
                                   pagePath.toString();
                                   var slicedPageHref = pagePath.slice(33);
                                   var removeLastPageHref = slicedPageHref.substr(0, slicedPageHref.length - 1);

                                   // Building the form elements to place in page
                                   var hiddenFormDiv = document.getElementById('hiddenFormDiv');
                                   var formOutput = '';
                                   formOutput += '<form action="processDisabilitiesPost.php" method="GET" id="hiddenForm">';
                                   formOutput += '<input type="hidden" name="pageHref" value="' + removeLastPageHref + '">';
                                   formOutput += '</form>';
                                   hiddenFormDiv.innerHTML = formOutput;
                                   // THis is the call to grab the GET data from PHP page returning wp_posts in json format
                                   var callPosts = function() {
                                        setTimeout(function () {
                                             var GETString = 'http://specialeducationsupportcenter.org/wp-content/themes/woo-child/processDisabilitiesPost.php';
                                             $.ajax({
                                                  type: 'GET',
                                                  url: GETString,
                                                  success: function (data, status, jqxhr) {
                                                       console.log("Request data: ", data);
                                                       console.log("Request status:", status);
                                                       console.log("Request jqxhr:", jqxhr);
                                                  },
                                                  error: function (jqxhr, status, error) {
                                                       console.log("Something went wrong!");
                                                       console.log("Something went wrong! jqxhr" + jqxhr);
                                                       console.log("Something went wrong! status" + status);
                                                       console.log("Something went wrong! error" + error);
                                                  }
                                             });
                                        }, 5000);
                                   }; // ENd callPosts
                                   // Submits the form to grab the url of the page and calls post ajax/builder page function.
                                   $('#hiddenForm').submit(function(event) {
                                        event.preventDefault();
                                        console.log(event);
                                        callPosts();
                                        return;
                                   });
                                   $('#hiddenForm').submit();
                              }; // End callForm
                              callForm();
                         }); // End ready
                    </script>
                    <?php
                    woo_loop_before();
                    // Restore original Post Data
                    wp_reset_postdata();
                    woo_loop_after();
                    ?>
               </section><!-- /#main -->
               <?php woo_main_after(); ?>

               <?php get_sidebar(); ?>

          </div><!-- /#main-sidebar-container -->
          <!---Added by nomad for widget area-->
          <?php if ( is_active_sidebar( 'resource_page' ) ) : ?>
               <aside id="resourceSidebarNav" class="primary-sidebar widget-area leftColNav" role="complementary">
                    <?php dynamic_sidebar( 'resource_page' ); ?>
               </aside><!-- #primary-sidebar -->
          <?php endif; ?>
     </div><!-- /#content -->
<?php woo_content_after(); ?>

<?php get_footer(); ?>