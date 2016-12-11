
//random variables
var level = 1
var score = 0
var highScore = 0;
var gameOver = false;
var turtleDirectionX = 2; 	 //bounce off walls
var turtleDirectionY = 2
var starfishDirectionX = 2;
var hsp = 1.1				// hero speed
var playerName = ""
var gameOn = false;
// var bossLevel = false;
var timeDifference		// countdown
var playerArray = [];	// names of sharks
var bossX = 1
var bossY = 1
var bulletCounter = 0
var bulletCounter2 = 50
var bulletLevel2 = true;
var damageDoneToBoss = 0
var pressF = true
var restartTime = false;
function startGame(){     //change time for boss level
	// bossLevel=true;
	gameOn = true;
	gameStart = Date.now();
	gameEnd = Date.now() + 30000;
	timerInterval = setInterval(updateTimer, 1000);
	$('#hideWhenGameStarts').addClass('hidden');
	$('#timer').removeClass('hidden')}

//canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext('2d')
canvas.width = 700;		      
canvas.height = 480;
document.body.appendChild(canvas);	
var backgroundImage = new Image();
backgroundImage.src = "background.png";

function updateTimer(){
	var newNow = Date.now();
	timeDifference = (gameEnd - newNow) / 1000;
	if(timeDifference <= 0){clearInterval(timerInterval);
		timeDifference = 0;
		// $('#timer').html('GAME OVER')
	}else{
	document.getElementById('timer').innerHTML = 
	`CATCH THEM ALL IN<br> <span class='mono'>${Math.round(timeDifference)}</span> SECONDS!`};
	if(level===2){document.getElementById('timer').innerHTML =
	`${playerName} !! KILL THE BOSS !!`}
	// if(level===2){clearInterval(timerInterval);}
	}
function setGameOver(){
	if(timeDifference === 0){
		$('#hideWhenGameStarts').removeClass('hidden');
		$('#timer').addClass('hidden')
		gameOn = false;
		gameOver = false;
		level = 1
		score = 0
		turtleDirectionX = 2; 	 //bounce off walls
		turtleDirectionY = 2
		starfishDirectionX = 2;
		hsp = 1.1				// hero speed
		bossX = 1
		bossY = 1
		bulletCounter = 0
		bulletCounter2 = 50
		bulletLevel2 = true;
		damageDoneToBoss = 0
		pressF = true
		timeDifference = 30;
		nemoCount = 30
		doryCount = 20
		stripeCount = 20
		jellyCount = 4
		puffCount = 4
		turtleCount = 2
		document.getElementById('timer').innerHTML = 
		`CATCH THEM ALL IN<br> <span class='mono'>${Math.round(timeDifference)}</span> SECONDS!`};
		if(level===2){document.getElementById('timer').innerHTML =
		`${playerName} !! KILL THE BOSS !!`
	}}
function changeLevel(){
	if((!nemoCount)&&(!doryCount)&&(!stripeCount)&&
		(!jellyCount)&&(!puffCount)&&(!turtleCount)){
		level++
		nemoCount = level*2 + 30
		doryCount = level*2 + 13
		stripeCount = level*2 + 23
		jellyCount = level + 3
		puffCount = level + 3
		turtleCount = level - 1
		console.log(level)}
	if(level===3){
		backgroundImage.src = "background3.jpg";
		$('#fishBoxes').removeClass('hidden');
		$('#health-bar-bg').addClass('hidden');
		$('#healthBar').addClass('hidden');
		$('#bossBoss').html('CATCH');
		context.drawImage(monsters[9].icon, monsters[9].x, monsters[9].y);
		if(restartTime){
			startGame();
			restartTime = false;
			monsterSpeed = 1.5

		}
	}
}
function bossDead(){
	if(damageDoneToBoss>5000){
		level++;
		timeDifference = 30;
		damageDoneToBoss=0;
		restartTime = true;
		for(var i = 0; i<5000; i++){
			score++;
			healthBarWidth = 99.8
		}
	}}
