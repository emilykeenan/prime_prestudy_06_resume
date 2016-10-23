$(document).ready(function() {
	$('.homebutton').on('click', function() {
		$('.contact').hide();
		$('main').hide();
	});
	$('.resumebutton').on('click', function() {
		$('.contact').hide();
		$('main').slideDown();
	});
	$('.contactbutton').on('click', function() {
		$('main').hide();
		$('.contact').slideDown();
	});
});

