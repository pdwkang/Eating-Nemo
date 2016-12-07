
// function Monster(src, location.x, location.y,){
// 	this.Image.src=src
// }
var playerName = "Master";
var gameOn = false;

//start game and timer and save player name
function startGame(){
	gameOn = true;
	gameStart = Date.now();
	gameEnd = Date.now() + 60000;
	timerInterval = setInterval(updateTimer, 1000)
}
function updateTimer(){
	var newNow = Date.now();
	var timeDifference = (gameEnd - newNow) / 1000;
	if(timeDifference <= 0){clearInterval(timerInterval);
		gameOn = false; timeDifference = 0;
		document.getElementById('timer').innerHTML = "Game Over!";
	}else{
	document.getElementById('timer').innerHTML = Math.round(timeDifference) + " seconds";
	};
	if(!gameOn){document.getElementById('timer').innerHTML = "Game Over!"}
}
function newPlayer(){
	var playerNameDiv = document.getElementById("player-name");
	playerName = playerNameDiv.value;
}


//magic
	var canvas = document.createElement("canvas");
	var context = canvas.getContext('2d')
	canvas.width = 700;		      canvas.height = 480;
	document.body.appendChild(canvas);	
	var backgroundImage = new Image();
	backgroundImage.src = "background.png";
	var keysDown = [];
	addEventListener('keydown', function(event){
		keysDown[event.keyCode] = true;
	});
	addEventListener('keyup', function(event){
		delete keysDown[event.keyCode];
	});

//monsters
	var hero = new Image();  		hero.src = "shark.png"
	var heroLocation = {x: 310, y: 200}

	var monster = new Image();		monster.src = "dory1.png";
	var monsterLocation = {x: Math.floor(Math.random()*301),
		 y: Math.floor(Math.random()*200 + 300)}

 	var monster2 = new Image();		monster2.src = "nemo1.png";
	var monster2Location = {x: Math.floor(Math.random()*301),
		 y: Math.floor(Math.random()*201 + 200)}

	var monster3 = new Image();		monster3.src = "dory2.png";
	var monster3Location = {x: Math.floor(Math.random()*321),
		 y: Math.floor(Math.random()*221 + 300)}

 	var monster4 = new Image();		monster4.src = "nemo2.png";
	var monster4Location = {x: Math.floor(Math.random()*320),
		 y: Math.floor(Math.random()*220 + 200)}

	var monster5 = new Image();		monster5.src = "dory3.png";
	var monster5Location = {x: Math.floor(Math.random()*322+400),
		 y: Math.floor(Math.random()*223 + 300)}

 	var monster6 = new Image();		monster6.src = "nemo3.png";
	var monster6Location = {x: Math.floor(Math.random()*323+400),
		 y: Math.floor(Math.random()*210 + 200)}

 	var monster7 = new Image();		monster7.src = "nemo5.png";
	var monster7Location = {x: Math.floor(Math.random()*275+430),
		 y: Math.floor(Math.random()*211)}

	var monster9 = new Image();		monster9.src = "puffer1.png";
	var monster9Location = {x: Math.floor(Math.random()*400 + 300),
		 y: Math.floor(Math.random()*480)}

	var monster10 = new Image();		monster10.src = "turtle1.png";
	var monster10Location = {x: Math.floor(Math.random()*688),
		 y: Math.floor(Math.random()*477)}	 

	var monster11 = new Image();		monster11.src = "starfish1.png";
	var monster11Location = {x: Math.floor(Math.random()*688),
		 y: 422}		

//deadfish
	var deadfish = new Image();		deadfish.src = "deadfish.png";
	var deadfishLocation = {x: 0, y:700}
	var deadfish2Location = {x: 0, y:700}
	var deadfish3Location = {x: 0, y:700}
	var deadfish4Location = {x: 0, y:700}
	var deadfish5Location = {x: 0, y:700}
	var deadfish6Location = {x: 0, y:700}
	var deadfish7Location = {x: 0, y:700}


//random variables
	var level = 1
	var score = 0
	var highScore = 0;
	var gameOver = false;
	var directionX = 2; 	var directionY = 2
	var directionX2 = 2;
	var sp = .5 	