function newPlayer(){
	playerNameDiv = document.getElementById("player-name");
	playerName = playerNameDiv.value;
	playerArray.push(new Player(playerName));}
function Player(name){   //player constructor
	this.name = name;
	this.highscore = 0;}
function getScore(){
	if(score>highScore){highScore=score};
	document.getElementById('score').innerHTML =
	 `&nbsp &nbsp &nbsp &nbsp SCORE: <span class='color-3'>${score}</span>    
	 &nbsp &nbsp &nbsp &nbsp HIGH SCORE: 
	 <span class='color-h'>${highScore}</span> [${playerName}]`;}	

//save keys into an array
var keysDown = [];
addEventListener('keydown', function(event){keysDown[event.keyCode] = true;});
addEventListener('keyup', function(event){delete keysDown[event.keyCode];});

//fishCounter
var nemoCount = 30
var doryCount = 20
var stripeCount = 20
var jellyCount = 4
var puffCount = 4
var turtleCount = 1
function countFish(){
	if(gameOn){
	document.getElementById('nemoCount').innerHTML = nemoCount
	document.getElementById('doryCount').innerHTML = doryCount
	document.getElementById('stripeCount').innerHTML = stripeCount
	document.getElementById('jellyCount').innerHTML = jellyCount
	document.getElementById('puffCount').innerHTML = puffCount
	document.getElementById('turtleCount').innerHTML = turtleCount}}

//hero
var hero = new Image();  		hero.src = "shark.png"
var heroLocation = {x: 310, y: 200}
hero.id = "heroID";	
function moveHero(){
	if((gameOn)&&(level!==2)){
		if(keysDown[39]){hero.src="shark-right.png"; 
		}else if(keysDown[37]){hero.src="shark-left.png";
		}else{hero.src="shark.png";}}

	if((gameOn)&&(level!==2)&&(39 in keysDown)&&(heroLocation.x < 601)){heroLocation.x += (6*hsp);  //right
		}else if((level===2)&&(39 in keysDown)&&(heroLocation.x < 200)){heroLocation.x += (6*hsp);}; 
	if((37 in keysDown)&&(heroLocation.x > 5)){heroLocation.x -= (6*hsp);};    //left
	if((38 in keysDown)&&(heroLocation.y > 5)){heroLocation.y -= (6*hsp);};     //up
	if((40 in keysDown)&&(heroLocation.y < 403)){heroLocation.y += (6*hsp);};}   //down
function drawHero(){
	if(gameOn){context.drawImage(hero, heroLocation.x, heroLocation.y);
	}else{context.drawImage(hero, 310, 200)};}

//boss
var boss1 = new Image();			boss1.src = "boss.png";
var boss1Location = {x: 555, y: 250}
function moveBoss(){
	boss1Location.x -= (2*bossX);
	boss1Location.y -= (2*bossY);
	if(boss1Location.x >=450){bossX = 1};		
	if(boss1Location.x <=400){bossX = -1};
	if(boss1Location.y >=300){bossY = 1};		
	if(boss1Location.y <=0){bossY = -1};}
function drawBoss(){
	// context.drawImage(boss1, boss1Location.x, boss1Location.y);
	context.drawImage(boss1, boss1Location.x, boss1Location.y);}

//monsters
var monsters = [];
var leftSideX = Math.random(Math.floor()*150)
var bottomSideY = Math.random(Math.floor()*100 + 380)
var monsterSpeed = 1
function Monster(x, y, src, type){
	this.x = x;
	this.y = y;
	this.icon = new Image();
	this.icon.src = src;
	this.type = type}
