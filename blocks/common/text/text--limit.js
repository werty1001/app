

	// Text limit

	(function () {

		var els = document.getElementsByClassName( 'text--limit' ),
			windowWidth = Math.min( window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth ),
			windowHeight = Math.min( window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight );

			if ( ! els.length > 0 ) return;

			for ( var i = 0, html, limit, el; el = els[i]; i++ ) {

				limit = el.dataset.limitHeight || 200;

				if ( limit > el.clientHeight ) el.classList.toggle( 'text--limit-disabled' );

				html = '<div class="text__inner" style="max-height:' + limit + 'px">' + el.innerHTML + '</div>';
				html += '<div class="text__toggle"><a class="link text__toggle-link" data-show="' + ( el.dataset.limitToggle.split( '||' )[0] || 'Развернуть' ) + '" data-hide="' + ( el.dataset.limitToggle.split( '||' )[1] || 'Свернуть' ) + '"></a></div>';

				el.innerHTML = html;

			}

			document.addEventListener( 'click', function( e ) {

				if ( e.target.classList.contains( 'text__toggle-link' ) ) {

					e.target.parentNode.parentNode.classList.toggle( 'text--limit-open' );
				
				}

			}, false);

			window.addEventListener( 'resize', function( e ) {

				var ww = Math.min( window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth ),
					wh = Math.min( window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight );

					if ( windowWidth !== ww || windowHeight !== wh ) {

						for ( var i = 0, limit, el; el = els[i]; i++ ) {

							limit = el.dataset.limitHeight || 200;

							if ( limit > el.clientHeight ) el.classList.toggle( 'text--limit-disabled' );

						}

						windowWidth = ww;
						windowHeight = wh;

					}

			});

	})();

