
	// Responsive rows

	(function () {

		var rows = {

			ckeck: function () {

				var ww = document.documentElement.clientWidth;

				for ( var i = 0, row, width; row = this.els[i]; i++ ) {

					width = row.parentNode.clientWidth || ww

					row.classList[ width < +row.dataset.inline ? 'add' : 'remove' ]( 'form__row_inline' );

				}

			},

			init: function () {

				this.els = document.querySelectorAll( '.form__row[data-inline]' );

				if ( this.els.length === 0 ) return this

				window.addEventListener( 'load', this.ckeck.bind( this ) );
				window.addEventListener( 'resize', this.ckeck.bind( this ) );

				return this

			}

		}

		return rows.init();

	})();