Monster.prototype.collision = false;
monsters.push(new Monster(leftSideX, bottomSideY, "dory1.png", "dory"))//0
monsters.push(new Monster(leftSideX, bottomSideY, "nemo1.png", "nemo"))//1
monsters.push(new Monster(leftSideX, bottomSideY, "dory2.png", "dory"))//2
monsters.push(new Monster(leftSideX, bottomSideY, "nemo2.png", "nemo"))//3
monsters.push(new Monster(leftSideX, bottomSideY, "dory3.png", "dory"))//4
monsters.push(new Monster(leftSideX, bottomSideY, "nemo3.png", "nemo"))//5
monsters.push(new Monster(leftSideX, bottomSideY, "nemo5.png", "nemo"))//6
monsters.push(new Monster(leftSideX+300, bottomSideY, "stripe1.png", "stripe"))//7
monsters.push(new Monster(leftSideX, bottomSideY, "puffer1.png", "puff"))//8
monsters.push(new Monster(leftSideX, bottomSideY, "turtle1.png", "turtle"))//9
monsters.push(new Monster(leftSideX, bottomSideY, "jellyfish1.png", "jelly"))//10
monsters.push(new Monster(leftSideX, bottomSideY, "jellyfish1.png", "jelly"))//11
monsters.push(new Monster(leftSideX+500, Math.floor(Math.random()*480), "stripe1.png", "stripe"))//12
monsters.push(new Monster(leftSideX+200, Math.floor(Math.random()*480), "stripe1.png", "stripe"))//13
monsters.push(new Monster(leftSideX, bottomSideY-200, "stripe1.png", "stripe"))//14
monsters.push(new Monster(leftSideX, bottomSideY, "nemo5.png", "nemo"))//15
monsters.push(new Monster(leftSideX-100, bottomSideY, "nemo5.png", "nemo"))//16
monsters.push(new Monster(leftSideX-200, bottomSideY, "nemo3.png", "nemo"))//17
monsters.push(new Monster(leftSideX, bottomSideY, "nemo3.png", "nemo"))//18
monsters.push(new Monster(leftSideX, bottomSideY, "puffer1.png", "puff"))//19

