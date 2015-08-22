$(document).ready(function(){
	$('#my-nav').hide();
	$('#splash-header').hide();
	$('#scroll-down').hide();
	$(function(){
		$('#hello').typed({
			strings: ['Hey there!', 'Welcome to my little corner of the internet.', 'Here, you can learn about who I am and check out my portfolio, resume, and hobbies.', 'Enjoy!'],
			startDelay: 3000,
			typeSpeed: 20,
		});
	});
	
	var lastScroll = 0;
	$(window).scroll(function(event){
		var currScroll = $(this).scrollTop();
		if(currScroll < lastScroll){
			$('#my-nav').slideDown(200);
		}else{
			$('#my-nav').slideUp(200);
		}
		lastScroll = currScroll;
	});

	$('#scrolldown-button').click(function(){
		$('body,html').animate({
			scrollTop: $('#about').offset().top
		});
		$('#scrolldown-button').hide();	
	});
});

function jumpToSection(event, targetSection){
 	event.preventDefault();
  	var controlString = null;
  	switch(targetSection){
    	case 's1':
    		controlString = '#about';
    		break;
    	case 's2':
    		controlString = '#work';
      	break;
    	case 's3':
      	controlString = '#contact';
    		break;
      case 'name':
        controlString = '#splash';
        break;
    	default:
      	controlString = '#';
		}
	var sectionOffset = $(controlString).offset().top;
	$('body,html').animate({
		scrollTop : sectionOffset + 1
	}, 1000);
}