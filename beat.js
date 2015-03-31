var Beat = function ( audio ) {

	this.length = 1;
	this.offset = 0;

	this.meassure = function ( count, offset ) {

		if ( offset === undefined ) offset = 0;

		return	Math.floor( ( audio.currentTime + ( ( offset + this.offset ) * this.length ) ) / ( count * this.length ) );

	};

	this.float = function ( count, offset ) {

		if ( offset === undefined ) offset = 0;

		return ( ( audio.currentTime + ( ( offset + this.offset ) * this.length ) ) / ( count * this.length ) ) % 1;

	};

};
