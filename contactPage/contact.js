1//form object constructor
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

// Rating
var Rater = {
	r1:0,
	r2:0,
	r3:0,
	r4:0,
	r5:0,
	totalVote:0,
	avg:0
}

// Avg Rating Function
var avgRating = function(){
	var weightedSum = (Rater.r1*1)+(Rater.r2*2)+(Rater.r3*3)+(Rater.r4*4)+(Rater.r5*5);
	var weightedAvg = weightedSum/(Rater.totalVote);
	Rater.avg = weightedAvg;
}

// Rating: Mouse over/out events
$('#r1').mouseover(function(){
	$('#r1').attr('src','images/campStars_hover.jpg');
}).mouseout(function(){
	$('#r1').attr('src','images/campStars_blank.jpg');
});

$('#r2').mouseover(function(){
	$('#r1').attr('src','images/campStars_hover.jpg');
	$('#r2').attr('src','images/campStars_hover.jpg');
}).mouseout(function(){
	$('#r1').attr('src','images/campStars_blank.jpg');
	$('#r2').attr('src','images/campStars_blank.jpg');
})

$('#r3').mouseover(function(){
	$('#r1').attr('src','images/campStars_hover.jpg');
	$('#r2').attr('src','images/campStars_hover.jpg');
	$('#r3').attr('src','images/campStars_hover.jpg');
}).mouseout(function(){
	$('#r1').attr('src','images/campStars_blank.jpg');
	$('#r2').attr('src','images/campStars_blank.jpg');
	$('#r3').attr('src','images/campStars_blank.jpg');
})

$('#r4').mouseover(function(){
	$('#r1').attr('src','images/campStars_hover.jpg');
	$('#r2').attr('src','images/campStars_hover.jpg');
	$('#r3').attr('src','images/campStars_hover.jpg');
	$('#r4').attr('src','images/campStars_hover.jpg');
}).mouseout(function(){
	$('#r1').attr('src','images/campStars_blank.jpg');
	$('#r2').attr('src','images/campStars_blank.jpg');
	$('#r3').attr('src','images/campStars_blank.jpg');
	$('#r4').attr('src','images/campStars_blank.jpg');
})

$('#r5').mouseover(function(){
	$('#r1').attr('src','images/campStars_hover.jpg');
	$('#r2').attr('src','images/campStars_hover.jpg');
	$('#r3').attr('src','images/campStars_hover.jpg');
	$('#r4').attr('src','images/campStars_hover.jpg');
	$('#r5').attr('src','images/campStars_hover.jpg');
}).mouseout(function(){
	$('#r1').attr('src','images/campStars_blank.jpg');
	$('#r2').attr('src','images/campStars_blank.jpg');
	$('#r3').attr('src','images/campStars_blank.jpg');
	$('#r4').attr('src','images/campStars_blank.jpg');
	$('#r5').attr('src','images/campStars_blank.jpg');
})

// Rating: Click Events
$('#r1').on('click', function(){
	Rater.r1++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
});

$('#r2').on('click', function(){
	Rater.r2++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
});

$('#r3').on('click', function(){
	Rater.r3++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
});

$('#r4').on('click', function(){
	Rater.r4++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
});

$('#r5').on('click', function(){
	Rater.r5++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
});

// comment js
$('#commentButton').click(function() {
	$name = $('#name');
	$comment = $('#userInput');
	$('#commentsMade').append('<p>'+$name.val() + ':   ' +$comment.val()+'</p>');
	$name.val('');
	$comment.val('');
})