function moveMonster(){//before boss level
	//cannot loop through array (each monster spawns in different part of canvas)
	for(var i = 0; i<monsters.length; i++){
		if((69 in keysDown)&&(heroLocation.x <= monsters[i].x + 45) 
		&& (heroLocation.y <= monsters[i].y + 45)
		&& (monsters[i].x <= heroLocation.x + 45)
		&& (monsters[i].y <= heroLocation.y + 45)){
			deadFishArray[i].x = monsters[i].x;
			deadFishArray[i].y = monsters[i].y;
			monsters[i].collision = true;
			if((monsters[i].type === "nemo")&&(nemoCount>0)){nemoCount--};
			if((monsters[i].type === "dory")&&(doryCount>0)){doryCount--};
			if((monsters[i].type === "stripe")&&(stripeCount>0)){stripeCount--};
			if((monsters[i].type === "turtle")&&(turtleCount>0)){turtleCount--};
			if((monsters[i].type === "puff")&&(puffCount>0)){puffCount--};
			if((monsters[i].type === "jelly")&&(jellyCount>0)){jellyCount--};
			score += 100
			}
		if((monsters[i].collision)||(monsters[i].x>=700)||(monsters[i].x<=0)
			||(monsters[i].y>=480)||(monsters[i].y<=0)){
			monsters[i].relocate = true;}
	}
	//monster1 = dory1
	if(monsters[0].relocate){
		monsters[0].x = Math.floor(Math.random()*300);
		monsters[0].y =	Math.floor(Math.random()*200) + 300;
		monsters[0].collision = false;
		monsters[0].relocate = false;
	};
	//monster2 = nemo1
	if(monsters[1].relocate){
		monsters[1].x = Math.floor(Math.random()*266);
		monsters[1].y =	Math.floor(Math.random()*200) + 200;
		monsters[1].collision = false;
		monsters[1].relocate = false;
	};
	//monster3 = dory2
	if(monsters[2].relocate){
		monsters[2].x = Math.floor(Math.random()*211);
		monsters[2].y =	Math.floor(Math.random()*200) + 300;
		monsters[2].collision = false;
		monsters[2].relocate = false;
	};
	//monster4 = nemo2
	if(monsters[3].relocate){
		monsters[3].x = Math.floor(Math.random()*230);
		monsters[3].y =	Math.floor(Math.random()*200) + 300;
		monsters[3].collision = false;
		monsters[3].relocate = false;
	};
	//monster5 = dory3
	if(monsters[4].relocate){
		monsters[4].x = Math.floor(Math.random()*300) + 400;
		monsters[4].y =	Math.floor(Math.random()*200);
		monsters[4].collision = false;
		monsters[4].relocate = false;
	};
	//monster6 = nemo3
	if(monsters[5].relocate){
		monsters[5].x = Math.floor(Math.random()*230) + 500;
		monsters[5].y =	Math.floor(Math.random()*200);
		monsters[5].collision = false;
		monsters[5].relocate = false;
	};
	//monster7 = nemo4
	if(monsters[6].relocate){
		monsters[6].x = Math.floor(Math.random()*200) + 500;
		monsters[6].y =	Math.floor(Math.random()*150);
		monsters[6].collision = false;
		monsters[6].relocate = false;
	};
	//monster8 = stripe1
	if(monsters[7].relocate){
		monsters[7].x = Math.floor(Math.random()*250);
		monsters[7].y =	Math.floor(Math.random()*480);
		monsters[7].collision = false;
		monsters[7].relocate = false;
	};
	//monster 9 = puff
	if(monsters[8].relocate){
		monsters[8].x = Math.floor(Math.random()*100 + 600);
		monsters[8].y =	Math.floor(Math.random()*480)
		monsters[8].collision = false;
		monsters[8].relocate = false;
	};
	//monster10 = turtle (bounce off walls)
	if(monsters[9].collision){
		monsters[9].x = Math.floor(Math.random()*700);
		monsters[9].y =	Math.floor(Math.random()*480);
		monsters[9].collision = false;
		}else{
			if(monsters[9].x >=660){turtleDirectionX = -1};
			if(monsters[9].y >=430){turtleDirectionY = -1};
			if(monsters[9].x <=1){turtleDirectionX = 1};
			if(monsters[9].y <=1){turtleDirectionY = 2};	
	};
	//monster11 = starfish (bounce off side walls)
	if(monsters[10].collision){
		monsters[10].x = Math.floor(Math.random()*700);
		monsters[10].y = 422;
		monsters[10].collision = false;
		}else{
			if(monsters[10].x >=640){starfishDirectionX = -2};
			if(monsters[10].x <=1){starfishDirectionX = +2};
	};
	if(monsters[11].relocate){
		monsters[11].x = Math.floor(Math.random()*310) + 400;
		monsters[11].y = Math.floor(Math.random()*300) + 280;
		monsters[11].collision = false;
		monsters[11].relocate = false;
	};
	if(monsters[12].relocate){
		monsters[12].x = Math.floor(Math.random()*200);
		monsters[12].y = Math.floor(Math.random()*250) + 300;
		monsters[12].collision = false;
		monsters[12].relocate = false;
	};	
	if(monsters[13].relocate){
		monsters[13].x = Math.floor(Math.random()*200);
		monsters[13].y = Math.floor(Math.random()*480)
		monsters[13].collision = false;
		monsters[13].relocate = false;
	};
	if(monsters[14].relocate){
		monsters[14].x = Math.floor(Math.random()*200);
		monsters[14].y = Math.floor(Math.random()*480)
		monsters[14].collision = false;
		monsters[14].relocate = false;
	};
	if(monsters[15].relocate){
		monsters[15].x = Math.floor(Math.random()*300) + 400;
		monsters[15].y =	Math.floor(Math.random()*200);
		monsters[15].collision = false;
		monsters[15].relocate = false;
	};
	if(monsters[16].relocate){
		monsters[16].x = Math.floor(Math.random()*300) + 400;
		monsters[16].y =	Math.floor(Math.random()*200);
		monsters[16].collision = false;
		monsters[16].relocate = false;
	};
	if(monsters[17].relocate){
		monsters[17].x = Math.floor(Math.random()*300) + 400;
		monsters[17].y =	Math.floor(Math.random()*200);
		monsters[17].collision = false;
		monsters[17].relocate = false;
	};
	if(monsters[18].relocate){
		monsters[18].x = Math.floor(Math.random()*300) + 400;
		monsters[18].y = Math.floor(Math.random()*200);
		monsters[18].collision = false;
		monsters[18].relocate = false;
	};
		//monster 19 = puff
	if(monsters[19].relocate){
		monsters[19].x = Math.floor(Math.random()*100 + 600);
		monsters[19].y = Math.floor(Math.random()*480)
		monsters[19].collision = false;
		monsters[19].relocate = false;
	};}
