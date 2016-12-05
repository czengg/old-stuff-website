<?php
/*
Plugin Name: Follow Button for Jetpack
Plugin URI: http://adityajain.name
Description: Adds a floating follow button to Jetpack Powered sites.The same follow button which appears on WP.COM blogs. Use Follow Plugin if your blog isn't powered by Jetpack
Version: 1.0.1
Author: TheAdityaJain
Author URI: http://adityajain.name
Licence: GNU GPL Version 3
*/
/*
Copyright (C) 2011-12 Aditya Jain (hello@theadityajain.com)

This file is part of the Follow Plugin

Follow Plugin is free software  : you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

Follow Plugin is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Follow Plugin        (see the root folder of the plugin for licence.txt) . If not, see <http://www.gnu.org/licenses/>.
*/
add_action( 'wp_footer', 'wpse33008');
function wpse33008() {
?>
<style type="text/css" media="screen">
  #bit, #bit * {}
  #bit {
      bottom: -300px;
      font: 13px "Helvetica Neue",sans-serif;
      position: fixed;
      right: 10px;
      z-index: 999999;
      width: 230px;
  }
  
  .loggedout-follow-typekit {
      margin-right: 4.5em;
  }
  
  #bit a.bsub {
      background-color: #464646;
      background-image: -moz-linear-gradient(center bottom , #3F3F3F, #464646 5px);
      background: -webkit-gradient(linear, left top, left bottom, from(#3F3F3F), to(#464646));
      filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#3F3F3F', endColorstr='#464646');    

      border: 0 none;
      box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
      color: #CCCCCC;
      display: block;
      float: right;
      font: 13px/28px "Helvetica Neue",sans-serif;
      letter-spacing: normal;
      outline-style: none;
      outline-width: 0;
      overflow: hidden;
      padding: 0 10px 0 8px;
      text-decoration: none !important;
      text-shadow: 0 -1px 0 #444444;
  }
  
  #bit a.bsub {
      border-radius: 2px 2px 0 0;
  }
  
  #bit a.bsub span {
      background-attachment: scroll;
      background-clip: border-box;
      background-color: transparent;
      background-image: url(<?php bloginfo('url' ); ?>/wp-content/plugins/follow-button-for-jetpack/plus.png);
      background-origin: padding-box;
      background-position: 2px 3px;
      background-repeat: no-repeat;
      background-size: 20% auto;
      padding-left: 18px;
  }
  
  #bit a:hover span, #bit a.bsub.open span {
      /*background-position: 0 -117px;*/
      color: #FFFFFF !important;
  }
  
  #bit a.bsub.open {
      background: none repeat scroll 0 0 #333333;
  }
  
  #bitsubscribe {
      background: none repeat scroll 0 0 #464646;
      border-radius: 2px 0 0 0;
      color: #FFFFFF;
      margin-top: 27px;
      padding: 15px;
      width: 200px;
      float: right;
      margin-top: 0;
  }
  
  div#bitsubscribe.open {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
  
  #bitsubscribe div {
      overflow: hidden;
  }
  
  #bit h3, #bit #bitsubscribe h3 {
      color: #FFFFFF;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 20px;
      font-weight: 300;
      margin: 0 0 0.5em !important;
      text-align: left;
      text-shadow: 0 1px 0 #333333;
  }
  
  #bit #bitsubscribe p {
      color: #FFFFFF;
      font: 300 15px/1.3em "Helvetica Neue",Helvetica,Arial,sans-serif;
      margin: 0 0 1em;
      text-shadow: 0 1px 0 #333333;
  }
  
  #bitsubscribe p a {
      margin: 20px 0 0;
  }
  
  #bit #bitsubscribe p.bit-follow-count {
      font-size: 13px;
  }
  
  #bitsubscribe input[type="submit"] {
      -moz-transition: all 0.25s ease-in-out 0s;
      -webkit-transition: all 0.25s ease-in-out 0s;
      -o-transition: all 0.25s ease-in-out 0s;
      -ms-transition: all 0.25s ease-in-out 0s;
      transition: all 0.25s ease-in-out 0s;   
      background: -moz-linear-gradient(center top , #333333 0%, #111111 100%) repeat scroll 0 0 transparent;
      background: -webkit-gradient(linear, left top, left bottom, from(#333333), to(#111111));
      filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#333333', endColorstr='#111111');    

      border: 1px solid #282828;
      border-radius: 11px 11px 11px 11px;
      box-shadow: 0 1px 0 #444444 inset;
      color: #CCCCCC;
      padding: 2px 20px;
      text-decoration: none;
      text-shadow: 0 1px 0 #000000;
  }
  
  #bitsubscribe input[type="submit"]:hover {
      background: -moz-linear-gradient(center top , #333333 0%, #222222 100%) repeat scroll 0 0 transparent;
      box-shadow: 0 1px 0 #4F4F4F inset;
      color: #FFFFFF;
      text-decoration: none;
  }
  
  #bitsubscribe input[type="submit"]:active {
      background: -moz-linear-gradient(center top , #111111 0%, #222222 100%) repeat scroll 0 0 transparent;
      box-shadow: 0 -1px 0 #333333 inset;
      color: #AAAAAA;
      text-decoration: none;
  }
  
  #bitsubscribe input[type="text"] {
      border-radius: 3px 3px 3px 3px;
      font: 300 15px "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  
  #bitsubscribe input[type="text"]:focus {
      border: 1px solid #000000;
  }
  
  #bitsubscribe.open {
      display: block;
  }
  
  #bsub-subscribe-button {
      margin: 0 auto;
      text-align: center;
  }
  
  #bitsubscribe #bsub-credit {
      border-top: 1px solid #3C3C3C;
      font: 11px "Helvetica Neue",sans-serif;
      margin: 0 0 -15px;
      padding: 7px 0;
      text-align: center;
  }
  
  #bitsubscribe #bsub-credit a {
      background: none repeat scroll 0 0 transparent;
      color: #AAAAAA;
      text-decoration: none;
      text-shadow: 0 1px 0 #262626;
  }
  
  #bitsubscribe #bsub-credit a:hover {
      background: none repeat scroll 0 0 transparent;
      color: #FFFFFF;
  }
