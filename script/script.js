
$(document).ready(function(){


//start-bg-slider

	$(function(){
		$('#bg img:gt(0)').hide();

		setInterval(function(){
		$('#bg :first-child').hide().next('img').show().end().appendTo('#bg');
		}, 4000);
	});

//end-bg-slider



//start-smooth-slider

	$('a').click(function(){
		$('html, body').animate({
			scrollLeft: $( $(this).attr('href') ).offset().left
		}, 500);

		return false;

	});
//end-smooth-slider





//start-video-footer-hide
/*
	var scrollLeftVideo = $(this).scrollLeft();

	if (scrollLeftVideo >= $('#video').offset().left) {

		$('#footer').animate({
			   left: 200,
			   height: ($(this).height()*0),
			   width: ($(this).width()*0)

		}, 1000);

		$('#footer span').css({
				'display' : 'none'
		});

	} else {

		$('#footer').animate({
			   left: 10,
			   height: ($(this).height()*10),
			   width: ($(this).width()*10)

		}, 1000);


	};

    */
//end-video-footer-hide
		



//start-about-toggle
    
    $('#about ul li:nth-child(1)').click(function(){
        $('.cast').slideToggle();

        $('.filmmaker , .story').slideUp();
        return false;
    });

    $('#about ul li:nth-child(2)').click(function(){
        $('.filmmaker').slideToggle();

        $('.cast , .story').slideUp();
        return false;
    });

   $('#about ul li:nth-child(3)').click(function(){
        $('.story').slideToggle();

        $('.cast , .filmmaker').slideUp();
        return false;
    });

//end-about-toggle



/*--
//start-galley-slider-show

    //gallery slider

    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('#slides', $slider);
    var $slides = $('.pic', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = -1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


//end-galley-slider-show
--*/


});//end-function