function updateMonsterSpeed(){
	monsters[0].x += .5*monsterSpeed;	monsters[0].y -= .3*monsterSpeed;
	monsters[1].x += 1.8*monsterSpeed;	monsters[1].y -= .6*monsterSpeed;
	monsters[2].x += monsterSpeed;		monsters[2].y -= monsterSpeed;
	monsters[3].x += 1.3*monsterSpeed;	monsters[3].y -= .3*monsterSpeed;
	monsters[4].x -= .5*monsterSpeed;	monsters[4].y += .4*monsterSpeed;
	monsters[5].x -= .5*monsterSpeed;	monsters[5].y += .7*monsterSpeed;
	monsters[6].x -= 2*monsterSpeed; 	monsters[6].y += .3*monsterSpeed;
	monsters[7].x += 1.5*monsterSpeed; 	monsters[7].y -= .6*monsterSpeed;
	monsters[8].x -= 1*monsterSpeed;	monsters[8].y -= .3*monsterSpeed;
	monsters[9].x += .2*monsterSpeed*turtleDirectionX; 
	monsters[9].y += .5*monsterSpeed*turtleDirectionY;
	monsters[10].x += 1*monsterSpeed*starfishDirectionX;
	monsters[10].y = 422;
	monsters[11].x += .5*monsterSpeed; monsters[11].y -= .6*monsterSpeed;
	monsters[12].x += .8*monsterSpeed; 	monsters[12].y -= .6*monsterSpeed;
	monsters[13].x += 1.7*monsterSpeed; 	monsters[13].y -= .6*monsterSpeed;
	monsters[14].x += .4*monsterSpeed; 	monsters[14].y -= 1.6*monsterSpeed;
	monsters[15].x -= 1.5*monsterSpeed;	monsters[15].y += 1.4*monsterSpeed;
	monsters[16].x -= 2.5*monsterSpeed;	monsters[16].y += .7*monsterSpeed;
	monsters[17].x -= 3.5*monsterSpeed;	monsters[17].y += .9*monsterSpeed;
	monsters[18].x -= .5*monsterSpeed;	monsters[18].y += 1.4*monsterSpeed;
	monsters[19].x -= 1.2*monsterSpeed;	monsters[19].y -= .1*monsterSpeed;}
function drawMonster(){
	for(var i = 0; i<monsters.length; i++){
	 	context.drawImage(monsters[i].icon, monsters[i].x, monsters[i].y);	
	}}

//deadfish
var deadFishArray = [];
var deadFishSpeed = 3
function DeadFish(x){}
DeadFish.prototype.x = 0;
DeadFish.prototype.y = 600;
DeadFish.prototype.icon = new Image();
DeadFish.prototype.icon.src = "deadfish.png"
// Bullet.prototype.moveDeadFish = function(){this.y += deadFishSpeed;}