//the game
function update(){
	document.getElementById("score").innerHTML = "Level: " + level + "&nbsp &nbsp &nbsp &nbsp Score: " + score + "&nbsp &nbsp &nbsp &nbsp High Score: "
		+ highScore;
	console.log(playerName);
	
	// extra speed
	if(score>highScore){highScore=score};

	monsterLocation.x += (1*sp);		monsterLocation.y -= (.5*sp)
	monster2Location.x += (1.5*sp);		monster2Location.y -= (.5*sp)
	monster3Location.x += 2*sp;			monster3Location.y -= 2*sp
	monster4Location.x += 2.5*sp;		monster4Location.y -= .5*sp
	monster5Location.x -= 1.5*sp;		monster5Location.y -= .5*sp
	monster6Location.x -= 2*sp;			monster6Location.y -= -1*sp
	monster7Location.x -= 3.5*sp;		monster7Location.y -= -.5*sp
	monster9Location.x -= 3*sp;			monster9Location.y -= .2*sp

	monster10Location.x -= (.3*directionX*sp);	monster10Location.y -= (.3*directionY*sp)
	monster11Location.x -= (4*directionX2*sp);

	deadfishLocation.y += 3;	
	deadfish2Location.y += 3
	deadfish3Location.y += 3;	
	deadfish4Location.y += 3
	deadfish5Location.y += 3;	
	deadfish6Location.y += 3
	deadfish7Location.y += 3;

	//bruce
	if((39 in keysDown)&&(heroLocation.x < 601)){heroLocation.x += 6;
		hero.src="shark-right.png";
		$("shark-right.png").removeClass("rotate")} 
	if((37 in keysDown)&&(heroLocation.x > 22)){heroLocation.x -= 6;
		hero.src="shark-right.png"; 
		$("shark-right.png").addClass("rotate")}
	if((38 in keysDown)&&(heroLocation.y > 5)){heroLocation.y -= 6;}
	if((40 in keysDown)&&(heroLocation.y < 403)){heroLocation.y += 6;}

	//dory1	- monster1
	if((69 in keysDown)&&(heroLocation.x <= monsterLocation.x + 45) 
		&& (heroLocation.y <= monsterLocation.y + 45)
		&& (monsterLocation.x <= heroLocation.x + 45)
		&& (monsterLocation.y <= heroLocation.y + 45)){
		deadfishLocation = {x: monsterLocation.x, y: monsterLocation.y};
		monsterLocation = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 300};
			 score += 100
			}
	else if(monsterLocation.x >= 700 || monsterLocation.y <= 1){
		monsterLocation = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 300};
			 if(score>0){score -= 10};}

	//nemo1	- monster2
	if((69 in keysDown)&&(heroLocation.x <= monster2Location.x + 45) 
		&& (heroLocation.y <= monster2Location.y + 44)
		&& (monster2Location.x <= heroLocation.x + 44)
		&& (monster2Location.y <= heroLocation.y + 44)){
		deadfish2Location = {x: monster2Location.x, y: monster2Location.y};
		monster2Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 200};
			 score += 100
			}
	else if(monster2Location.x >= 700 || monster2Location.y <= 1){
		monster2Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 200}
			 ;if(score>0){score -= 10};}

	//dory2	- monster3
	if((69 in keysDown)&&(heroLocation.x <= monster3Location.x + 45) 
		&& (heroLocation.y <= monster3Location.y + 45)
		&& (monster3Location.x <= heroLocation.x + 45)
		&& (monster3Location.y <= heroLocation.y + 45)){
		deadfish3Location = {x: monster3Location.x, y: monster3Location.y};
		monster3Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 300};
			 score += 100
			}
	else if(monster3Location.x >= 700 || monster3Location.y <= 1){
		monster3Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 300}
			 ;if(score>0){score -= 10};}

	//nemo2	- monster4
	if((69 in keysDown)&&(heroLocation.x <= monster4Location.x + 45) 
		&& (heroLocation.y <= monster4Location.y + 44)
		&& (monster4Location.x <= heroLocation.x + 44)
		&& (monster4Location.y <= heroLocation.y + 44)){
		deadfish4Location = {x: monster4Location.x, y: monster4Location.y};
		monster4Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 200};
			 score += 100
			}
	else if(monster4Location.x >= 700 || monster4Location.y <= 1){
		monster4Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 200}
			 ;if(score>0){score -= 10};}

	//dory3	- monster5
	if((69 in keysDown)&&(heroLocation.x <= monster5Location.x + 45) 
		&& (heroLocation.y <= monster5Location.y + 44)
		&& (monster5Location.x <= heroLocation.x + 44)
		&& (monster5Location.y <= heroLocation.y + 44)){
		deadfish5Location = {x: monster5Location.x, y: monster5Location.y};
		monster5Location = {x: Math.floor(Math.random()*310+400),
			 y: Math.floor(Math.random()*200) + 200};
			 score += 100
			}
	else if(monster5Location.x <= 1 || monster5Location.y <= 1){
		monster5Location = {x: Math.floor(Math.random()*310+400),
			 y: Math.floor(Math.random()*200) + 200}
			 ;if(score>0){score -= 10};}

	//nemo3	- monster6
	if((69 in keysDown)&&(heroLocation.x <= monster6Location.x + 45) 
		&& (heroLocation.y <= monster6Location.y + 45)
		&& (monster6Location.x <= heroLocation.x + 45)
		&& (monster6Location.y <= heroLocation.y + 45)){
		deadfish6Location = {x: monster6Location.x, y: monster6Location.y};
		monster6Location = {x: Math.floor(Math.random()*300+400),
			 y: Math.floor(Math.random()*200)};
			 score += 100
			}
	else if(monster6Location.x <= 1|| monster6Location.y >= 480){
		monster6Location = {x: Math.floor(Math.random()*300+400),
			 y: Math.floor(Math.random()*200)}
			 ;if(score>0){score -= 10};}

	//nemo4	- monster7
	if((69 in keysDown)&&(heroLocation.x <= monster7Location.x + 45) 
		&& (heroLocation.y <= monster7Location.y + 44)
		&& (monster7Location.x <= heroLocation.x + 44)
		&& (monster7Location.y <= heroLocation.y + 44)){
		deadfish7Location = {x: monster7Location.x, y: monster7Location.y};
		monster7Location = {x: Math.floor(Math.random()*200+500),
			 y: Math.floor(Math.random()*150)};
			 score += 100
			}
	else if(monster7Location.x <= 1 || monster7Location.y >= 480){
		monster7Location = {x: Math.floor(Math.random()*200+500),
			 y: Math.floor(Math.random()*150)}
			;if(score>0){score -= 10};}


	//puff - monster 9
	if((69 in keysDown)&&(heroLocation.x <= monster9Location.x + 45) 
		&& (heroLocation.y <= monster9Location.y + 44)
		&& (monster9Location.x <= heroLocation.x + 44)
		&& (monster9Location.y <= heroLocation.y + 44)){
		monster9Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*600) - 200};
			 gameOn = false;
			}
	else if(monster9Location.x <= 1 || monster9Location.y <= 1){
		monster9Location = {x: Math.floor(Math.random()*100 + 650),
			 y: Math.floor(Math.random()*480)}}


	//turtle - monster 10  (bounce off all walls)
	if((69 in keysDown)&&(heroLocation.x <= monster10Location.x + 45) 
		&& (heroLocation.y <= monster10Location.y + 44)
		&& (monster10Location.x <= heroLocation.x + 44)
		&& (monster10Location.y <= heroLocation.y + 44)){
		monster10Location = {x: Math.floor(Math.random()*700),
			 y: Math.floor(Math.random()*480)};
			 gameOn = false;
	}else{
		if(monster10Location.x >=660){directionX = 2};
		if(monster10Location.y >=430){directionY = 2};
		if(monster10Location.x <=1){directionX = -2};
		if(monster10Location.y <=1){directionY = -2};
	}

	//jellyfish - monster 11  (bounce off side walls)
	if((69 in keysDown)&&(heroLocation.x <= monster11Location.x + 45) 
		&& (heroLocation.y <= monster11Location.y + 44)
		&& (monster11Location.x <= heroLocation.x + 44)
		&& (monster11Location.y <= heroLocation.y + 44)){
		monster11Location = {x: Math.floor(Math.random()*700),
			 y: 422};
			 gameOn = false;
	}else{
		if(monster11Location.x >=640){directionX2 = 2};
		if(monster11Location.x <=1){directionX2 = -2};
	}

	// score		 
	// if(gameOver){document.getElementById("score").innerHTML = "Score: " + score + "&nbsp &nbsp &nbsp &nbsp High Score: "
	// 	+ highScore + "GAME OVER"
	// }else{
	// document.getElementById("score").innerHTML = "Score: " + score + "&nbsp &nbsp &nbsp &nbsp High Score: "
	// 	+ highScore}

	if(!gameOn){
		score = 0;
		// document.canvas.className="red"
		sp = .5
		// add more stuff when game over
	}
	if(score>10000){sp=4; level=5
	}else if(score > 5000){sp=2.2; level=4
	}else if(score > 3000){backgroundImage.src = "background2.jpg"; sp = 1.7; level=3
	}else if(score > 1500){sp = 1.2; level=2
	}else{backgroundImage.src = "background.png"; level=1
	}
}

