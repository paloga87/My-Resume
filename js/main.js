jQuery(document).ready(function($) {
	/*--scroll down--*/
	function scrollMenu(targetElement){
		$('html, body').animate({
	        scrollTop: $('#'+targetElement).offset().top-60
	    }, 2000);
	}	
	$(".btn-menu").on("click", function(){
		var targetElement = $(this).data('targetmenu');
		scrollMenu(targetElement);
		return false;
	});
	
	/*---Fix menu----*/
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    
	    //console.log(scroll)
	    if(scroll > 700 ){
		        $('.links').addClass('fix');
		    }else {
		    	$('.links').removeClass("fix");
		  }
	});
});


