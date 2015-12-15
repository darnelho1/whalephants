//form object constructor
var userMessage = function(fname, lname, email, message) {
	this.fname = fname;
	this.lname = lname;
	this.email = email;
	this.message = message;
}

//event listener for button
$submitClick = $('#submitForm').on('click', function(){
	var fname = $('#fnameIn').val();
	var lname = $('#lnameIn').val();
	var email = $('#emailIn').val();
	var message = $('#messageIn').val();

	if (fname&&lname&&email&&message) {
	var user = new userMessage(fname, lname, email, message);
	$.ajax({
		url:'http://localhost:3000/users',
		type:"POST",
		data: JSON.stringify(user),
		processData: false,
		contentType: "application/json; charset=UTF-8",
		complete: function() { console.log('done') }
	});
	console.log(user);

	$('#divInner').remove();
	$('form').remove();
	$('button').remove();
	$('#messageSent').html('Your message has been sent!<br></br>We will reply as soon as we can.</p>')

	}else {
		$('#validateP').html('<p>Please fill ALL required fields!</p>')
	}
});
