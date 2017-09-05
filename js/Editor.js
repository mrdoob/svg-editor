/**
 * @author mrdoob / http://mrdoob.com
 */

class Editor {

	constructor( svg ) {

		this.svg = svg;

	}

	addElement( element ) {

		this.svg.appendChild( element );

	}

	setSVG( svg ) {

		this.svg.innerHTML = svg.documentElement.innerHTML;

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
