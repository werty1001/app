
// Reviews

if ( window.jQuery && $.fn.slick ) {

	$(function() {

		var slider = $( '.slick--reviews' );

		if ( ! slider.length > 0 ) return;

		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			nextArrow: false,
			prevArrow: false,
			dotsClass: 'slick__dots',
			adaptiveHeight: true
		});

	});

}
