/**
 * Pickup — admin settings enhancements (progressive, dependency-free).
 *
 * 1. Inline help: each "?" button toggles an accessible popover. Native Popover
 *    API is used where available; otherwise a small show/hide fallback keeps it
 *    keyboard- and screen-reader-operable via aria-expanded.
 * 2. Repeatable location rows: add/remove without a page reload.
 *
 * Loaded with `defer`; degrades gracefully — all settings still save with JS off.
 */
( function () {
	'use strict';

	var root = document.querySelector( '.pickup-admin' );

	if ( ! root ) {
		return;
	}

	var supportsPopover =
		typeof HTMLElement !== 'undefined' &&
		Object.prototype.hasOwnProperty.call( HTMLElement.prototype, 'popover' );

	/* ---- Inline help popovers ---------------------------------------- */

	function closeAllFallback( except ) {
		var open = root.querySelectorAll( '.pickup-help[aria-expanded="true"]' );
		Array.prototype.forEach.call( open, function ( btn ) {
			if ( btn === except ) {
				return;
			}
			btn.setAttribute( 'aria-expanded', 'false' );
			var tip = document.getElementById(
				btn.getAttribute( 'aria-describedby' )
			);
			if ( tip ) {
				tip.hidden = true;
				tip.classList.remove( 'is-fallback' );
			}
		} );
	}

	if ( ! supportsPopover ) {
		root.addEventListener( 'click', function ( event ) {
			var btn = event.target.closest( '.pickup-help' );
			if ( ! btn ) {
				closeAllFallback( null );
				return;
			}
			event.preventDefault();
			var tip = document.getElementById(
				btn.getAttribute( 'aria-describedby' )
			);
			if ( ! tip ) {
				return;
			}
			var isOpen = btn.getAttribute( 'aria-expanded' ) === 'true';
			closeAllFallback( btn );
			btn.setAttribute( 'aria-expanded', isOpen ? 'false' : 'true' );
			tip.hidden = isOpen;
			tip.classList.toggle( 'is-fallback', ! isOpen );
		} );

		document.addEventListener( 'keydown', function ( event ) {
			if ( event.key === 'Escape' ) {
				closeAllFallback( null );
			}
		} );
	}

	/* ---- Repeatable location rows ------------------------------------ */

	var list = root.querySelector( '[data-pickup-locations]' );
	var addBtn = root.querySelector( '[data-pickup-add]' );
	var template = root.querySelector( '[data-pickup-template]' );
	var nextIndex = 1000;

	function reindex() {
		var rows = list.querySelectorAll( '[data-pickup-row]' );
		Array.prototype.forEach.call( rows, function ( row, i ) {
			var inputs = row.querySelectorAll( 'input' );
			Array.prototype.forEach.call( inputs, function ( input ) {
				var name = input.getAttribute( 'name' );
				if ( name ) {
					input.setAttribute(
						'name',
						name.replace( /locations\[\d+\]/, 'locations[' + i + ']' )
					);
				}
			} );
		} );
	}

	if ( list && addBtn && template ) {
		addBtn.addEventListener( 'click', function () {
			var clone = template.content
				? template.content.cloneNode( true )
				: null;
			if ( ! clone ) {
				return;
			}
			var fieldset = clone.querySelector( '[data-pickup-row]' );
			if ( fieldset ) {
				var inputs = fieldset.querySelectorAll( 'input' );
				Array.prototype.forEach.call( inputs, function ( input ) {
					var name = input.getAttribute( 'name' );
					if ( name ) {
						input.setAttribute(
							'name',
							name.replace( /locations\[\d+\]/, 'locations[' + nextIndex + ']' )
						);
					}
				} );
			}
			nextIndex++;
			list.appendChild( clone );
			reindex();
		} );

		list.addEventListener( 'click', function ( event ) {
			var remove = event.target.closest( '[data-pickup-remove]' );
			if ( ! remove ) {
				return;
			}
			event.preventDefault();
			var row = remove.closest( '[data-pickup-row]' );
			if ( row && list.querySelectorAll( '[data-pickup-row]' ).length > 1 ) {
				row.parentNode.removeChild( row );
				reindex();
			} else if ( row ) {
				// Keep at least one row: clear it instead of deleting.
				var inputs = row.querySelectorAll( 'input[type="text"]' );
				Array.prototype.forEach.call( inputs, function ( input ) {
					input.value = '';
				} );
			}
		} );
	}
} )();
