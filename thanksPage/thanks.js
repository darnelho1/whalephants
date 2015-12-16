// Button handler
$('#sigButton').on('click', function() {
	$('#thanksDiv').append('<p class="signature">'+$('#thanksIn').val()+'</p>');
	$('input').remove();
	$('#sigButton').remove();
});

// Enter keycode submit
$('#thanksIn').keypress(function(event){
	if(event.keyCode === 13) {
		event.preventDefault();
		$('#sigButton').click();
	}
})