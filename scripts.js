
//random variables
var level = 1
var score = 0
var highScore = 0;
var gameOver = false;
var turtleDirectionX = 2; 	 //bounce off walls
var turtleDirectionY = 2
var starfishDirectionX = 2;
var sp = .5 			// monster speed
var hsp = 1				// hero speed
var playerName
var gameOn = false;
var bossLevel = false;
var timeDifference		// countdown
var playerArray = [];	// names of sharks
var bossX = 1
var bossY = 1
var bulletCounter = 0
var bulletCounter2 = 50
var bulletLevel2 = true;
var damageDoneToBoss = 0
var pressF = true

//canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext('2d')
canvas.width = 700;		      
canvas.height = 480;
document.body.appendChild(canvas);	
var backgroundImage = new Image();
backgroundImage.src = "background.png";

function startGame(){     //change time for boss level
	gameOn = true;
	gameStart = Date.now();
	gameEnd = Date.now() + 30000;
	timerInterval = setInterval(updateTimer, 1000)}
function updateTimer(){
	var newNow = Date.now();
	timeDifference = (gameEnd - newNow) / 1000;
	if(timeDifference <= 0){clearInterval(timerInterval);
		bossLevel = true; timeDifference = 0;
	}else{
	document.getElementById('timer').innerHTML = 
	`BOSS LEVEL IN <span class='mono'>${Math.round(timeDifference)}</span> SECONDS`};
	if(bossLevel){document.getElementById('timer').innerHTML =
	`${playerName} !! KILL THE BOSS !!`}}
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
	 <span class='color-h'>${highScore}</span>`;
	if(bossLevel){
		document.getElementById('score').innerHTML += 
		`&nbsp &nbsp &nbsp &nbsp <span class='dmg-color'>
		DAMAGE: ${damageDoneToBoss}</span>`};}	

//save keys into an array
var keysDown = [];
addEventListener('keydown', function(event){keysDown[event.keyCode] = true;});
addEventListener('keyup', function(event){delete keysDown[event.keyCode];});

//hero
var hero = new Image();  		hero.src = "shark.png"
var heroLocation = {x: 310, y: 200}
hero.id = "heroID";	
function moveHero(){
	if((gameOn)&&(!bossLevel)){
		if(keysDown[39]){hero.src="shark-right.png"; console.log("ur moving right");
		}else if(keysDown[37]){hero.src="shark-left.png"; console.log("ur moving left");
		}else{hero.src="shark.png";}}

	if((!bossLevel)&&(39 in keysDown)&&(heroLocation.x < 601)){heroLocation.x += (6*hsp);  //right
		}else if((bossLevel)&&(39 in keysDown)&&(heroLocation.x < 200)){heroLocation.x += (6*hsp);}; 
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
function Monster(x, y, src){
	this.x = x;
	this.y = y;
	this.icon = new Image();
	this.icon.src = src;}
Monster.prototype.collision = false;
monsters.push(new Monster(leftSideX, bottomSideY, "dory1.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "nemo1.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "dory2.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "nemo2.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "dory3.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "nemo3.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "nemo5.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "stripe1.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "puffer1.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "turtle1.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "starfish1.png"))
monsters.push(new Monster(leftSideX, bottomSideY, "jellyfish1.png"))
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
			score += 100
			}

		if((monsters[i].collision)||(monsters[i].x>=700)||(monsters[i].x<=0)
			||(monsters[i].y>=480)||(monsters[i].y<=0)){
			monsters[i].relocate = true;}}

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
		monsters[7].y =	Math.floor(Math.random()*200) + 300;
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
	//monster12 = jellyfish1
	if(monsters[11].relocate){
		monsters[11].x = Math.floor(Math.random()*310) + 400;
		monsters[11].y = Math.floor(Math.random()*300) + 280;
		monsters[11].collision = false;
		monsters[11].relocate = false;
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
	monsters[11].x += .5*monsterSpeed; monsters[11].y -= .6*monsterSpeed;}
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
for(var i = 0; i<12; i++){deadFishArray.push(new DeadFish())}
function moveDeadFish(){
	for(var i = 0; i<12; i++){
		deadFishArray[i].y += deadFishSpeed
	}}
function drawDeadFish(){
	for(var i = 0; i<12; i++){
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
	for(var i =0; i<13; i++){
		shells[i].y += shellSpeed
	}}
function drawShell(){
	for(var i = 0; i<13; i++){
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
function bulletCollideBoss(){
	for(var i = 0; i<100; i++){
		if((bullets[i].x <= boss1Location.x + 45) 
		&& (bullets[i].y <= boss1Location.y + 150)
		&& (bullets[i].x >= boss1Location.x - 45)
		&& (bullets[i].y >= boss1Location.y + 50)){
			damageDoneToBoss++
		}
	}}

function drawBullets(){
	for(var i = 0; i < 100; i++){
		context.drawImage(bullets[i].icon, bullets[i].x, bullets[i].y)
	}}
function update(){
	moveHero();
	moveDeadFish();
	changeLevel();
	if(bossLevel){runBossLevel()
	}else{moveMonster()}
	getScore()		}
function changeLevel(){
	sp =.5
	if(score>20000){sp=4; level=5
	}else if(score > 10000){sp=2.2; level=4
	}else if(score > 7000){sp = 1.7; level=3
	}else if(score > 3000){sp = 1.2; level=2
	}else{backgroundImage.src = "background.png"; level=1
	};			}
function runBossLevel(){
	backgroundImage.src = "background2.jpg";
	hero.src = "shark-gun.png";
	fireBullet();
	// if(bulletLevel2){
	fireBullet2();
	// };
	moveShell();
	moveBoss();		
	if(heroLocation.x > 200){heroLocation.x -= 3};
	for(var i = 0; i < 12; i++){
		if(shells[i].y >= 480){
			shells[i].y = 0;
	bulletCollideBoss();
		}
	}}
function draw(){
	update();
	moveBullet();
	context.drawImage(backgroundImage, 0, 0);
	if(gameOn){drawHero()}else{context.drawImage(hero,310,200)};
	updateMonsterSpeed();
	if(bossLevel){
		drawBoss();
		drawShell();
		drawBullets();
	}else{
		drawMonster();
		drawDeadFish();
	}
	requestAnimationFrame(draw);}
draw();



