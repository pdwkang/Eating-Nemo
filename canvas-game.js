
// function Monster(src, location.x, location.y,){
// 	this.Image.src=src
// }

//start game and timer and save player name
function startGame(){
	gameOn = true;
	gameStart = Date.now();
	gameEnd = Date.now() + 30000;
	timerInterval = setInterval(updateTimer, 1000)
}

function updateTimer(){
	var newNow = Date.now();
	timeDifference = (gameEnd - newNow) / 1000;
	if(timeDifference <= 0){clearInterval(timerInterval);
		bossLevel = true; timeDifference = 0;
	}else{
	document.getElementById('timer').innerHTML = "BOSS LEVEL IN " + 
	Math.round(timeDifference) + " SECONDS";
	};
	if(bossLevel){document.getElementById('timer').innerHTML = playerName +" !! " + "KILL THE BOSS !!"}
}
function newPlayer(){
	playerNameDiv = document.getElementById("player-name");
	playerName = playerNameDiv.value;
	playerArray.push(new Player(playerName));
}
var playerArray = [];
function Player(name){   //player constructor
	this.name = name;
	this.highscore = 0;
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
	hero.id = "heroID";

	var monster = new Image();		monster.src = "dory1.png";
	var monsterLocation = {x: Math.floor(Math.random()*301),
		 y: Math.floor(Math.random()*200 + 300)}

 	var monster2 = new Image();		monster2.src = "nemo1.png";
	var monster2Location = {x: Math.floor(Math.random()*271),
		 y: Math.floor(Math.random()*171 + 220)}

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

 	var monster8 = new Image();		monster8.src = "stripe1.png";
	var monster8Location = {x: Math.floor(Math.random()*221),
		 y: Math.floor(Math.random()*211 + 200)}

	var monster9 = new Image();		monster9.src = "puffer1.png";
	var monster9Location = {x: Math.floor(Math.random()*400 + 300),
		 y: Math.floor(Math.random()*480)}

	var monster10 = new Image();		monster10.src = "turtle1.png";
	var monster10Location = {x: Math.floor(Math.random()*688),
		 y: Math.floor(Math.random()*477)}	 

	var monster11 = new Image();		monster11.src = "starfish1.png";
	var monster11Location = {x: Math.floor(Math.random()*688),
		 y: 422}		

	var monster12 = new Image();		monster12.src = "jellyfish1.png";
	var monster12Location = {x: Math.floor(Math.random()*700 - 50),
		 y: Math.floor(Math.random()*80 + 400)}


//deadfish
	var deadfish = new Image();		deadfish.src = "deadfish.png";
	var deadfishLocation = {x: 0, y:700}
	var deadfish2Location = {x: 0, y:700}
	var deadfish3Location = {x: 0, y:700}
	var deadfish4Location = {x: 0, y:700}
	var deadfish5Location = {x: 0, y:700}
	var deadfish6Location = {x: 0, y:700}
	var deadfish7Location = {x: 0, y:700}
	var deadfish8Location = {x: 0, y:700}
	var deadfish9Location = {x: 0, y:700}
	var deadfish10Location = {x: 0, y:700}
	var deadfish11Location = {x: 0, y:700}
	var deadfish12Location = {x: 0, y:700}


//random variables
	var level = 1
	var score = 0
	var highScore = 0;
	var gameOver = false;
	var directionX = 2; 	var directionY = 2
	var directionX2 = 2;
	var sp = .5 	
	var hsp = 1
	var playerName = "You didn't name your shark";
	var gameOn = false;
	var bossLevel = false;
	var timeDifference

//shell border	
	var shell = new Image();		shell.src="shell.png"
	var shellLocation ={x:300, y:0}
	var shell2Location ={x:300, y:40}
	var shell3Location ={x:300, y:80}
	var shell4Location ={x:300, y:120}
	var shell5Location ={x:300, y:160}
	var shell6Location ={x:300, y:200}
	var shell7Location ={x:300, y:240}
	var shell8Location ={x:300, y:280}
	var shell9Location ={x:300, y:320}
	var shell10Location ={x:300, y:360}
	var shell11Location ={x:300, y:400}
	var shell12Location ={x:300, y:440}
	var shell13Location ={x:300, y:480}

//the game
function update(){
	document.getElementById("score").innerHTML ="&nbsp &nbsp Score: " + 
		"<span class='color-r'>" + score + "</span>"+ "&nbsp &nbsp &nbsp &nbsp High Score: "+
		"<span class='color-h'>" + highScore + "</span>";	
		 // "Level: " + level + "&nbsp &nbsp &nbsp &nbsp 
	// extra speed
	if(score>highScore){highScore=score};

	monsterLocation.x += (1*sp);		monsterLocation.y -= (.5*sp)
	monster2Location.x += (1.5*sp);		monster2Location.y -= (.5*sp)
	monster3Location.x += 2*sp;			monster3Location.y -= 2*sp
	monster4Location.x += 2.5*sp;		monster4Location.y -= .5*sp
	monster5Location.x -= 1.5*sp;		monster5Location.y -= .5*sp
	monster6Location.x -= 2*sp;			monster6Location.y -= -1*sp
	monster7Location.x -= 3.5*sp;		monster7Location.y -= -.5*sp
	monster8Location.x += (1*sp);		
	monster9Location.x -= 3*sp;			monster9Location.y -= .2*sp
	monster10Location.x -= (.3*directionX*sp);	monster10Location.y -= (.3*directionY*sp)
	monster11Location.x -= (4*directionX2*sp);
	monster12Location.x -= .5*sp;		monster12Location.y -= 3*sp;

	deadfishLocation.y += 3;	
	deadfish2Location.y += 3
	deadfish3Location.y += 3;	
	deadfish4Location.y += 3
	deadfish5Location.y += 3;	
	deadfish6Location.y += 3
	deadfish7Location.y += 3;
	deadfish8Location.y += 3;	
	deadfish9Location.y += 3
	deadfish10Location.y += 3;
	deadfish11Location.y += 3;
	deadfish12Location.y += 3;
	
	//shark changing image direction
	if((gameOn)&&(!bossLevel)){
		if(keysDown[39]){hero.src="shark-right.png"; console.log("ur moving right");
		}else if(keysDown[37]){hero.src="shark-left.png"; console.log("ur moving left");
		}else{hero.src="shark.png";}
	}
	
	//bruce
	if((!bossLevel)&&(39 in keysDown)&&(heroLocation.x < 601)){heroLocation.x += (6*hsp);
	}else if((bossLevel)&&(39 in keysDown)&&(heroLocation.x < 200)){
		heroLocation.x += (6*hsp);
	} //right
	if((37 in keysDown)&&(heroLocation.x > 5)){heroLocation.x -= (6*hsp);}    //left
	if((38 in keysDown)&&(heroLocation.y > 5)){heroLocation.y -= (6*hsp);}     //up
	if((40 in keysDown)&&(heroLocation.y < 403)){heroLocation.y += (6*hsp);}   //down
	// bossLevel
	
   //right

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
			 // if(score>0){score -= 10};
			}

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
			 // ;if(score>0){score -= 10};
			}

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
			 // ;if(score>0){score -= 10};
			}

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
			 // ;if(score>0){score -= 10};
			}

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
			 // ;if(score>0){score -= 10};
			}

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
			 // ;if(score>0){score -= 10};
			}

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
			// ;if(score>0){score -= 10};
		}

	//stripe1 - monster8
	if((69 in keysDown)&&(heroLocation.x <= monster8Location.x + 45) 
		&& (heroLocation.y <= monster8Location.y + 44)
		&& (monster8Location.x <= heroLocation.x + 44)
		&& (monster8Location.y <= heroLocation.y + 44)){
		deadfish8Location = {x: monster8Location.x, y: monster8Location.y};
		monster8Location = {x: Math.floor(Math.random()*250),
			 y: Math.floor(Math.random()*200) + 210};
			 score += 100
			}
	else if(monster8Location.x >= 700 || monster8Location.y <= 1){
		monster8Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*200) + 200}
			 // ;if(score>0){score -= 10};
			}

	//puff - monster 9
	if((69 in keysDown)&&(heroLocation.x <= monster9Location.x + 45) 
		&& (heroLocation.y <= monster9Location.y + 44)
		&& (monster9Location.x <= heroLocation.x + 44)
		&& (monster9Location.y <= heroLocation.y + 44)){
		deadfish9Location = {x: monster9Location.x, y: monster9Location.y};
		monster9Location = {x: Math.floor(Math.random()*300),
			 y: Math.floor(Math.random()*600) - 200};
			 score += 100
			}
	else if(monster9Location.x <= 1 || monster9Location.y <= 1){
		monster9Location = {x: Math.floor(Math.random()*100 + 650),
			 y: Math.floor(Math.random()*480)}}


	//turtle - monster 10  (bounce off all walls)
	if((69 in keysDown)&&(heroLocation.x <= monster10Location.x + 45) 
		&& (heroLocation.y <= monster10Location.y + 44)
		&& (monster10Location.x <= heroLocation.x + 44)
		&& (monster10Location.y <= heroLocation.y + 44)){
		deadfish10Location = {x: monster10Location.x, y: monster10Location.y};
		monster10Location = {x: Math.floor(Math.random()*700),
			 y: Math.floor(Math.random()*480)};
			 score += 100
	}else{
		if(monster10Location.x >=660){directionX = 2};
		if(monster10Location.y >=430){directionY = 2};
		if(monster10Location.x <=1){directionX = -2};
		if(monster10Location.y <=1){directionY = -2};
	}

	//starfish - monster 11  (bounce off side walls)
	if((69 in keysDown)&&(heroLocation.x <= monster11Location.x + 45) 
		&& (heroLocation.y <= monster11Location.y + 44)
		&& (monster11Location.x <= heroLocation.x + 44)
		&& (monster11Location.y <= heroLocation.y + 44)){
		deadfish11Location = {x: monster11Location.x, y: monster11Location.y};
		monster11Location = {x: Math.floor(Math.random()*700),
			 y: 422};
			 score += 100
	}else{
		if(monster11Location.x >=640){directionX2 = 2};
		if(monster11Location.x <=1){directionX2 = -2};
	}

	//jellyfish1 - monster12
	if((69 in keysDown)&&(heroLocation.x <= monster12Location.x + 45) 
		&& (heroLocation.y <= monster12Location.y + 44)
		&& (monster12Location.x <= heroLocation.x + 44)
		&& (monster12Location.y <= heroLocation.y + 44)){
		deadfish12Location = {x: monster12Location.x, y: monster12Location.y};
		monster12Location = {x: Math.floor(Math.random()*310+400),
			 y: Math.floor(Math.random()*100) + 380};
			 score += 100
			}
	else if(monster12Location.x <= 1 || monster12Location.y <= 1){
		monster12Location = {x: Math.floor(Math.random()*310+400),
			 y: Math.floor(Math.random()*300) + 280}
			 // ;if(score>0){score -= 10};
			}
	sp =.5
	// if(!gameOn){
	// 	score = 0;
	// 	sp = .5
	// 	// add more stuff when game over
	// }
	if(score>20000){sp=4; level=5
	}else if(score > 10000){sp=2.2; level=4
	}else if(score > 7000){sp = 1.7; level=3
	}else if(score > 3000){sp = 1.2; level=2
	}else{backgroundImage.src = "background.png"; level=1
	};
	// hero.src="shark.png";

	if(bossLevel){
		backgroundImage.src = "background2.jpg"; 
		hero.src = "shark-gun.png"
		hsp = 1;
		var qq = 5
		shellLocation.y +=qq;
		shell2Location.y +=qq;
		shell3Location.y +=qq;
		shell4Location.y +=qq;
		shell5Location.y +=qq;
		shell6Location.y +=qq;
		shell7Location.y +=qq;
		shell8Location.y +=qq;
		shell9Location.y +=qq;
		shell10Location.y +=qq;
		shell11Location.y +=qq;
		shell12Location.y +=qq;
		shell13Location.y +=qq;
		if(heroLocation.x > 200){heroLocation.x -= 3}
	};
	if(shellLocation.y >= 480){shellLocation = {x: 300, y: 0};}
	if(shell2Location.y >= 480){shell2Location = {x: 300, y: 0};}
	if(shell3Location.y >= 480){shell3Location = {x: 300, y: 0};}
	if(shell4Location.y >= 480){shell4Location = {x: 300, y: 0};}
	if(shell5Location.y >= 480){shell5Location = {x: 300, y: 0};}
	if(shell6Location.y >= 480){shell6Location = {x: 300, y: 0};}
	if(shell7Location.y >= 480){shell7Location = {x: 300, y: 0};}
	if(shell8Location.y >= 480){shell8Location = {x: 300, y: 0};}
	if(shell9Location.y >= 480){shell9Location = {x: 300, y: 0};}
	if(shell10Location.y >= 480){shell10Location = {x: 300, y: 0};}
	if(shell11Location.y >= 480){shell11Location = {x: 300, y: 0};}
	if(shell12Location.y >= 480){shell12Location = {x: 300, y: 0};}
	if(shell13Location.y >= 480){shell13Location = {x: 300, y: 0};}
}

