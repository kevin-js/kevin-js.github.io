function jumpToSection(event, targetSection){
 	event.preventDefault();
  	var controlString = null;
  	switch(targetSection){
    	case "s1":
    		controlString = "#about";
    		break;
    	case "s2":
    		controlString = "#work";
      		break;
    	case "s3":
      		controlString = "#contact";
      		break;
    	default:
      		controlString = "#";
		}
	var sectionOffset = $(controlString).offset().top;
	$("html, body").animate({
		scrollTop : sectionOffset + 1
	}, 1000);
}