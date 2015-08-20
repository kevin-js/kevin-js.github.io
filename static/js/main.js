$(document).ready(function(){
	var imgs = ['canals.jpg', 'malibu.jpg', 'cinqueterre.jpg', 'pompeii.jpg', 'venezia.jpg'];
	var i = 0;

	var timer = setInterval(function(){
		i++;
		var currentimg = imgs[i % imgs.length];
		document.getElementsByTagName('body')[0].style.backgroundImage = 'url(static/img/' + currentimg + ')';
	}, 5000);
	
});

function submitForm(){
	var myForm = document.getElementById('contact-form');
}