function draw(){
	update();	
	context.drawImage(backgroundImage, 0, 0);
	context.drawImage(hero, heroLocation.x, heroLocation.y);
	if(gameOn){
	context.drawImage(monster, monsterLocation.x, monsterLocation.y);
	context.drawImage(monster2, monster2Location.x, monster2Location.y);
	context.drawImage(monster3, monster3Location.x, monster3Location.y);
	context.drawImage(monster4, monster4Location.x, monster4Location.y);
	context.drawImage(monster5, monster5Location.x, monster5Location.y);
	context.drawImage(monster6, monster6Location.x, monster6Location.y);
	context.drawImage(monster7, monster7Location.x, monster7Location.y);
	context.drawImage(monster9, monster9Location.x, monster9Location.y);
	context.drawImage(monster10, monster10Location.x, monster10Location.y);
	context.drawImage(monster11, monster11Location.x, monster11Location.y);
	context.drawImage(deadfish, deadfishLocation.x, deadfishLocation.y);
	context.drawImage(deadfish, deadfish2Location.x, deadfish2Location.y);
	context.drawImage(deadfish, deadfish3Location.x, deadfish3Location.y);
	context.drawImage(deadfish, deadfish4Location.x, deadfish4Location.y);
	context.drawImage(deadfish, deadfish5Location.x, deadfish5Location.y);
	context.drawImage(deadfish, deadfish6Location.x, deadfish6Location.y);
	context.drawImage(deadfish, deadfish7Location.x, deadfish7Location.y);
	}
	requestAnimationFrame(draw);	
}

draw()

// if(score > 0){
// 	document.getElementById("canvas").className="black"
// }