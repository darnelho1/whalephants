var deadline = 'september 6 2016 21:00:00';
function getTimeRemaining (deadline){
  var t = Date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor((t/1000)%60);
  var minutes = Math.floor((t/1000/60)%60);
  var hours = Math.floor((t/(1000*60*60))%24);
  var days = Math.floor(t/(1000*60*60*24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateClock(){
    $clock = $('clock');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var t = getTimeRemaining(deadline);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = ('0' + t.minutes). slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0){
      clearInterval(timeinterval);
    }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);

$('#kids').on('click', function(){
   window.open('./countDownImage/kids.jpg', '_blank');
});

$('#bmimg').on('click', function(){
  window.open('http://www.burningman.org');
});

$('#drink').on('click', function(){
  window.open('../votePage/vote.html', '_self');
});

$('#welcome').on('click', function(){
  window.open('http://tickets.burningman.org', '_blank')
});

$('#robot').on('click', function(){
   window.open('./countDownImage/robot.jpg', '_blank');
});
