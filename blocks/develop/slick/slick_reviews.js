
	// Reviews

	if ( window.jQuery && $.fn.slick ) {

		$(function() {

			var slider = $( '.slick_reviews' );

			if ( slider.length === 0 ) return;

			slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				infinite: true,
				nextArrow: '<button class="arrow slick__arrow_next"><svg class="icon arrow__icon" viewBox="0 0 16 16"><path d="M5 14l6-6-6-6"></path></svg></button>',
				prevArrow: '<button class="arrow slick__arrow_prev"><svg class="icon arrow__icon" viewBox="0 0 16 16"><path d="M11 14L5 8l6-6"></path></svg></button>',
				dotsClass: 'slick__dots',
				adaptiveHeight: true
			});

		});

	}
