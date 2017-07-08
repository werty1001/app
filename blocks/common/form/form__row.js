
// Responsive form rows

function responsiveRows() {

	var el = 'form__row', rows = document.getElementsByClassName( el );

	if ( ! rows ) return;

	for ( var i = rows.length; i--; ) {

		var row = rows[i], attr = row.dataset.inline;

			if ( ! attr ) return;

			row.classList[ document.documentElement.clientWidth < +attr ? 'add' : 'remove' ]( el + '--inline' );

	}

}

window.addEventListener( 'load',   responsiveRows );
window.addEventListener( 'resize', responsiveRows );
