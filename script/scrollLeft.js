
$(document).ready(function(){
//scroll-left

	$(window).scroll(function(){

		var scrollLeft = $(this).scrollLeft();
		
		if (scrollLeft > $('#logo_anchor').offset().left) {
			$('#logo').addClass('sticky');

			$('#menu a').css({
				'color' : 'white'
			});

			$('#wave').removeClass('bounceIn');

			$('#wave').removeClass('border');


		} else {
			$('#logo').removeClass('sticky');

			$('#wave').addClass('bounceIn');

			$('#wave').addClass('border');

			$('#menu a').css({
				'color' : 'white'
			});			


		};

	});//end-scroll-left

});//end-function