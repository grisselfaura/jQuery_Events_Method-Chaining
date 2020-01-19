$(document).ready(function() {
 
	// hides/shows paragraphs when either button is clicked
	$('#button2').click(function() {
 		$('#para2').hide(2000).show(2000);
	});
		// fadeIn() / fadeOut() paragraphs when either button is clicked
	$('#button2').dblclick(function() {
 		$('#para2').fadeIn(slow, 0.5).fadeOut(slow,  0.5)
	});

}); 
