function pageHeight(){
	$('.containerRow').css({ 'min-height': $(window).innerHeight()-180 });
}
$(document).foundation();
$(document).ready(function(){
	pageHeight();
	/*$(window).resize(function(){
		window.location.href = window.location.href;
		pageHeight();
		});*/
});