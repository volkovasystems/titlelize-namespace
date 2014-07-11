/*:
	@module-configuration:
		{
			"packageName": "titlelize-namespace",
			"fileName": "titlelize-namespace.js",
			"moduleName": "titlelizeNamespace",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/titlelize-namespace.git",
			"testCase": "titlelize-namespace-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
	    {
	        "spread-namespace": "spreadNamespace"
	    }
	@end-include
*/
var titlelizeNamespace = function titlelizeNamespace( namespace ){
	/*:
		@meta-configuration:
			{
				"namespace:required": "string"
			}
		@end-meta-configuration
	*/

	if( NAMESPACE_PATTERN.test( namespace ) ){
        namespace = spreadNamespace( namespace );

        return namespace.replace( NAMESPACE_TERM_PATTERN,
            function onReplaced( match ){
                return match.toUpperCase( );
            } );
	}else{
		var error = new Error( "invalid namespace format" );
		console.error( error );
		throw error;
	}
};

const NAMESPACE_PATTERN = /^(?:[a-zA-Z][a-zA-Z0-9]*[-_ ])*[a-zA-Z][a-zA-Z0-9]*$/;
const NAMESPACE_TERM_PATTERN = /^[a-zA-Z]|([-_ ])[a-zA-Z]/g;

var spreadNamespace = require( "./spread-namespace/spread-namespace" );

( module || { } ).exports = titlelizeNamespace;

console.log( titlelizeNamespace( "abc def-ghi_jkl Mno P q R" ) );