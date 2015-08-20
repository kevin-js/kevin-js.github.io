$(document).ready(function(){
	var imgs = ['canals.jpg', 'malibu.jpg', 'cinqueterre.jpg', 'pompeii.jpg', 'venezia.jpg'];
	var i = 0;

	var timer = setInterval(function(){
		i++;
		var currentimg = imgs[i % imgs.length];
		document.getElementsByTagName('body')[0].style.backgroundImage = 'url(static/img/' + currentimg + ')';
	}, 5000);
	
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
});

function submitForm(){
	var myForm = document.getElementById('contact-form');
}