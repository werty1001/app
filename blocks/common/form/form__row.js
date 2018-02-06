

	// Responsive form rows

	function responsiveRows() {

		var rows = document.querySelectorAll( '.form__row[data-inline]' );

			if ( ! rows.length > 0 ) return;

			for ( var i = 0, row; row = rows[i]; i++ ) {

				row.classList[ document.documentElement.clientWidth < +row.dataset.inline ? 'add' : 'remove' ]( 'form__row--inline' );

			}

	}

	window.addEventListener( 'load',   responsiveRows );
	window.addEventListener( 'resize', responsiveRows );

