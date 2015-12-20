var wordsPlayed = [];
var gamesPlayed = 0;
var game = function(){
  gamesPlayed += 1;
var used = []; // used letters
var checkLetter = []; // all letters guessed
var number = 0; // what word to generate
var imageCounter = 0; // checks what image to put in
// array of images for game
var hangManImages = ['hangManImages/bmi1.jpg','hangManImages/bmi2.jpg','hangManImages/bmi3.jpg','hangManImages/bmi4.jpg','hangManImages/bmi5.jpg', 'hangManImages/bmi6.jpg', 'hangManImages/bmi7.jpg', 'hangManImages/bmi8.jpg', 'hangManImages/bmi9.jpg', 'hangManImages/bmi10.jpg', 'hangManImages/bmi11.jpg'];
$hangImg = $('#hangImg');

// picks what word to generate
    var play = function(){
      var used = false;
      if(gamesPlayed === 4){
      $('article').html("<p id='gal'>Thank you for playing all the words!</p><div id='moz'><video class='rotate' hight='400px' width='400px' autoplay> <source src='./hangManImages/finalWin.m4v' type='video/mp4'></div>");
      $('article').css('-webkit-justify-content', 'flex-start');
      $('article').css('justify-content', 'flex-start');
      $('#gal').css('width', '600px');
      $('#gal').css('margin-bottom', '0')
      $('video').css('margin-top', '0');
      $("video").prop("volume", 0.3);
      }
      else{
        console.log(gamesPlayed);
    number = Math.floor(Math.random() * 3) + 1;
    wordsPlayed.forEach(function(g){
         if(number === g){
          used = true;
         }
    });
    if(used === true){
      play();
    }
    else{
    wordsPlayed.push(number);
    // word show
    if(number === 1){
      // letter boxes for word
      $('#textBox').append("<p class ='letter' id='letter1'></p><p class ='letter' id='letter2'></p><p class ='letter' id='letter3'></p><p class ='letter' id='letter4'></p>");
      // hint
      $('#hint').text('I want to go to a ...');
      // text box
      $('#guess1').css("visibility", "visible");
      // removes other text boxes
      $('#guess2').remove();
      $('#guess3').remove();
   }
   // word playa
   else if(number === 2){
    // letter boxes for word
      $('#textBox').append("<p class ='letter' id='playa1'></p><p class ='letter' id='playa2'></p><p class ='letter' id='playa3'></p><p class ='letter' id='playa4'></p><p class ='letter' id='playa5'></p>");
      // hint
      $('#hint').text('This place we call home sits on the ...');
      // text box
      $('#guess2').css("visibility", "visible");
      // removes other text boxes
      $('#guess1').remove();
      $('#guess3').remove();
    }
    // word burning man
    else if(number === 3){
      // letter boxes for word
      $('#textBox').append("<p class ='letter' id='bm1'></p><p class ='letter' id='bm2'></p><p class ='letter' id='bm3'></p><p class ='letter' id='bm4'></p><p class ='letter' id='bm5'></p><p class ='letter' id='bm6'></p> <p class ='letter' id='bm7'></p><p class ='letter' id='bm8'></p><p class ='letter' id='bm9'></p><p class ='letter' id='bm10'></p>");
      // hint
      $('#hint').text('Made of wood ...');
      // text box
      $('#guess3').css("visibility", "visible");
      // removes other text boxes
      $('#guess1').remove();
      $('#guess2').remove();
    }
};
}
}
play();
//// show word function
$('#guess1').on('change', function(){
  $guess1 = $('#guess1').val().toLowerCase();
  var checker = false;
  checkLetter.forEach(function(u){
      if ($guess1 === u){
        alert("You've already tried that letter.");
        $('#guess1').val('');
        checker = true;
      }
});

if (checker === false){
      if(number === 1){
            if($guess1.length > 1){
                alert('Please guess only one letter at a time');
                $('#guess1').val('');
            }
            else if($guess1 === 's'){
                $('#letter1').replaceWith('<p>s</p>');
                $('#guess1').val('');
                checkLetter.push($guess1);
                finished1();
            }
            else if($guess1 === 'h'){
                $('#letter2').replaceWith('<p>h</p>');
                $('#guess1').val('');
                checkLetter.push($guess1);
                finished1();
            }
            else if($guess1 === 'o'){
                $('#letter3').replaceWith('<p>o</p>');
                $('#guess1').val('');
                checkLetter.push($guess1);
                finished1();
            }
            else if($guess1 === 'w'){
                $('#letter4').replaceWith('<p>w</p>');
                $('#guess1').val('');
                checkLetter.push($guess1);
                finished1();
            }
            else{
                used.push($guess1);
                checkLetter.push($guess1);
                var array = used.map(function(l){
                var f = ' ' + l;
                return  f;
                });
                $('#usedLetters').text(array);
                $('#guess1').val('');
                var image = hangManImages[imageCounter]; // image finder
                $hangImg.css({"background-image": "url(" + image + ")"});
                imageCounter++;
                if(imageCounter === 11){
                    $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                    $hangImg.css({"-webkit-filter": "invert(0%)"});
                    $hangImg.css({'filter': 'invert(0%)'});
                    $hangImg.css('background-size', '300px 400px');
                    $('p2').remove();
                    $('#gal').remove();
                    $('input').remove();
                }
            }
      }
}
});
var finished1 = function(){
  if (($('#letter1').length === 0) && ($('#letter2').length === 0) && ($('#letter3').length === 0) && ($('#letter4').length === 0)){
      $('#usedLetters').replaceWith('<button id="nextGame">Next Game</button>');
      $hangImg.replaceWith('<video width="400" height="400" autoplay> <source src="./hangManImages/showWin.m4v" type="video/mp4">');
      $("video").prop("volume", 0.3);
      $hangImg.css({"-webkit-filter": "invert(0%)"});
      $hangImg.css({'filter': 'invert(0%)'});
      $hangImg.css('background-size', '300px 400px');
      $('p2').replaceWith('');
      $('#gal').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>');
      $('input').replaceWith('');
      $('#nextGame').on('click', function(){
          $hangImg.css({"-webkit-filter": "invert(0%)"});
          $hangImg.css({'filter': 'invert(0%)'});
          $hangImg.css('background-size', '300px 400px');
          $('article').html("<img id= 'hangImg'><p id='hint'></p><div id='textBox'></div><div id='inputs'><input class ='letter' id='guess1'><input class ='letter' id='guess2'><input class ='letter' id='guess3'><p id='gal'>Guess a letter!!</p></div><p2><u>Wrong Letters</u></p2><p id='usedLetters'></p>");
          game();
});
  }
}

$('#guess2').on('change', function(){
  $guess2 = $('#guess2').val().toLowerCase();
  var checker = false;
  checkLetter.forEach(function(u){
      if ($guess2 === u){
        alert("You've already tried that letter.");
        $('#guess2').val('');
        checker = true;
      }
});

if (checker === false){
      if(number === 2){
          if($guess2.length > 1){
            alert('Please guess only one letter at a time');
            $('#guess2').val('');
          }
          else{
            if($guess2 === 'p'){
              $('#playa1').replaceWith('<p>p</p>');
              $('#guess2').val('');
              checkLetter.push($guess2);
              finished2();
            }
            else if($guess2 === 'l'){
              $('#playa2').replaceWith('<p>l</p>');
              $('#guess2').val('');
              checkLetter.push($guess2);
              finished2();
            }
            else if($guess2 === 'a'){
              $('#playa3').replaceWith('<p>a</p>');
              $('#playa5').replaceWith('<p>a</p>');
              $('#guess2').val('');
              checkLetter.push($guess2);
              finished2();
            }
            else if($guess2 === 'y'){
              $('#playa4').replaceWith('<p>y</p>');
              $('#guess2').val('');
              checkLetter.push($guess2);
              finished2();
            }
            else{
              used.push($guess2);
              checkLetter.push($guess2);
              var array = used.map(function(l){
                var f = ' ' + l;
                return  f;
              });
              $('#usedLetters').text(array);
              $('#guess2').val('');
              var image = hangManImages[imageCounter];
              $hangImg.css({"background-image": "url(" + image + ")"});
                imageCounter++;
                if(imageCounter === 11){
                    $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                    $hangImg.css({"-webkit-filter": "invert(0%)"});
                    $hangImg.css({'filter': 'invert(0%)'});
                    $hangImg.css('background-size', '300px 400px');
                    $('p2').remove();
                    $('#gal').remove();
                    $('input').remove();
                }
            }
          }
      }
  }
});

var finished2 = function(){
  if (($('#playa1').length === 0) && ($('#playa2').length === 0) && ($('#playa3').length === 0) && ($('#playa4').length === 0) && ($('#playa5').length === 0)){
      $('#usedLetters').replaceWith('<button id="nextGame">Next Game</button>');
      $hangImg.css({"background-image": "url(./hangManImages/playaWin.jpg)"});
      $hangImg.css({"-webkit-filter": "invert(0%)"});
      $hangImg.css({'filter': 'invert(0%)'});
      $hangImg.css('background-size', '300px 400px');
      $('p2').replaceWith('');
      $('#gal').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>');
      $('input').replaceWith('');
      $('#nextGame').on('click', function(){
          $hangImg.css({"-webkit-filter": "invert(0%)"});
          $hangImg.css({'filter': 'invert(0%)'});
          $hangImg.css('background-size', '300px 400px');
          $('article').html("<img id= 'hangImg'><p id='hint'></p><div id='textBox'></div><div id='inputs'><input class ='letter' id='guess1'><input class ='letter' id='guess2'><input class ='letter' id='guess3'><p id='gal'>Guess a letter!!</p></div><p2><u>Wrong Letters</u></p2><p id='usedLetters'></p>");
          game();
      });
  }
}

$('#guess3').on('change', function(){
  $guess3 = $('#guess3').val().toLowerCase();
  var checker = false;
  checkLetter.forEach(function(u){
      if ($guess3 === u){
        alert("You've already tried that letter.");
        $('#guess3').val('');
        checker = true;
      }
});

  if (checker === false){
      if(number === 3){
          if($guess3.length > 1){
            alert('Please guess only one letter at a time');
            $('#guess3').val('');
          }
          else{
            if($guess3 === 'b'){
              $('#bm1').replaceWith('<p>b</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else if($guess3 === 'u'){
              $('#bm2').replaceWith('<p>u</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else if($guess3 === 'r'){
              $('#bm3').replaceWith('<p>r</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else if($guess3 === 'n'){
              $('#bm4').replaceWith('<p>n</p>');
              $('#bm6').replaceWith('<p>n</p>');
              $('#bm10').replaceWith('<p>n</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else if($guess3 === 'i'){
              $('#bm5').replaceWith('<p>i</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else if($guess3 === 'g'){
              $('#bm7').replaceWith('<p>g</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else if($guess3 === 'm'){
              $('#bm8').replaceWith('<p>m</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else if($guess3 === 'a'){
              $('#bm9').replaceWith('<p>a</p>');
              $('#guess3').val('');
              checkLetter.push($guess3);
              finished3();
            }
            else{
              used.push($guess3);
              checkLetter.push($guess3);
              var array = used.map(function(l){
                var f = ' ' + l;
                return  f;
              });
              $('#usedLetters').text(array);
              $('#guess3').val('');
              var image = hangManImages[imageCounter];
              $hangImg.css({"background-image": "url(" + image + ")"});
                imageCounter++;
                if(imageCounter === 11){
                    $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                    $hangImg.css({"-webkit-filter": "invert(0%)"});
                    $hangImg.css({'filter': 'invert(0%)'});
                    $hangImg.css('background-size', '300px 400px');
                    $('p2').remove();
                    $('#gal').remove();
                    $('input').remove();
                }
            }
          }
      }
  }
});

var finished3 = function(){
  if (($('#bm1').length === 0) && ($('#bm2').length === 0) && ($('#bm3').length === 0) && ($('#bm4').length === 0) && ($('#bm5').length === 0) && ($('#bm6').length === 0) && ($('#bm6').length === 0) && ($('#bm7').length === 0) && ($('#bm8').length === 0) && ($('#bm9').length === 0) && ($('#bm10').length === 0)){
      $('#usedLetters').replaceWith('<button id="nextGame">Next Game</button>');
      $hangImg.replaceWith('<video class="rotate" width="400" height="400" autoplay> <source src="./hangManImages/fireworksWin.m4v">');
      $("video").prop("volume", 0.3);
      $hangImg.css({"-webkit-filter": "invert(0%)"});
      $hangImg.css({'filter': 'invert(0%)'});
      $hangImg.css('background-size', '300px 400px');
      $('p2').replaceWith('');
      $('#gal').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>');
      $('input').replaceWith('');
      $('#nextGame').on('click', function(){
          $hangImg.css({"-webkit-filter": "invert(0%)"});
          $hangImg.css({'filter': 'invert(0%)'});
          $hangImg.css('background-size', '300px 400px');
          $('article').html("<img id= 'hangImg'><p id='hint'></p><div id='textBox'></div><div id='inputs'><input class ='letter' id='guess1'><input class ='letter' id='guess2'><input class ='letter' id='guess3'><p id='gal'>Guess a letter!!</p></div><p2><u>Wrong Letters</u></p2><p id='usedLetters'></p>");
          game();

});
  }
}
};
game();

