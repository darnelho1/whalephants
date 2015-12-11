var used = []; // used letters
var number = 0; // what word to generate
var imageCounter = 0; // checks what image to put in
// array of images for game
var hangManImages = ['hangManImages/bmi1.jpg','hangManImages/bmi2.jpg','hangManImages/bmi3.jpg','hangManImages/bmi4.jpg','hangManImages/bmi5.jpg', 'hangManImages/bmi6.jpg', 'hangManImages/bmi7.jpg', 'hangManImages/bmi8.jpg', 'hangManImages/bmi9.jpg', 'hangManImages/bmi10.jpg', 'hangManImages/bmi11.jpg'];
$hangImg = $('#hangImg');

// picks what word to generate
$(document).ready(function(){
    number = Math.floor(Math.random() * 3) + 1;
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
});


// var check = used.forEach(function(u){
//         if ($guess1 === u){
//         alert("You've already tried that letter.");
//         }
//     });

//// show word function
$('#guess1').on('change', function(){
  $guess1 = $('#guess1').val().toLowerCase();
        if(number === 1){
            if($guess1.length > 1){
                alert('Please guess only one letter at a time');
                $('#guess1').val('');
            }
            else if($guess1 === 's'){
                $('#letter1').replaceWith('<p>s</p>');
                $('#guess1').val('');
                finished1();
            }
            else if($guess1 === 'h'){
                $('#letter2').replaceWith('<p>h</p>');
                $('#guess1').val('');
                finished1();
            }
            else if($guess1 === 'o'){
                $('#letter3').replaceWith('<p>o</p>');
                $('#guess1').val('');
                finished1();
            }
            else if($guess1 === 'w'){
                $('#letter4').replaceWith('<p>w</p>');
                $('#guess1').val('');
                finished1();
            }
            else{
                used.push($guess1);
                var array = used.map(function(l){
                var f = ' ' + l;
                return  f;
                });
                $('#usedLetters').text(array);
                $('#guess1').val('');
                $hangImg.css("background-image: url("hangManImages[imageCounter]");");
                imageCounter++;
                if(imageCounter === 10){
                    $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                    $hangImg.css("-webkit-filter" "invert(0%)", 'filter' 'invert(0%)');
                    $('p2').remove();
                    $('#gal').remove();
                    $('input').remove();
                }
            }
      }
});

var finished1 = function(){
  if (($('#letter1').length === 0) && ($('#letter2').length === 0) && ($('#letter3').length === 0) && ($('#letter4').length === 0)){
      $('#usedLetters').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>')
      $('p2').remove();
      $('#gal').remove();
      $('input').remove();
  }
}

$('#guess2').on('change', function(){
  $guess2 = $('#guess2').val().toLowerCase();
      if(number === 2){
          if($guess2.length > 1){
            alert('Please guess only one letter at a time');
            $('#guess2').val('');
          }
          else{
            if($guess2 === 'p'){
              $('#playa1').replaceWith('<p>p</p>');
              $('#guess2').val('');
              finished2();
            }
            else if($guess2 === 'l'){
              $('#playa2').replaceWith('<p>l</p>');
              $('#guess2').val('');
              finished2();
            }
            else if($guess2 === 'a'){
              $('#playa3').replaceWith('<p>a</p>');
              $('#playa5').replaceWith('<p>a</p>');
              $('#guess2').val('');
              finished2();
            }
            else if($guess2 === 'y'){
              $('#playa4').replaceWith('<p>y</p>');
              $('#guess2').val('');
              finished2();
            }
            else{
              used.push($guess2);
              var array = used.map(function(l){
                var f = ' ' + l;
                return  f;
              });
              $('#usedLetters').text(array);
              $('#guess2').val('');
              $hangImg.html("<img src="hangManImages[imageCounter]">");
                imageCounter++;
                if(imageCounter === 10){
                    $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                    $('p2').remove();
                    $('#gal').remove();
                    $('input').remove();
                }
            }
          }
      }
});

var finished2 = function(){
  if (($('#playa1').length === 0) && ($('#playa2').length === 0) && ($('#playa3').length === 0) && ($('#playa4').length === 0) && ($('#playa5').length === 0)){
      $('#usedLetters').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>')
      $('p2').remove();
      $('#gal').remove();
      $('input').remove();

  }
}

$('#guess3').on('change', function(){
  $guess3 = $('#guess3').val().toLowerCase();
      if(number === 3){
          if($guess3.length > 1){
            alert('Please guess only one letter at a time');
            $('#guess3').val('');
          }
          else{
            if($guess3 === 'b'){
              $('#bm1').replaceWith('<p>b</p>');
              $('#guess3').val('');
              finished3();
            }
            else if($guess3 === 'u'){
              $('#bm2').replaceWith('<p>u</p>');
              $('#guess3').val('');
              finished3();
            }
            else if($guess3 === 'r'){
              $('#bm3').replaceWith('<p>r</p>');
              $('#guess3').val('');
              finished3();
            }
            else if($guess3 === 'n'){
              $('#bm4').replaceWith('<p>n</p>');
              $('#bm6').replaceWith('<p>n</p>');
              $('#bm10').replaceWith('<p>n</p>');
              $('#guess3').val('');
              finished3();
            }
            else if($guess3 === 'i'){
              $('#bm5').replaceWith('<p>i</p>');
              $('#guess3').val('');
              finished3();
            }
            else if($guess3 === 'g'){
              $('#bm7').replaceWith('<p>g</p>');
              $('#guess3').val('');
              finished3();
            }
            else if($guess3 === 'm'){
              $('#bm8').replaceWith('<p>m</p>');
              $('#guess3').val('');
              finished3();
            }
            else if($guess3 === 'a'){
              $('#bm9').replaceWith('<p>a</p>');
              $('#guess3').val('');
              finished3();
            }
            else{
              used.push($guess3);
              var array = used.map(function(l){
                var f = ' ' + l;
                return  f;
              });
              $('#usedLetters').text(array);
              $('#guess3').val('');
              $hangImg.html("<img src="hangManImages[imageCounter]">");
                imageCounter++;
                if(imageCounter === 10){
                    $('#usedLetters').replaceWith('<p id="winner">Awww good try. Better Luck next time.</p>')
                    $('p2').remove();
                    $('#gal').remove();
                    $('input').remove();
                }
            }
          }
      }
});

var finished3 = function(){
  if (($('#bm1').length === 0) && ($('#bm2').length === 0) && ($('#bm3').length === 0) && ($('#bm4').length === 0) && ($('#bm5').length === 0) && ($('#bm6').length === 0) && ($('#bm6').length === 0) && ($('#bm7').length === 0) && ($('#bm8').length === 0) && ($('#bm9').length === 0) && ($('#bm10').length === 0)){
      $('#usedLetters').replaceWith('<p id="winner">You Got It. Nice Game!!!</p>')
      $('p2').remove();
      $('#gal').remove();
      $('input').remove();
  }
}
