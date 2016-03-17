$(document).ready(function(){
	var pages = {
		'macbook' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>',
		'phone' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>',
		'headphones' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div id="music-player"><iframe scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/55408751&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div></div>',
		'coffee' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div id="coffee-text-body"><pre>private class JavaJoke extends CSPun {\n&nbsp;public static final String UNNECCESSARILY_VERBOSE_VARIABLE_DECLARATION_THAT_MAKES_ME_LOOK_LIKE_IM_YELLING_BECAUSE_JAVA_MAKES_ME_DO_IT = "sup";\n\n&nbsp;public static void main(String[] args){\n&nbsp;&nbsp;try {\n&nbsp;&nbsp;&nbsp;System.out.println("Insert Java joke here: ");\n&nbsp;&nbsp;&nbsp;Scanner inputScanner = new Scanner(System.in);\n\n&nbsp;&nbsp;&nbsp;/*\n&nbsp;&nbsp;&nbsp;note: I realize in actual Java I should check for hasNextLine()\n&nbsp;&nbsp;&nbsp;first, I hope I\'m better at software dev than jokes\n&nbsp;&nbsp;&nbsp;*/\n&nbsp;&nbsp;&nbsp;String joke = inputScanner.nextLine();\n&nbsp;&nbsp;&nbsp;System.out.println("haha");\n\n&nbsp;&nbsp;} catch (JokeNotFunnyException e) {\n&nbsp;&nbsp;&nbsp;System.err.println("...*facepalm* get out of here Kevin: " + e.dontGetMessage());\n&nbsp;&nbsp;}\n&nbsp;}\n}</pre></div></div>',
		'photo' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>',
		'notebook' : '<div id="layover" class="main-content"><div id="exit"><a id="exit-button" href=""><img src="static/img/exit.png"></a></div><div><h1>Coming Soon!</h1></div></div>'
	}
	$('#notebook-page').click(function(e){
		e.preventDefault();
		$('body').append(pages['notebook']);
	});

	$('#macbook-page').click(function(e){
		e.preventDefault();
		$('body').append(pages['macbook']);
	})

	$('#headphones').click(function(e){
		e.preventDefault();
		$('body').append(pages['headphones']);
	})

	$('#phone').click(function(e){
		e.preventDefault();
		$('body').append(pages['phone']);
	})

	$('#coffee').click(function(e){
		e.preventDefault();
		$('body').append(pages['coffee']);
	})

	$('#photo').click(function(e){
		e.preventDefault();
		$('body').append(pages['photo']);
	});

	$('#exit-button').click(function(e){
		e.preventDefault();
		$('body').remove('#layover');
	})
});
