(function( $ ){
	
	// jQpup
	$.fn.jQpup = function() 
	{
		return this.each(function() {     

			var $this       = $(this),
				h_document  = $(document).height(),
				w_document  = $(document).width(),
				el_close    = $('<div class="el-popup-close attr-popup-close">X</div>'),
				el_overview = $('<div class="el-popup-overview">');

			el_overview.height( h_document ).width( w_document );

			$this.prepend( el_close ).wrap( el_overview );

			$this.css({ 'margin-top':  - ( $this.outerHeight( true ) / 2 ) } );
			$this.css({ 'margin-left': - ( $this.outerWidth ( true ) / 2 ) } );

			$(window).resize(function()
			{
				h_document = $(document).height();
				w_document = $(document).width();
				$this.closest('.el-popup-overview').height( h_document ).width( w_document );
			});

			$this.closest('.el-popup-overview').click(function(e) {

				var el_click = $(e.target);

				if( el_click.hasClass('el-popup-overview') || el_click.hasClass('attr-popup-close') ){
					$(window).off('resize');
					el_close.remove();
					$this.unwrap(el_overview).hide();
				}
				
			});

		 	$(this).show();

		});
	};	

})(jQuery);

$(function(){

	// init jQpup
	$('.img').click(function(){
		$(".jQpup").jQpup();
	});

});