for(var i = 0; i<monsters.length; i++){deadFishArray.push(new DeadFish())}
function moveDeadFish(){
	for(var i = 0; i<monsters.length; i++){
		deadFishArray[i].y += deadFishSpeed
	}}
function drawDeadFish(){
	for(var i = 0; i<monsters.length; i++){
		context.drawImage(deadFishArray[i].icon, deadFishArray[i].x, deadFishArray[i].y)}}

//shells
var shells = [];
var shellSpeed =10;
function Shell(y){this.y = y;}
Shell.prototype.x = 300;
Shell.prototype.icon = new Image();
Shell.prototype.icon.src = "shell.png"
for(var i = 0; i < 13; i++){shells.push(new Shell(i*40))}
function moveShell(){
	for(var i =0; i<shells.length; i++){
		shells[i].y += shellSpeed
	}}
function drawShell(){
	for(var i = 0; i<shells.length; i++){
		context.drawImage(shells[i].icon, shells[i].x, shells[i].y)}}

//bullets
var bullets = [];
var bulletSpeed = 15;
function Bullet(x, y){
	this.x = x;
	this.y = y;}
Bullet.prototype.icon = new Image();
Bullet.prototype.icon.src = "bullet.png"
for(var i = 0; i < 100; i++){bullets.push(new Bullet(0, 500))}
function moveBullet(){
	for(var i = 0; i<100; i++){
		bullets[i].x += bulletSpeed;
	}}
function fireBullet(){
	if((70 in keysDown)&&(pressF)){
		if(bulletCounter >= 98){bulletCounter = 0};
		bullets[bulletCounter].x = heroLocation.x+80
		bullets[bulletCounter].y = heroLocation.y+33;
		bulletCounter++;
	// 	pressF = false;
	// }
	// if((68 in keysDown)&&(!pressF)){
	// 	if(bulletCounter > 98){bulletCounter = 0};
	// 	bullets[bulletCounter].x = heroLocation.x+80
	// 	bullets[bulletCounter].y = heroLocation.y+33;
	// 	bulletCounter++;
	// 	pressF = true;	
	}}
function fireBullet2(){
	if((70 in keysDown)&&(pressF)){
		if(bulletCounter2 > 98){bulletCounter2 = 0};
		bullets[bulletCounter2].x = heroLocation.x+80
		bullets[bulletCounter2].y = heroLocation.y+45;
		bulletCounter2++;
	// 	pressF = false;
	// }
	// if((68 in keysDown)&&(!pressF)){
	// 	if(bulletCounter2 > 98){bulletCounter2 = 0};
	// 	bullets[bulletCounter2].x = heroLocation.x+80
	// 	bullets[bulletCounter2].y = heroLocation.y+45;
	// 	bulletCounter2++;
	// 	pressF = true;	
	}}
var healthBarWidth
function bulletCollideBoss(){
	for(var i = 0; i<100; i++){
		if((bullets[i].x <= boss1Location.x + 45) 
		&& (bullets[i].y <= boss1Location.y + 150)
		&& (bullets[i].x >= boss1Location.x - 45)
		&& (bullets[i].y >= boss1Location.y + 50)){
			clearInterval(timerInterval)
			damageDoneToBoss += 2;
			bullets[i].x = 800;
			bullets[i].y = 520;
			healthBarWidth = 100-(damageDoneToBoss/50)
			if(healthBarWidth>=15){
			$("#healthBar").width(healthBarWidth + '%');
			$("#healthBar").html('5000 / ' + (5000-damageDoneToBoss))
			}else if(healthBarWidth>=0){
				$("#healthBar").width(healthBarWidth + '%');
				$("#healthBar").html(5000-damageDoneToBoss)
			}else{healthBarWidth = 0;}
		}
	}}
function drawBullets(){
	for(var i = 0; i < 100; i++){
		context.drawImage(bullets[i].icon, bullets[i].x, bullets[i].y)
	}}

