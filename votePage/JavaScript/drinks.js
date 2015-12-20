var drinks = []; //object array for storing drinks
var drinkStore = [];
var counter = 1;
$imageId = $('#images');
$searchBox = $('#searchBox');

randomNum =  function (){
  var ranNum = Math.floor((Math.random() * 250) + 1)
  return ranNum;
}
//Object constructor to create drink objects

var Mixer = function(drinkName,drinkImage,primaryLiqour,ingredients,recipe,garnish){
  this.drinkName = drinkName;
  this.drinkImage = drinkImage;
  this.primaryLiqour = primaryLiqour;
  this.ingredients = ingredients;
  this.recipe = recipe;
  this.garnish = garnish;
  this.drinkVotes = [randomNum()];
  this.drinkDay = '';
  this.drinkId = counter++;
      drinks.push(this);
      drinkStore.push(this);
      // myBarChart.addData([40, 60], "August");
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

var sazerac = new Mixer ('Sazerac', 'images/sazerac.jpg',['Cognac','Rye Whiskey'],['1/4 oz Absinthe', 'One sugar cube' , '1 1/2 oz Rye whiskey or Cognac', "Three dashes Peychaud's Bitters"],'Preparation: Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the Lemon peel for garnish.',['Lemon Peel']);

var champagneCocktail = new Mixer ('Champagne Cocktail','images/champagne.jpg',['Champagne'],['2 dashes Angostura bitters', '1/3 oz Cognac', '3 oz Champagne', '1 Sugar cube'],'Preparation: Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.',['Maraschino cherry, Orange slice']);

var daiquiri = new Mixer ('Daiquiri','images/daiquiri.jpg',['Rum'],['1 1/2 oz White rum', '1/2 oz Simple syrup', '1 oz Lime juice'],'Preparation: Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass',['Half a lime slice']);

var bloodyMary = new Mixer('Bloody Mary','images/bloody_mary.jpg',['Vodka'],['Worcestershire Sauce', 'Pepper','1/2 oz Lemon juice','1 1/2 oz Vodka','Salt','3oz Tomato juice'])

var gimlet = new Mixer('Gimlet','images/gimlet.jpg',['Gin'],['One part sweetened Lime Juice', 'Four parts Gin'],'Preparation: Mix and serve. Garnish with a slice of lime.',['Lime']);

var pinaColada = new Mixer('Pina Colada','images/pinaColada.jpg',['Rum'],['Ingredients: 3 oz (3 parts) Pineapple juice', '1 oz (one part) White rum', '1 oz (one part) Coconut cream'],'Preparation: Mix with crushed ice until smooth. Pour into chilled glass, garnish and serve.',['Maraschino cherry', 'Pineapple slice']);

var mimosa = new Mixer('Mimosa','images/mimosa.jpg',['Champagne'],[' 2 1/2 oz (1 part) Orange juice', '2 1/2 oz (1 part) Champagne'],'Preparation: Ensure both ingredients are well chilled, then mix into the glass. Serve cold.',['Cherries', 'Strawberries', 'Grenadine']);

var tequilaSunrise = new Mixer('Tequila Sunrise','images/tequilaSunrise.jpg',['Tequila'],['3 oz (6 parts) Orange juice', '1 1/2 oz (3 parts) Tequila', '1/2 oz (1 part) Grenadine syrup'],'Preparation: Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Do not stir. Garnish and serve.',['Orange slice', 'Cherry']);

var maiTai = new Mixer('Mai Tai','images/maiTai.jpg',['Rum'],['1 1/2 oz White rum', '1/2 oz Fresh lime juice', '1/2 oz Orange curaçao', '1/2 oz Orgeat syrup', '3/4 oz Dark rum'],'Preparation: Shake all ingredients except the dark rum together in a mixer with ice. Strain into glass and float the dark rum onto the top. Garnish and serve with straw.',['Lime peel', 'Pineapple spear']);

var tomCollins = new Mixer('Tom Collins','images/tomCollins.jpg',['Gin'],['1 oz (2 parts) Freshly squeezed lemon juice','1 1/2 oz Old Tom Gin','2oz Carbonated Water','1/2oz Simple Syrup'],'Preparation: Mix the gin, lemon juice and sugar syrup in a tall glass with ice, top up with soda water, garnish and serve.',['Lemon slice', 'Maraschino cherry']);

var moscowMule = new Mixer('Moscow Mule','images/moscowMule.jpg',['Vodka'],['4 oz Ginger beer', '1 1/2 oz Vodka', '1/6 oz Lime juice'],'Preparation: Combine vodka and ginger beer in a copper mug or highball glass filled with ice. Add lime juice. Stir gently and garnish with a lime slice.',['Lime Slice']);

var darkAndStormy = new Mixer('Dark and Stormy','images/darkAndStormy.jpg',['Rum'],['3 1/3 oz Ginger Beer', 'Couple dashes of bitters', '2 oz Dark Rum'],'Preparation: In a highball glass filled with ice, add dark rum and top with ginger beer. Garnish with lime wedge.',['Lime wedge']);

var appletini = new Mixer('Appletini','images/appletini.jpg',['Vodka'],['1 1/2 oz (3 parts) Vodka', '1/2 oz (1 part) Apple Schnapps / Calvados', '1/2 oz (1 part) Cointreau'],'Preparation: Mix in a shaker, then pour into a chilled glass. Garnish and serve',['Apple Slice','Maraschino cherry']);

var piscoSour = new Mixer('Pisco Sour','images/piscoSour.jpg',['Pisco'],['1 oz Lemon Juice', '1 Egg white, 1 1/2 oz Pisco', '3/4 oz Simple syrup'],'Preparation: Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.',['Angostura Bitters']);

var caipirinha = new Mixer('Caipirinha','images/caipirinha.jpg',['Cachaça'],['Half a lime cut into 4 wedges', '2 Teaspoons brown sugar', '1 2/3 oz Cachaça'],'Preparation: Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with crushed ice and add the Cachaça.',['Lime','Sugar Cane']);

var whiteRussian = new Mixer('White Russian','images/whiteRussian.jpg',['Vodka','Kahlua'],['2/3 oz (2 parts) Coffee liqueur', '1 2/3 oz (5 parts) Vodka', '1 oz (3 parts) Fresh cream'],'Preparation: Pour coffee liqueur and vodka into an Old Fashioned glass filled with ice. Float fresh cream on top and stir slowly.',['none']);

var screwdriver = new Mixer('Screwdriver','images/screwdriver.jpg',['Vodka'],['1 3/4 oz (1 part) Vodka', '3 1/2 oz (2 parts) Orange juice'],'Preparation: Mix in a highball glass with ice. Garnish and serve.',['Orange Slice']);

var longIslandIceTea = new Mixer('Long Island Ice Tea','images/longIslandIceTea.jpg',['Tequila', 'Gin', 'Vodka', 'Rum', 'Triple sec'],['1/2 oz Vodka','1/2 oz White Rum','1/2 oz Gin','1/2 oz Tequila','1/2 oz Triple sec','1oz Lemon Juice','1oz Simple Syrup','Splash of Coke'],'Preparation: Add all ingredients into highball glass filled with ice. Stir gently. Garnish with lemon spiral. Serve with straw.',['Lemon spiral']);







//function to generate html to place images on screen
function loadImages(){
  drinks.forEach(function(drink){
  $imageId.append("<div  class= 'outerDiv ingredients' id='outerDiv" + drink.drinkId + "'</div>");
  $outerDiv = $('#outerDiv'+drink.drinkId);
  $outerDiv.append("<div class='image' id=drink" + drink.drinkId + "> </div>");
  //console.log(drink.drinkId);
  $('#drink'+drink.drinkId).css({"background-image": "url(" + drink.drinkImage + ")"})
  $('#drink'+drink.drinkId).append("<ul id='ingredients" + drink.drinkId +"'></ul>")
  $outerDiv.append("<div class='button-p'> <input class ='radiobtn' type='radio' name='"+ drink.drinkName + " ' id='button"+ drink.drinkId + "' value='"+ drink.drinkName +"'>" + "<p>" + drink.drinkName + "</p>" + "</div>")
  $('#button'+drink.drinkId).css({ "display":"flex"})
  });

  // $imageId.append('<canvas id="myChart" width="1400" height="600"></canvas>');

};




//calling the load images function
loadImages();






// myBarChart.datasets[0].bars[0].fillColor = 'red';
// myBarChart.datasets[0].bars[1].fillColor = 'green';
// myBarChart.update();






//function that handles generating the mouse over data that is placed on top of the drink images
function onMousover(){
  drinks.forEach(function(drink){
    $(document).ready(function(){
      $('#drink'+drink.drinkId).mouseenter(function(){
        drink.ingredients.forEach(function(item){
            $('#ingredients'+drink.drinkId).addClass('ingredients')
            $('#ingredients'+drink.drinkId).append("<li>" + item + '</li>')
            //console.log('hello');
      })
    })
    });

    $(document).ready(function(){
      $('#drink'+drink.drinkId).mouseleave(function(){
        drink.ingredients.forEach(function(item){
        $('#ingredients'+drink.drinkId).removeClass('ingredients')
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

//Creating Chart and pushing data into Chart
function voteChart(){
  $('#drinks').css('width', '97%');
  $imageId.append("<canvas id='myChart'></canvas>");

  var ctx = $("#myChart").get(0).getContext("2d");

  var chartData = {
      labels: [],
      datasets: [
          {
              label: "Drink Vote Results",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
          },
      ]
  };

  var myBarChart = new Chart(ctx).Bar(chartData, {
  responsive: true, scaleFontColor: "white", scaleFontSize: 15 });

  drinkStore.forEach(function(drink){
    myBarChart.addData(drink.drinkVotes, drink.drinkName);
  })

  myBarChart.datasets[0].bars.forEach(function(bar){
    bar.fillColor = randomColor({luminosity: 'dark',
                                 hue: 'random',
                                 format: 'rgba'});
  });
  myBarChart.update();
}

//function to check if a drink has been voted on
function radio_button_checker(){
  $(document).ready(function(){
    $radios = $(".radiobtn") ;

    $radios.each(function(radio, val){
      if (val.checked){
        bttnCounter++
        console.log(bttnCounter);
      }

      if ((bttnCounter > 1) && val.checked){
        tracker.votes.push(drinks[radio]);
        console.log(tracker.votes);
        drinkStore[radio].drinkVotes[0]++;
        console.log(drinks[radio])
        $imageId.html('')
        voteChart();


        // drinks.forEach(function(drink){
        //   $greyedDrink = $('#ingredients'+drink.drinkId);
        //   $greyedDrink.addClass('voteComplete')
        //   $('#button'+drink.drinkId).attr('disabled', true)
        // })
      }

    });

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


//Search Box Function
$searchBox.keyup(function(){
  //On Event create these variables
  $userSearch = $searchBox.val(); //variable containing user search input
  //console.log($userSearch)
  searchArry = [];//array to hold matched drinks
  //console.log(searchArry)

  //Loop to find matched drink/primary liqour/ingredients name in drink object array

  //Brain Hemorrhage Cocktail Easter Egg.
  if ($userSearch.toUpperCase() === 'BRAIN HEMORRHAGE'){

        drinkStore.forEach(function(drink){
          drinks.push(drink) //push complete drink list to drinks array

        })

        loadImages();

        $('section').effect("shake");

        function showvideo(){
          $('#drinks').html('<iframe width="80%" height="70%" src="https://www.youtube.com/embed/26Va836YJoY?autoplay=1" frameborder="0" allowfullscreen></iframe>')
        }

        window.setTimeout(showvideo, 1000);
        // showvideo();

      return;
    }

  //drink loop
  drinkStore.forEach(function(drink){
    if ((drink.drinkName.toUpperCase().indexOf($userSearch.toUpperCase())> -1) && (drink.drinkName.toUpperCase().charAt(0) === $userSearch.toUpperCase().charAt(0)))
        {
            //console.log(drink);
            searchArry.push(drink);//push matched drinks to array
        }

    //primaryLiqour loop
    drink.primaryLiqour.forEach(function(item){
      if ((item.toUpperCase().indexOf($userSearch.toUpperCase())>-1) && (item.toUpperCase().charAt(0) === $userSearch.toUpperCase().charAt(0)))
        {
          searchArry.push(drink);
        }

    })

    //ingredients loop

    // drink.ingredients.forEach(function(item){
    //   if((item.toUpperCase().indexOf($userSearch.toUpperCase()) > -1) &&
    //     (item.toUpperCase().charAt(0) === $userSearch.toUpperCase().charAt(0)))
    //     {
    //       searchArry.forEach(function(item){
    //         if (item != drink) {
    //           searchArry.push(drink);
    //         }
    //       })
    //     }

    // })


  })

  //clear out the current drink array and rendered html
  drinks = [];
  $imageId.html('')

  //push results from search array to the drinks array

  $.each(searchArry, function(i, val){
    if($.inArray(val, drinks) === -1){
      drinks.push(val)
    }
  })
  // drinks = searchArry;
  console.log(drinks);

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

$(window).resize(function(){
    var width = $(window).width();
    console.log(width);

    while(width < 1350){
      $('canvas').css('width', '1000');
                      // height: '800'});

      break;

    }

    while(width < 1250){
      $('canvas').css('width', '860');
                      // height: '800'});

      break;

    }
    while(width < 1100){
      $('canvas').css('width', '760');
                       // height: '600' });
      break;

    }
    while(width < 1000){
      $('canvas').css('width', '700');
                      // height: '400'});
      break;

    }
    // while(width < 900){
    //   $('canvas').css({width: '600',
    //                   height: '200'});
    //   break;

    // }
});

