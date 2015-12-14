var drinks = []; //object array for storing drinks
var drinkStore = [];
var counter = 1;
$imageId = $('#content');
$searchBox = $('#searchBox');

//Object constructor to create drink objects

var Mixer = function(drinkName,drinkImage,primaryLiqour,ingredients,recipe,garnish){
  this.drinkName = drinkName;
  this.drinkImage = drinkImage;
  this.primaryLiqour = primaryLiqour;
  this.ingredients = ingredients;
  this.recipe = recipe;
  this.garnish = garnish;
  this.drinkVotes = 0;
  this.drinkDay = '';
  this.drinkId = counter++;
      drinks.push(this);
      drinkStore.push(this);
  //console.log(this);
}

var tracker = {
  votes: [],

};


//Drink Objects
var martini = new Mixer('Martini','images/martini.jpg',['Gin'],['1/2 oz (1 part) Dry vermouth', '3 oz (6 parts) Gin'],'Preparation: Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',['Olive','Lemon twist']);

var manhattan = new Mixer('Manhattan','images/manhattan.jpg',['Rye'],[' 2 oz Rye Whisky', '1 oz Italian vermouth', '2 dashes Angostura bitters'],'Preparation: Pour all ingredients into mixing glass stir over ice, strained into a chilled glass, garnished, and served straight up.','Cherry');

var mojito = new Mixer('Mojito','images/mojito.jpg',['Rum'],['1 1/2 oz White rum', '6 leaves of Mint', 'Soda Water', '1 oz Fresh lime juice', '2 teaspoons Sugar'],'Preparation: Mint sprigs muddled with sugar and lime juice. Rum added and topped with soda water. Garnished with sprig of mint leaves. Served with a straw.',['Sprig of mint', 'Yerba buena']);

var negroni = new Mixer('Negroni', 'images/negroni.jpg', ['Gin','Vermouth','Campari'],['1 oz (1 part) Gin', '1 oz (1 part) Campari', '1 oz (1 part) Sweet red Vermouth'],'Preparation: Stir into glass over ice, garnish and serve.','Orange peel')

var margarita = new Mixer('Margarita','images/margarita.jpg',['Tequila'],['2 oz Tequila', '1 oz Lime juice', '1 oz Cointreau'],'Preparation: Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass (taking care not to dislodge any salt). Garnish and serve over ice.',['Lime slice', 'Salt on the rim']);

var cosmopolitan = new Mixer('Cosmopolitan','images/cosmopolitan.jpg',['Vodka'],['1/2 oz Fresh lime juice', '1 oz Cranberry juice', '1/2 oz Cointreau', '1 1/2 oz Vodka Citron'],'Preparation: Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.',['Lime wedge', 'Lemon slice']);

var oldFashioned =  new Mixer('Old Fashioned','images/oldFashioned.jpg',['Whisky'],['1 1/2 oz Bourbon or Rye whiskey', '2 dashes Angostura bitters', '1 Sugar cube', 'Few dashes plain water'],'Preparation: Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange slice, and a cocktail cherry.',['Orange slice', 'Cocktail cherry']);

var mintJulep = new Mixer('Mint julep','images/mintJulep.jpg',['Bourbon'],['1 teaspoon Powdered sugar', '2 oz. Bourbon whiskey', '2 teaspoons Water', '4 Mint leaves'],'Preparation: In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.',' Mint sprig');

var ginandTonic = new Mixer('Gin and Tonic','images/ginandTonic.jpg',['Gin'],['1 part to 3 parts gin (to taste)', '3 parts tonic water'],'Preparation: In a glass filled with ice cubes, add gin and tonic.','lime');


var sidecar = new Mixer('Sidecar','images/sidecar.jpg',['Brandy'],['2 oz Cognac', '3/4 oz Lemon juice', '3/4 oz Triple sec'],'Preparation: Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.','none');

var bellini = new Mixer('Bellini','images/bellini.jpg',['Prosecco'],['White peaches', '2 oz Fresh peach purée', '4 oz Prosecco'],'Preparation: Pour peach puree into chilled flute, add Prosecco. Stir gently.','Peach Slice');

var whiskeySour = new Mixer ('Whiskey Sour','images/whiskeySour.jpg',['Bourbon'],['1 oz Lemon Juice','1/2 oz Simple Syrup','1 1/2 oz Bourbon','1 egg white'],'Preparation: Shake with ice. Strain into ice-filled old-fashioned glass to serve "on the rocks."', ['cherry','lemon wedge']);

var sazerac = new Mixer ('Sazerac', 'images/sazerac.jpg',['Cognac','Rye Whiskey'],['1/4 oz Absinthe', 'One sugar cube' , '1 1/2 oz Rye whiskey or Cognac', "Three dashes Peychaud's Bitters"],'Lemon Peel');



