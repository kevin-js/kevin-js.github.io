$(document).ready(function(){
	$('#my-nav').hide();
	$('#splash-header').hide();
	$('#scroll-down').hide();
	$(function(){
		$('#hello').typed({
			strings: ['Hey there!', 'Welcome to my little corner of the internet.', 'Here, you can learn about me and check out my portfolio, resume, and hobbies.', 'Enjoy!'],
			typeSpeed: 50
		});
	});

	var imgs = ['cinqueterre.jpg', 'malibu.jpg', 'canals.jpg', 'venezia.jpg', 'pompeii.jpg'];
	var i = 0;

	var timer = setInterval(function(){
		clearInterval(timer);
		i++;
		var currentimg = imgs[i % imgs.length];
		document.getElementsByTagName('body')[0].style.backgroundImage = 'url(static/img/' + currentimg + ')';
	}, 30000);
	
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
