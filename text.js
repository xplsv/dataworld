/**
 * @author mrdoob / http://mrdoob.com
 */

( function () {

	var geometry = null;

	var posx = 0, offsetx = 0;
	var posy = 0, offsety = 0;

	var moveTo = function ( x, y ) {

		posx = x;
		posy = y;

	};

	var lineTo = function ( x, y ) {

		geometry.vertices.push( new THREE.Vector3( posx + offsetx, posy + offsety ) );
		geometry.vertices.push( new THREE.Vector3( x + offsetx, y + offsety ) );

		moveTo( x, y );

	};

	var addChar = function ( string, x, y ) {

		offsetx = x;
		offsety = y;

		switch ( string ) {

			case " ":

				break;

			case "A":

				moveTo( 0, 0 );
				lineTo( 1, 4 );
				lineTo( 2, 4 );
				lineTo( 2, 0 );

				break;

			case "B":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				lineTo( 1, 2 );
				lineTo( 2, 0 );
				lineTo( 0, 0 );

				break;

			case "C":

				moveTo( 2, 0 );
				lineTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );

				break;

			case "D":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 1, 4 );
				lineTo( 2, 0 );
				lineTo( 0, 0 );

				break;

			case "E":

				moveTo( 2, 0 );
				lineTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				moveTo( 0, 2 );
				lineTo( 1, 2 );

				break;

			case "F":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				moveTo( 0, 2 );
				lineTo( 1, 2 );

				break;

			case "G":

				moveTo( 2, 2 );
				lineTo( 2, 0 );
				lineTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );

				break;

			case "H":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				moveTo( 2, 0 );
				lineTo( 2, 4 );
				moveTo( 0, 2 );
				lineTo( 2, 2 );

				break;

			case "I":

				moveTo( 1, 0 );
				lineTo( 1, 4 );
				moveTo( 0, 4 );
				lineTo( 2, 4 );
				moveTo( 0, 0 );
				lineTo( 2, 0 );


				break;

			case "J":

				moveTo( 0, 0 );
				lineTo( 2, 0 );
				lineTo( 2, 4 );

				break;

			case "K":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				moveTo( 2, 0 );
				lineTo( 1, 2 );
				lineTo( 2, 4 );

				break;

			case "L":

				moveTo( 2, 0 );
				lineTo( 0, 0 );
				lineTo( 0, 4 );

				break;

			case "M":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 1, 2 );
				lineTo( 2, 4 );
				lineTo( 2, 0 );

				break;

			case "N":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 0 );
				lineTo( 2, 4 );

				break;

			case "O":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				lineTo( 2, 0 );
				lineTo( 0, 0 );

				break;

			case "P":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				lineTo( 1, 2 );

				break;

			case "Q":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				lineTo( 2, 0 );
				lineTo( 0, 0 );
				moveTo( 1, 1 );
				lineTo( 2, -1 );

				break;

			case "R":

				moveTo( 0, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				lineTo( 1, 2 );
				lineTo( 2, 0 );

				break;

			case "S":

				moveTo( 0, 0 );
				lineTo( 2, 0 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );

				break;

			case "T":

				moveTo( 1, 0 );
				lineTo( 1, 4 );
				moveTo( 0, 4 );
				lineTo( 2, 4 );

				break;

			case "U":

				moveTo( 0, 4 );
				lineTo( 0, 0 );
				lineTo( 2, 0 );
				lineTo( 2, 4 );

				break;

			case "V":

				moveTo( 0, 4 );
				lineTo( 1, 0 );
				lineTo( 2, 4 );

				break;

			case "W":

				moveTo( 0, 4 );
				lineTo( 0, 0 );
				lineTo( 1, 2 );
				lineTo( 2, 0 );
				lineTo( 2, 4 );

				break;

			case "X":

				moveTo( 0, 0 );
				lineTo( 2, 4 );
				moveTo( 0, 4 );
				lineTo( 2, 0 );

				break;

			case "Y":

				moveTo( 0, 4 );
				lineTo( 1, 2 );
				lineTo( 1, 0 );
				moveTo( 2, 4 );
				lineTo( 1, 2 );

				break;

			case "Z":

				moveTo( 0, 4 );
				lineTo( 2, 4 );
				lineTo( 0, 0 );
				lineTo( 2, 0 );

				break;

			case "1":

				moveTo( 1, 0 );
				lineTo( 1, 4 );
				moveTo( 0, 4 );
				lineTo( 1, 4 );

				break;

			case "9":

				moveTo( 2, 2 );
				lineTo( 0, 2 );
				lineTo( 0, 4 );
				lineTo( 2, 4 );
				lineTo( 2, 0 );

				break;

			case "/":

				moveTo( 0, 0 );
				lineTo( 2, 4 );

				break;

			default:

				moveTo( 0, 1 );
				lineTo( 2, 1 );
				moveTo( 0, 3 );
				lineTo( 2, 3 );

		}

	};

	Text = function ( string ) {

		geometry = new THREE.Geometry();

		var chars = string.split('');

		for ( var i = 0; i < chars.length; i ++ ) {

			addChar( chars[ i ], i * 3, 0 );

		}

		geometry.center();

		return geometry;

	};

} )();