function draw(){
	update();	
	context.drawImage(backgroundImage, 0, 0);
	if(gameOn){context.drawImage(hero, heroLocation.x, heroLocation.y);}
	else{context.drawImage(hero, 310, 200)};

	if(!bossLevel){
	context.drawImage(monster, monsterLocation.x, monsterLocation.y);
	context.drawImage(monster2, monster2Location.x, monster2Location.y);
	context.drawImage(monster3, monster3Location.x, monster3Location.y);
	context.drawImage(monster4, monster4Location.x, monster4Location.y);
	context.drawImage(monster5, monster5Location.x, monster5Location.y);
	context.drawImage(monster6, monster6Location.x, monster6Location.y);
	context.drawImage(monster7, monster7Location.x, monster7Location.y);
	context.drawImage(monster8, monster8Location.x, monster8Location.y);
	context.drawImage(monster9, monster9Location.x, monster9Location.y);
	context.drawImage(monster10, monster10Location.x, monster10Location.y);
	context.drawImage(monster11, monster11Location.x, monster11Location.y);
	context.drawImage(monster12, monster12Location.x, monster12Location.y);
 	// deadfish
	context.drawImage(deadfish, deadfishLocation.x, deadfishLocation.y);
	context.drawImage(deadfish, deadfish2Location.x, deadfish2Location.y);
	context.drawImage(deadfish, deadfish3Location.x, deadfish3Location.y);
	context.drawImage(deadfish, deadfish4Location.x, deadfish4Location.y);
	context.drawImage(deadfish, deadfish5Location.x, deadfish5Location.y);
	context.drawImage(deadfish, deadfish6Location.x, deadfish6Location.y);
	context.drawImage(deadfish, deadfish7Location.x, deadfish7Location.y);
	context.drawImage(deadfish, deadfish8Location.x, deadfish8Location.y);
	context.drawImage(deadfish, deadfish9Location.x, deadfish9Location.y);
	context.drawImage(deadfish, deadfish10Location.x, deadfish10Location.y);
	context.drawImage(deadfish, deadfish11Location.x, deadfish11Location.y);
	context.drawImage(deadfish, deadfish12Location.x, deadfish12Location.y);
	}else{
		context.drawImage(shell, shellLocation.x, shellLocation.y);
		context.drawImage(shell, shell2Location.x, shell2Location.y);
		context.drawImage(shell, shell3Location.x, shell3Location.y);
		context.drawImage(shell, shell4Location.x, shell4Location.y);
		context.drawImage(shell, shell5Location.x, shell5Location.y);
		context.drawImage(shell, shell6Location.x, shell6Location.y);
		context.drawImage(shell, shell7Location.x, shell7Location.y);
		context.drawImage(shell, shell8Location.x, shell8Location.y);
		context.drawImage(shell, shell9Location.x, shell9Location.y);
		context.drawImage(shell, shell10Location.x, shell10Location.y);
		context.drawImage(shell, shell11Location.x, shell11Location.y);
		context.drawImage(shell, shell12Location.x, shell12Location.y);
		context.drawImage(shell, shell13Location.x, shell13Location.y);
	};
	requestAnimationFrame(draw);	
}

draw()

// if(score > 0){
// 	document.getElementById("canvas").className="black"
// }