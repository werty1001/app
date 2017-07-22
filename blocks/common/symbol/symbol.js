
// Load symbol sprite

(function ( body ) {

	var link = body.dataset.symbol || __webpackSymbol__,
		data, xhr, lastMod, storageLastMod, storage;

		if ( ! link ) return;

		lastMod = +link.split( '?ver=' )[1];
		storage = localStorage.getItem( 'symbolSprite' );
		storageLastMod = +localStorage.getItem( 'lastModSymbol' );


		if ( storage && lastMod === storageLastMod  ) {

			body.insertAdjacentHTML( 'afterbegin', storage );

		} else {

			xhr = new XMLHttpRequest();
			xhr.open( 'GET', link, true );
			xhr.onreadystatechange = function() {

				if ( this.readyState !== 4 ) return;

				if ( this.status !== 200 ) return console.log( xhr.responseText );

				data = xhr.responseText;

				if ( data ) {

					body.insertAdjacentHTML( 'afterbegin', data );

					localStorage.setItem( 'symbolSprite', data );
					localStorage.setItem( 'lastModSymbol', lastMod );

				}

			};

			xhr.send();

		}

})( document.body );
