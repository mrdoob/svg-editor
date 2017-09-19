/**
 * @author mrdoob / http://mrdoob.com
 */

class Editor {

	constructor( svg ) {

		this.svg = svg;
		this.source = null;

	}

	addElement( element ) {

		this.svg.appendChild( element );
		this.source.setText( this.toString() );

	}

	setSource( source ) {

		this.source = source;

	}

	setSVG( svg ) {

		this.svg.innerHTML = svg.documentElement.innerHTML;
		this.source.setText( this.toString() );

	}

	clear() {

		this.svg.textContent = '';
		this.source.setText( this.toString() );

	}

	toString() {

		// TODO Checkbox for auto-formating

		return [
			'<?xml version="1.0" encoding="UTF-8"?>',
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">',
			this.svg.innerHTML.replace( /\<\/([a-z]+)\></g, '</$1>\n<' ),
			'</svg>'
		].join( '\n' );

	}

}
