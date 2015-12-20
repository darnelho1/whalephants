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

	$('#divInner').html('<iframe width="auto" height="260" src="https://www.youtube.com/embed/QP-dwotCIvM?autoplay=1" frameborder="0" allowfullscreen></iframe><br/><p3>Thank you for getting in contact with us. We will get back to you as soon as possible. For now enjoy this Drone Fly over <u><b>by: Fest300</b></u>.</p3>');

	}else {
		$('#required').text('Please fill ALL required fields!');
		$('#required').addClass('messageInstruct reqText');
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
var starBlank = 'images/campStars_blank.jpg';
var starHover = 'images/campStars_hover.jpg';

$('#r1').mouseover(function(){
	$('#r1').attr('src', starHover);
}).mouseout(function(){
	$('#r1').attr('src',starBlank);
});

$('#r2').mouseover(function(){
	$('#r1').attr('src', starHover);
	$('#r2').attr('src', starHover);
}).mouseout(function(){
	$('#r1').attr('src', starBlank);
	$('#r2').attr('src', starBlank);
})

$('#r3').mouseover(function(){
	$('#r1').attr('src', starHover);
	$('#r2').attr('src', starHover);
	$('#r3').attr('src', starHover);
}).mouseout(function(){
	$('#r1').attr('src', starBlank);
	$('#r2').attr('src', starBlank);
	$('#r3').attr('src', starBlank);
})

$('#r4').mouseover(function(){
	$('#r1').attr('src', starHover);
	$('#r2').attr('src', starHover);
	$('#r3').attr('src', starHover);
	$('#r4').attr('src', starHover);
}).mouseout(function(){
	$('#r1').attr('src', starBlank);
	$('#r2').attr('src', starBlank);
	$('#r3').attr('src', starBlank);
	$('#r4').attr('src', starBlank);
})

$('#r5').mouseover(function(){
	$('#r1').attr('src', starHover);
	$('#r2').attr('src', starHover);
	$('#r3').attr('src', starHover);
	$('#r4').attr('src', starHover);
	$('#r5').attr('src', starHover);
}).mouseout(function(){
	$('#r1').attr('src', starBlank);
	$('#r2').attr('src', starBlank);
	$('#r3').attr('src', starBlank);
	$('#r4').attr('src', starBlank);
	$('#r5').attr('src', starBlank);
})

//rate choice event
function rateChoice() {
	var avgRate = Math.floor(Rater.avg);
	$('.rateTitle').remove();
	$('#rateDiv').html('<h3 class="rateTitle">Average Rating: '+avgRate+'/5</h3>');
}

// Rating: Click Events
$('#r1').on('click', function(){
	Rater.r1++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
	rateChoice();
});

$('#r2').on('click', function(){
	Rater.r2++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
	rateChoice();
});

$('#r3').on('click', function(){
	Rater.r3++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
	rateChoice();
});

$('#r4').on('click', function(){
	Rater.r4++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
	rateChoice();
});

$('#r5').on('click', function(){
	Rater.r5++;
	Rater.totalVote++;
	avgRating();
	console.log(Rater);
	rateChoice();
});

// comment js
$('#commentButton').click(function() {
	$name = $('#name');
	$comment = $('#userInput');
	$('#userDone').prepend('<p class = "usercomment">'+$name.val() + ':   ' +$comment.val()+'</p>');
	$name.val('');
	$comment.val('');
})

