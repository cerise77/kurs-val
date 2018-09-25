
$(document).ready(function () {

	var menu_navigation = $('#main-nav'),
	      $L = 900,
	      //cart_trigger = $('#cart-trigger'),
	      hamburger_icon = $('#hamburger-menu'),
	      cart = $('#cart'),
	      shadow_layer = $('#shadow-layer');

	hamburger_icon.on('click', function () {
	    cart.removeClass('speed-in');
	    toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
	});

	move_navigation(menu_navigation, $L);

	$(window).on('resize', function () {
	    move_navigation(menu_navigation, $L);
	    if ($(window).width() >= $L && menu_navigation.hasClass('speed-in')) {
	        menu_navigation.removeClass('speed-in');
	        shadow_layer.removeClass('is-visible');
	        $('body').removeClass('overflow-hidden');
	    }
	});



	$(".sec").on('click', function(){
		/*console.log('dgdfgdf');*/
	});

});


function toggle_panel_visibility(panel, background_layer, body) {
    if (panel.hasClass('speed-in')) {
        panel.removeClass('speed-in');
        background_layer.removeClass('is-visible');
        body.removeClass('overflow-hidden');
    } else {
        panel.addClass('speed-in');
        background_layer.addClass('is-visible');
        body.addClass('overflow-hidden');
    }
  }

function move_navigation(navigation, $MQ) {
    if ($(window).width() >= $MQ) {
        navigation.detach();
        navigation.appendTo('header');
    } else {
        navigation.detach();
        navigation.insertAfter('header');
    }
}
