<?php get_header(); ?>
<?php get_template_part('custom-side-nav') ?> 
        <div id="container">
            <div id="content">

				<?php the_post(); ?>

                <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h1 class="entry-title"><?php the_title(); ?></h1>
					
					<div class="entry-content">
						<?php the_content(); ?>
						<?php wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'hbd-theme' ) . '&after=</div>') ?>
					</div><!-- .entry-utility -->
					
					<div class="entry-utility">
					                    <?php printf( __( '%1$s%2$s | <a href="%5$s" title="Comments RSS to %4$s" rel="alternate" type="application/rss+xml">RSS</a> | ', 'hbd-theme' ),
					                        get_the_category_list(', '),
					                        get_the_tag_list( __( ', ', 'hbd-theme' ), ', ', '' ),
					                        get_permalink(),
					                        the_title_attribute('echo=0'),
					                        comments_rss() ) ?>

					<?php if ( ('open' == $post->comment_status) && ('open' == $post->ping_status) ) : // Comments and trackbacks open ?>
					                        <?php printf( __( '<a class="comment-link" href="#respond" title="Post a comment">Post a comment</a>', 'hbd-theme' ), get_trackback_url() ) ?>
					<?php elseif ( !('open' == $post->comment_status) && ('open' == $post->ping_status) ) : // Only trackbacks open ?>
					                        <?php printf( __( 'Comments are closed, but you can leave a trackback: <a class="trackback-link" href="%s" title="Trackback URL for your post" rel="trackback">Trackback URL</a>.', 'hbd-theme' ), get_trackback_url() ) ?>
					<?php elseif ( ('open' == $post->comment_status) && !('open' == $post->ping_status) ) : // Only comments open ?>
					                        <?php _e( 'Trackbacks are closed, but you can <a class="comment-link" href="#respond" title="Post a comment">post a comment</a>.', 'hbd-theme' ) ?>
					<?php elseif ( !('open' == $post->comment_status) && !('open' == $post->ping_status) ) : // Comments and trackbacks closed ?>
					                        <?php _e( 'Both comments and trackbacks are currently closed.', 'hbd-theme' ) ?>
					<?php endif; ?>
					<?php edit_post_link( __( 'Edit', 'hbd-theme' ), "\n\t\t\t\t\t<span class=\"edit-link\">", "</span>" ) ?>
                </div><!-- #post-<?php the_ID(); ?> -->           
 
                <div id="nav-below" class="navigation">
						<?php previous_post_link( '%link', '<span class="meta-nav">&laquo;</span> %title' ) ?> <span style="color: #bbb;">&#8226;</span> <?php next_post_link( '%link', '%title <span class="meta-nav">&raquo;</span>' ) ?>
				</div><!-- #nav-below -->     
            
 				<?php comments_template('', true); ?>

            </div><!-- #content -->
        </div><!-- #container -->
 <?php get_sidebar(); ?>
<?php get_footer(); ?>