//function to generate html to place images on screen
function loadImages(){
  drinks.forEach(function(drink){
  $imageId.append("<div  class= 'outerDiv ingredients' id='outerDiv" + drink.drinkId + "'</div>");
  $outerDiv = $('#outerDiv'+drink.drinkId);
  $outerDiv.append("<div class='image' id=drink" + drink.drinkId + "> </div>");
  //console.log(drink.drinkId);
  $('#drink'+drink.drinkId).css({"background-image": "url(" + drink.drinkImage + ")"})
  $('#drink'+drink.drinkId).append("<ul  class = 'ingredients' id='ingredients" + drink.drinkId +"'></ul>")
  $outerDiv.append("<div class='button-p'> <input class ='radiobtn' type='radio' name='"+ drink.drinkName + " ' id='button"+ drink.drinkId + "' value='"+ drink.drinkName +"'>" + "<p>" + drink.drinkName + "</p>" + "</div>")
  $('#button'+drink.drinkId).css({ "display":"flex"})
  }

)
};


//calling the load images function
loadImages();



//function that handles generating the mouse over data that is placed on top of the drink images
function onMousover(){
  drinks.forEach(function(drink){
    $(document).ready(function(){
      $('#drink'+drink.drinkId).mouseenter(function(){
        drink.ingredients.forEach(function(item){
            $('#ingredients'+drink.drinkId).append("<li>" + item + '</li>')
            //console.log('hello');
      })
    })
    });

    $(document).ready(function(){
      $('#drink'+drink.drinkId).mouseleave(function(){
        drink.ingredients.forEach(function(item){
          $('#ingredients'+drink.drinkId).html(' ')
          //console.log('goodbye');
        })
      })
    });
  });
}


//calling the mouse over functions
onMousover();

//couting the number of votes on drinks that have been made.
var bttnCounter = 0;

//function to check if a drink has been voted on
function radio_button_checker(){
  $(document).ready(function(){
    $radios = $(".radiobtn") ;
    //console.log($radios);

    $radios.each(function(radio, val){
      if (val.checked){
        //console.log(radio);
        //console.log(drinks[radio]);
        //tracker.votes.push(drinks[radio]);
        //console.log(tracker.votes);
        bttnCounter++
          //voteChart();
        console.log(bttnCounter);
      }

      if ((bttnCounter > 1) && val.checked){
        tracker.votes.push(drinks[radio]);
        console.log(tracker.votes);
        drinks[radio].drinkVotes++;
        console.log(drinks[radio])

        drinks.forEach(function(drink){
          $greyedDrink = $('#ingredients'+drink.drinkId);
          //$greyedDrink.removeClass('ingredients')
          $greyedDrink.addClass('voteComplete')
          $('#button'+drink.drinkId).attr('disabled', true)
          //console.log($greyedDrink)
          //console.log('done');
        })
      }
      //console.log(val);
    });

    // if (tracker.votes.length > 0){
    //   drinks.forEach(function(drink){
    //     $('#button'+drink.drinkId).attr('disabled', true)
    //   })
    // }
    //console.log(bttnCounter);
  });

};
//listener for button clicks

function buttonListner(){
$(document).ready(function(){
  $(".button-p").click(function(){
      radio_button_checker();
      })
});
}
buttonListner();


function voteChart(){

  //place holder for code for pushing chart


  if(bttnCounter>2){

    console.log('done');
  }
}

//Search Box Function
$searchBox.keyup(function(){
  //On Event create these variables
  $userSearch = $searchBox.val(); //variable containing user search input
  //console.log($userSearch)
  searchArry = [];//array to hold matched drinks
  //console.log(searchArry)

  //Loop to find matched drink name in drink object array
  drinks.forEach(function(drink){
    if ((drink.drinkName.toUpperCase().indexOf($userSearch.toUpperCase())> -1) && (drink.drinkName.toUpperCase().charAt(0) === $userSearch.toUpperCase().charAt(0)))
        {
            //console.log(drink);
            searchArry.push(drink);//push matched drinks to array
        }

    drink.primaryLiqour.forEach(function(item){
      if ((item.toUpperCase().indexOf($userSearch.toUpperCase())>-1) && (item.toUpperCase().charAt(0) === $userSearch.toUpperCase().charAt(0)))
        {
          console.log(drink)
          searchArry.push(drink);

        }

    })

  })

  //clear out the current drink array and rendered html
  drinks = [];
  $imageId.html('')

  //loop through matched drink array push drinks to drinks array
  // searchArry.forEach(function(item){
  //   drinks.push(item);
  // });

  drinks = searchArry;

  //check to see if user has cleared search box
  if ($userSearch.length < 1){
    drinkStore.forEach(function(drink){
      drinks.push(drink) //push complete drink list to drinks array

    })
    loadImages(); //re-render html to show drinks
    onMousover(); //re-call mouse over listner
    buttonListner();
  }

  else{
      loadImages(); //re-render html to show drinks
      onMousover();//re-call mouse over listner
      buttonListner();
      //console.log(drinks);
  }

  //console.log(drinks);
  //console.log($userSearch);
});