</style>    

<script type="text/javascript" charset="utf-8">
  jQuery.extend(jQuery.easing, {
      easeOutCubic: function (x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b;
      }
  });
  jQuery(document).ready(function () {
      var isopen = false,
          bitHeight = jQuery('#bitsubscribe').height();
      setTimeout(function () {
          jQuery('#bit').animate({
              bottom: '-' + bitHeight - 30 + 'px'
          }, 200);
      }, 300);
      jQuery('#bit a.bsub').click(function () {
          if (!isopen) {
              isopen = true;
              jQuery('#bit a.bsub').addClass('open');
              jQuery('#bit #bitsubscribe').addClass('open')
              jQuery('#bit').stop();
              jQuery('#bit').animate({
                  bottom: '0px'
              }, {
                  duration: 400,
                  easing: "easeOutCubic"
              });
          } else {
              isopen = false;
              jQuery('#bit').stop();
              jQuery('#bit').animate({
                  bottom: '-' + bitHeight - 30 + 'px'
              }, 200, function () {
                  jQuery('#bit a.bsub').removeClass('open');
                  jQuery('#bit #bitsubscribe').removeClass('open');
              });
          }
      });
  });
</script>

<div id="bit" class="">
  <a class="bsub" href="javascript:void(0)"><span id='bsub-text'>Follow</span></a>
  
  <div id="bitsubscribe">
    <h3><label for="loggedout-follow-field">Follow <?php bloginfo('name' ); ?></label></h3>
<a name="subscribe-blog"></a>
		<form action="" method="post" accept-charset="utf-8" id="subscribe-blog">
			<p>Get every new post delivered to your Inbox</p>
              <p>Join other followers:</p>
			<p><input type="text" name="email" style="width: 95%; padding: 1px 2px" value="Email Address" id="subscribe-field" onclick="if ( this.value == 'Email Address' ) { this.value = ''; }" onblur="if ( this.value == '' ) { this.value = 'Email Address'; }" /></p>
			<p>
				<input type="hidden" name="action" value="subscribe" />
				<input type="hidden" name="source" value="<?php echo esc_url( $referer ); ?>" />
				<input type="hidden" name="sub-type" value="<?php echo esc_attr( $source ); ?>" />
				<input type="hidden" name="redirect_fragment" value="<?php echo esc_attr( $widget_id ); ?>" />
				<?php wp_nonce_field( 'blogsub_subscribe_'. get_current_blog_id(), '_wpnonce', false ); ?>
				<input type="submit" value="Sign me up!" name="jetpack_subscriptions_widget" />
                       </p>
		</form>
        </div>
</div>
<?php
}
?>