var missiles = [];
var missileSpeedX = 1.7;
function Missile(x){this.x = x;}
Missile.prototype. y = 500
Missile.prototype.icon = new Image();
Missile.prototype.icon.src = "missile.png"
for(var i = 0; i < 5; i++){missiles.push(new Missile(i * 125))};
function moveMissile(){
	// for(var i = 0; i<missiles.length; i++){
		// missiles[i].x -= missileSpeedX
	// }
	missiles[0].x -= missileSpeedX * 1.4
	missiles[1].x -= missileSpeedX * 1.7
	missiles[2].x -= missileSpeedX * 1.5
	missiles[3].x -= missileSpeedX * 1.2
	missiles[4].x -= missileSpeedX * 1.1
	missiles[0].y += missileSpeedX * 0.7
	missiles[1].y -= missileSpeedX * 0.4
	missiles[2].y += missileSpeedX * 0.5
	missiles[3].y -= missileSpeedX * 0.6
	missiles[4].y += missileSpeedX * 0.3};
function fireMissile(){
	for(var i =0; i<missiles.length; i++){
		missiles[i].x = boss1Location.x;
		missiles[i].y = boss1Location.y;
	}}
function collideMissile(){
	for(var i = 0; i<missiles.length; i++){
		if((missiles[i].x <= heroLocation.x + 15) 
		&& (missiles[i].y <= heroLocation.y + 55)
		&& (missiles[i].x >= heroLocation.x - 15)
		&& (missiles[i].y >= heroLocation.y - 55)){	
			missiles[i].x = boss1Location.x + 140;
			missiles[i].y = boss1Location.y + 100;
			console.log("you've been hit");
		}
		if(missiles[i].x<=0){
			missiles[i].x = boss1Location.x + 140;
			missiles[i].y = boss1Location.y + 100;
		}
	}}
function drawMissile(){
	for(var i = 0; i < missiles.length; i++){
		// if(damageDoneToBoss>3000){
			context.drawImage(missiles[i].icon, missiles[i].x, missiles[i].y)
		// }else{
			// context.drawImage(missiles[0].icon, missiles[0].x, missiles[0].y)
			// context.drawImage(missiles[1].icon, missiles[1].x, missiles[1].y)
		// }		
	}}
var missileCounter = 0
function fireMissile(){
	if(missileCounter>=missiles.length){missileCounter=0;};
	missiles[missileCounter].x = boss1Location.x;
	missiles[missileCounter].y = boss1Location.y;
	missileCounter++;}
function update(){
	countFish()
	moveHero();
	moveDeadFish();
	changeLevel();
	if(level===2){runBossLevel()
	}else{moveMonster()}
	getScore()		}
function runBossLevel(){
	if(level===2){
	backgroundImage.src = "background2.jpg";}
	hero.src = "shark-gun.png";
	$('#bossBoss').html('BOSS')
	fireBullet();
	fireBullet2();
	moveShell();
	moveBoss();		
	// fireMissile();
	moveMissile();
	collideMissile();
	if(heroLocation.x > 200){heroLocation.x -= 3};
	for(var i = 0; i < shells.length; i++){
		if(shells[i].y >= 480){
			shells[i].y = 0;}}
	bulletCollideBoss();
	$(document).ready(function(){
		$('#fishBoxes').addClass('hidden')
		$('#health-bar-bg').removeClass('hidden')
		$('#healthBar').removeClass('hidden')
	});}
function draw(){
	bossDead();
	setGameOver();
	update();
	context.drawImage(backgroundImage, 0, 0);
	if(gameOn){drawHero()}else{context.drawImage(hero,310,200)};
	updateMonsterSpeed();
	if(level===2){
		drawBoss();
		drawShell();
		drawBullets();
		moveBullet();
		drawMissile();
	}else{
		drawMonster();
		drawDeadFish();		
	}
	requestAnimationFrame(draw);}
draw();



