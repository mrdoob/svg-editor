/**
 * @author mrdoob / http://mrdoob.com
 */

class Selector {

	constructor( stage ) {

		var selection = document.createElement( 'span' );
		selection.style.position = 'absolute';
		selection.style.display = 'block';
		selection.style.outline = 'solid 2px #99f';
		selection.style.pointerEvents = 'none';
		document.body.appendChild( selection );

		//

		var selected = null;
		var offset = { x: 0, y: 0 };

		function updateSelection( element ) {

			if ( element.isSameNode( stage ) ) {

				selection.style.display = 'none';
				return;

			}

			var rect = element.getBoundingClientRect();

			selection.style.left = rect.left + 'px';
			selection.style.top = rect.top + 'px';
			selection.style.width = rect.width + 'px';
			selection.style.height = rect.height + 'px';

			selection.style.display = 'block';

		}

		//

		stage.addEventListener( 'mouseover', function ( event ) {

			var target = event.target;
			updateSelection( target );

		} );

		stage.addEventListener( 'mousedown', function ( event ) {

			var target = event.target;

			if ( target.isSameNode( stage ) === false ) {

				if ( target.tagName === 'circle' ) {

					offset.x = parseFloat( target.getAttribute( 'cx' ) ) - event.clientX;
					offset.y = parseFloat( target.getAttribute( 'cy' ) ) - event.clientY;

				} else {

					offset.x = parseFloat( target.getAttribute( 'x' ) ) - event.clientX;
					offset.y = parseFloat( target.getAttribute( 'y' ) ) - event.clientY;

				}

				selected = target;

			}

		} );

		stage.addEventListener( 'mouseup', function ( event ) {

			selected = null;

		} );

		window.addEventListener( 'mousemove', function ( event ) {

			if ( selected ) {

				if ( selected.tagName === 'circle' ) {

					selected.setAttribute( 'cx', event.clientX + offset.x );
					selected.setAttribute( 'cy', event.clientY + offset.y );

				} else {

					selected.setAttribute( 'x', event.clientX + offset.x );
					selected.setAttribute( 'y', event.clientY + offset.y );

				}

				updateSelection( selected );

			}

		} );

	}

}
