
/**
 * Load symbol sprite
 */

(function ( body ) {

	var link = __webpackSymbol__,
		data, xhr, lastMod, storageLastMod, storage;

		if ( ! body || ! link ) return;

		lastMod = +link.split( '?ver=' )[1];
		storage = localStorage.getItem( 'symbolSprite'  );
		storageLastMod = +localStorage.getItem( 'lastModSymbol' );


		if ( lastMod === storageLastMod && storage ) {

			body.insertAdjacentHTML( 'afterbegin', storage );

		} else {

			xhr = new XMLHttpRequest();
			xhr.open( 'GET', link, true );
			xhr.onreadystatechange = function() {

				if( this.readyState !== 4 || this.status === 404 || this.status === 500 ) return;

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
