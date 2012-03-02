/* Author: Jonathan Fielding */

$('.tab_box div').not(':first').hide();
$('.tab_box menu a').click(function(){
	var url = $(this).attr('href');
	$('.tab_box div').hide();
	$(url).show();
	return false;
});


