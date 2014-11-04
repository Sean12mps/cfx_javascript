var cfx = function(){

	var iCfx = this;


		iCfx.attr = {

				archive 	: ''
			, 	content 	: ''
			, 	loopPost 	: ''
			, 	loopClass 	: ''
			,	term 		: ''
			,	url 		: ''
		};


		iCfx.saveValue = function( args ){
			iCfx.attr = $.extend( iCfx.attr, args);
		};


		iCfx.is_archive = function(){
			if( $( 'body' ).hasClass('archive') ){
				// iCfx.saveValue( { archive: args } );
				return true;
			} else {
				return false;
			}
		};

		iCfx.is_post_type_archive = function( args ){
			if( $( 'body' ).hasClass( 'tax-'+args+'' ) ){
				// iCfx.saveValue( { archive: args } );
				return true;
			} else {
				return false;
			}
		};

		iCfx.removeLoopPost = function( selector ){
			var el = $( '#content' ).find( ''+selector+'' );
				iCfx.saveValue( { loopPost: el } );
				$( el ).remove();
		};


		iCfx.start = function(){

		};


};


wp = new cfx;