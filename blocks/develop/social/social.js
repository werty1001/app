
// Social share

(function () {

	var share = {

		set: function () {

			for ( var i = 0, el; el = this.els[i]; i++ ) {

				this.setLinks( el.querySelectorAll( '.social__link' ) )

			}

		},

		setLinks: function ( links ) {

			for ( var i = 0, link; link = links[i]; i++ ) {

				link.href = link.href
					.replace( /{url}/g, window.location )
					.replace( /{title}/g, document.title )

			}

		},

		init: function () {

			this.els = document.querySelectorAll( '.social[data-share]' );

			if ( this.els.length === 0 ) return this

			this.set()

			return this

		}

	}

	return share.init();

})();
