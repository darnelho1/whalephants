var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
 next()
});

app.use(bodyParser.json());

app.listen(3000, function() {
	console.log('test server started');
});

var db = {
	users: [],
	mixers: [
		{
			drinkName:'Martini',
			drinkImage:'images/martini.jpg',
			primaryLiqour:'Gin',
			ingredients:['1/2 oz (1 part) Dry vermouth', '3 oz (6 parts) Gin'],
			recipe:'Preparation: Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
			garnish:['Olive','Lemon twist'],
			drinkVotes:0,
			drinkDay:'',
			drinkId:1
		},
		{
			drinkName:'Manhatan',
			drinkImage:'images/manhattan.jpg',
			primaryLiqour:'Rye',
			ingredients:[' 2 oz Rye Whisky', '1 oz Italian vermouth', '2 dashes Angostura bitters'],
			recipe:'Preparation: Pour all ingredients into mixing glass stir over ice, strained into a chilled glass, garnished, and served straight up.',
			garnish:'Cherry',
			drinkVotes:0,
			drinkDay:'',
			drinkId:2
		},
		{
			drinkName:'Mojito',
			drinkImage:'images/mojito.jpg',
			primaryLiqour:'Rum',
			ingredients:['1 1/2 oz White rum','6 leaves of Mint', 'Soda Water','1 oz Fresh lime juice', '2 teaspoons Sugar'],
			recipe:'Preparation: Mint sprigs muddled with sugar and lime juice. Rum added and topped with soda water. Garnished with sprig of mint leaves. Served with a straw.',
			garnish:['Sprig of mint', 'Yerba buena'],
			drinkVotes:0,
			drinkDay:'',
			drinkId:3
		},
		{
			drinkName:'Negroni',
			drinkImage:'images/negroni.jpg',
			primaryLiqour:['Gin','Vermouth','Campari'],
			ingredients:'1 oz (1 part) Gin, 1 oz (1 part) Campari, 1 oz (1 part) Sweet red Vermouth',
			recipe:'Preparation: Stir into glass over ice, garnish and serve.',
			garnish:'Orange peel',
			drinkVotes:0,
			drinkDay:'',
			drinkId:4
		},
		{
			drinkName:'Margarita',
			drinkImage:'images/margarita.jpg',
			primaryLiqour:'Tequila',
			ingredients:['2 oz Tequila', '1 oz Lime juice', '1 oz Cointreau'],
			recipe:'Preparation: Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass (taking care not to dislodge any salt). Garnish and serve over ice.',
			garnish:['Lime slice', 'Salt on the rim'],
			drinkVotes:0,
			drinkDay:'',
			drinkId:5
		},
		{
			drinkName:'Cosmopolitan',
			drinkImage:'images/cosmopolitan.jpg',
			primaryLiqour:'Vodka',
			ingredients:['1/2 oz Fresh lime juice', '1 oz Cranberry juice', '1/2 oz Cointreau', '1 1/2 oz Vodka Citron'],
			recipe:'Preparation: Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.',
			garnish:['Lime wedge', 'Lemon slice'],
			drinkVotes:0,
			drinkDay:'',
			drinkId:6
		},
		{
			drinkName:'Old Fashioned',
			drinkImage:'images/oldFashioned.jpg',
			primaryLiqour:'Whisky',
			ingredients:['1 1/2 oz Bourbon or Rye whiskey', '2 dashes Angostura bitters', '1 Sugar cube', 'Few dashes plain water'],
			recipe:'Preparation: Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange slice, and a cocktail cherry.',
			garnish:['Orange slice', 'Cocktail cherry'],
			drinkVotes:0,
			drinkDay:'',
			drinkId:7
		},
		{
			drinkName:'Mint julep',
			drinkImage:'images/mintJulep.jpg',
			primaryLiqour:'Bourbon',
			ingredients:['1 teaspoon Powdered sugar', '2 oz. Bourbon whiskey', '2 teaspoons Water', '4 Mint leaves'],
			recipe:'Preparation: In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.',
			garnish:'Mint sprig',
			drinkVotes:0,
			drinkDay:'',
			drinkId:8
		},
		{
			drinkName:'Gin and Tonic',
			drinkImage:'images/ginandTonic.jpg',
			primaryLiqour:'Gin',
			ingredients:['1 part to 3 parts gin (to taste)', '3 parts tonic water'],
			recipe:'Preparation: In a glass filled with ice cubes, add gin and tonic.',
			garnish:'lime',
			drinkVotes:0,
			drinkDay:'',
			drinkId:9
		},
		{
			drinkName:'Sidecar',
			drinkImage:'images/sidecar.jpg',
			primaryLiqour:'Brandy',
			ingredients:['2 oz Cognac', '3/4 oz Lemon juice','3/4 oz Triple sec'],
			recipe:'Preparation: Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.',
			garnish:'none',
			drinkVotes:0,
			drinkDay:'',
			drinkId:10
		},
		{
			drinkName:'Bellini',
			drinkImage:'images/bellini.jpg',
			primaryLiqour:'Prosecco',
			ingredients:['White peaches', '2 oz Fresh peach purée', '4 oz Prosecco'],
			recipe:'Preparation: Pour peach puree into chilled flute, add Prosecco. Stir gently.',
			garnish:'Peach Slice',
			drinkVotes:0,
			drinkDay:'',
			drinkId:11
		},
		{
			drinkName:'Whiskey Sour',
			drinkImage:'images/whiskeySour.jpg',
			primaryLiqour:'Bourbon',
			ingredients:['1 oz Lemon Juice','1/2 oz Simple Syrup','1 1/2 oz Bourbon','1 egg white'],
			recipe:'Preparation: Shake with ice. Strain into ice-filled old-fashioned glass to serve "on the rocks."',
			garnish:['cherry','lemon wedge'],
			drinkVotes:0,
			drinkDay:'',
			drinkId:12
		},
		{
			drinkName:'Sazerac',
			drinkImage:'images/sazerac.jpg',
			primaryLiqour:['Cognac','Rye Whiskey'],
			ingredients:['1/4 oz Absinthe', 'One sugar cube' , '1 1/2 oz Rye whiskey or Cognac', "Three dashes Peychaud's Bitters"],
			recipe:'Lemon Peel',
			drinkVotes:0,
			drinkDay:'',
			drinkId:13
		}

	]
};

app.post('/users', function(req, res){
	var users = req.body;
	db.users.push(users);
	console.log('success');
	res.json({msg: 'posted'});
	console.log(db.users);
});
