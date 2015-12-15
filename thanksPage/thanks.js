// button handler
$('#sigButton').on('click', function() {
	$('#thanksDiv').append('<p class="signature">'+$('#thanksIn').val()+'</p>');
	$('input').remove();
	$('#sigButton').remove();
});