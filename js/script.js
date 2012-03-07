/* Author: Jonathan Fielding */

$('.tab_box div').not(':first').hide();
$('.tab_box menu a').click(function(){
	$('.tab_box menu a').removeClass('active');
	$(this).addClass('active');
	var url = $(this).attr('href');
	$('.tab_box div').hide();
	$(url).show();
	return false;
}).first().addClass('active');


