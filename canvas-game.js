
		// // Create the canvas tag with javascript
		var canvas = document.createElement('canvas');

		// // create a context for js to play with (Methods, properties, ~~~)
		var context = canvas.getContext('2d')

		canvas.width = 512;
		canvas.height = 480;

		// add the canvas tag to the DOM(EVERYTHING ON SCREEN)
		document.body.appendChild(canvas);	

		var backgroundImage = new Image();
		backgroundImage.src = "background.png";
		
		// make a var for our hero, he is an image!
		var hero = new Image();
		hero.src = "hero.png"
		
		var heroLocation = {x: 100, y: 100}


		// make a var for our hero, he is an image!
		var monster = new Image();
		monster.src = "monster.png";
		var monsterLocation = {x: 200, y: 100}

		// An array to hold all the keys that are currently pressed down.
		var keysDown = [];
		addEventListener('keydown', function(event){
			// if key down[39]is true, then user pushed right arrow
			// if key down[40]is true, then user pushed down arrow
			// if key down[37]is true, then user pushed left arrow
			// if key down[38]is true, then user pushed up arrow
			keysDown[event.keyCode] = true;
		});


		addEventListener('keyup', function(event){
			delete keysDown[event.keyCode];
		});



		var sp = 1	 //hero speed modifier


function update(){

	if((39 in keysDown)&&(heroLocation.x < 451)){heroLocation.x += 3 * sp;} 
	if((37 in keysDown)&&(heroLocation.x > 32)){heroLocation.x -= 3 * sp;}
	if((38 in keysDown)&&(heroLocation.y > 32)){heroLocation.y -= 3 * sp;}
	if((40 in keysDown)&&(heroLocation.y < 415)){heroLocation.y += 3 * sp;}
 
	if((heroLocation.x <= monsterLocation.x + 32) 
		&& (heroLocation.y <= monsterLocation.y + 32)
		&& (monsterLocation.x <= heroLocation.x + 32)
		&& (monsterLocation.y <= heroLocation.y + 32)){sp = 0;}
	console.log(heroLocation.x + " " + heroLocation.y)
}



// Keep this at the bottom
		function draw(){
			update();	
			// Put our backgroundImage on the context, at x = 0, y = 0
			context.drawImage(backgroundImage, 0, 0);
			context.drawImage(hero, heroLocation.x, heroLocation.y);
			context.drawImage(monster, monsterLocation.x, monsterLocation.y);

			requestAnimationFrame(draw);	
		}

draw()


