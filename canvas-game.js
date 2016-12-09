//random variables
	var level = 1
	var score = 0
	var highScore = 0;
	var gameOver = false;
	var directionX = 2; 	 //bounce off walls
	var directionY = 2
	var directionX2 = 2;
	var sp = .5 			// monster speed
	var hsp = 1				// hero speed
	var playerName
	var gameOn = false;
	var bossLevel = false;
	var timeDifference		// countdown
	var playerArray = [];	// names of sharks
	var bossX = 1
	var bossY = 1
	var bs = 5;    //bulletspeed
	var bulletCounter = 0
	var bulletCounter2 = (bulletCounter + 50)
	var bulletLevel2 = true;
	var damage = 0
	var pressF = true

//shells and bullets (border for boss level)	
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
	var bullet = new Image();   bullet.src="bullet.png"


	// function test(){
	// 	var arraryY = [];
	// 	// create variable "string" + "number"
	// 	// key (unique identifier)
	// 	for(var i = 0; i<2; i++){
	// 		arrayY.push(new Object{x:0, y:500})
	// 	}
	// }
	// test();

	var bullet1Location = {x:0, y:500}
	var bullet2Location = {x:0, y:500}
	var bullet3Location = {x:0, y:500}
	var bullet4Location = {x:0, y:500}
	var bullet5Location = {x:0, y:500}
	var bullet6Location = {x:0, y:500}
	var bullet7Location = {x:0, y:500}
	var bullet8Location = {x:0, y:500}
	var bullet9Location = {x:0, y:500}
	var bullet10Location = {x:0, y:500}
	var bullet11Location = {x:0, y:500}
	var bullet12Location = {x:0, y:500}
	var bullet13Location = {x:0, y:500}
	var bullet14Location = {x:0, y:500}
	var bullet15Location = {x:0, y:500}
	var bullet16Location = {x:0, y:500}
	var bullet17Location = {x:0, y:500}
	var bullet18Location = {x:0, y:500}
	var bullet19Location = {x:0, y:500}
	var bullet20Location = {x:0, y:500}
	var bullet21Location = {x:0, y:500}
	var bullet22Location = {x:0, y:500}
	var bullet23Location = {x:0, y:500}
	var bullet24Location = {x:0, y:500}
	var bullet25Location = {x:0, y:500}
	var bullet26Location = {x:0, y:500}
	var bullet27Location = {x:0, y:500}
	var bullet28Location = {x:0, y:500}
	var bullet29Location = {x:0, y:500}
	var bullet30Location = {x:0, y:500}
	var bullet31Location = {x:0, y:500}
	var bullet32Location = {x:0, y:500}
	var bullet33Location = {x:0, y:500}
	var bullet34Location = {x:0, y:500}
	var bullet35Location = {x:0, y:500}
	var bullet36Location = {x:0, y:500}
	var bullet37Location = {x:0, y:500}
	var bullet38Location = {x:0, y:500}
	var bullet39Location = {x:0, y:500}
	var bullet40Location = {x:0, y:500}
	var bullet41Location = {x:0, y:500}
	var bullet42Location = {x:0, y:500}
	var bullet43Location = {x:0, y:500}
	var bullet44Location = {x:0, y:500}
	var bullet45Location = {x:0, y:500}
	var bullet46Location = {x:0, y:500}
	var bullet47Location = {x:0, y:500}
	var bullet48Location = {x:0, y:500}
	var bullet49Location = {x:0, y:500}
	var bullet50Location = {x:0, y:500}
	var bullet51Location = {x:0, y:500}
	var bullet52Location = {x:0, y:500}
	var bullet53Location = {x:0, y:500}
	var bullet54Location = {x:0, y:500}
	var bullet55Location = {x:0, y:500}
	var bullet56Location = {x:0, y:500}
	var bullet57Location = {x:0, y:500}
	var bullet58Location = {x:0, y:500}
	var bullet59Location = {x:0, y:500}
	var bullet60Location = {x:0, y:500}
	var bullet61Location = {x:0, y:500}
	var bullet62Location = {x:0, y:500}
	var bullet63Location = {x:0, y:500}
	var bullet64Location = {x:0, y:500}
	var bullet65Location = {x:0, y:500}
	var bullet66Location = {x:0, y:500}
	var bullet67Location = {x:0, y:500}
	var bullet68Location = {x:0, y:500}
	var bullet69Location = {x:0, y:500}
	var bullet70Location = {x:0, y:500}
	var bullet71Location = {x:0, y:500}
	var bullet72Location = {x:0, y:500}
	var bullet73Location = {x:0, y:500}
	var bullet74Location = {x:0, y:500}
	var bullet75Location = {x:0, y:500}
	var bullet76Location = {x:0, y:500}
	var bullet77Location = {x:0, y:500}
	var bullet78Location = {x:0, y:500}
	var bullet79Location = {x:0, y:500}
	var bullet80Location = {x:0, y:500}
	var bullet81Location = {x:0, y:500}
	var bullet82Location = {x:0, y:500}
	var bullet83Location = {x:0, y:500}
	var bullet84Location = {x:0, y:500}
	var bullet85Location = {x:0, y:500}
	var bullet86Location = {x:0, y:500}
	var bullet87Location = {x:0, y:500}
	var bullet88Location = {x:0, y:500}
	var bullet89Location = {x:0, y:500}
	var bullet90Location = {x:0, y:500}
	var bullet91Location = {x:0, y:500}
	var bullet92Location = {x:0, y:500}
	var bullet93Location = {x:0, y:500}
	var bullet94Location = {x:0, y:500}
	var bullet95Location = {x:0, y:500}
	var bullet96Location = {x:0, y:500}
	var bullet97Location = {x:0, y:500}
	var bullet98Location = {x:0, y:500}
	var bullet99Location = {x:0, y:500}
	var bullet100Location = {x:0, y:500}
	var bulletsArray = [bullet1Location, bullet2Location, bullet3Location,
		bullet4Location, bullet5Location, bullet6Location, bullet7Location,
		bullet8Location, bullet9Location, bullet10Location, bullet11Location, 
		bullet12Location, bullet13Location, bullet14Location, bullet15Location, 
		bullet16Location, bullet17Location, bullet18Location, bullet19Location, 
		bullet20Location, bullet21Location, bullet22Location, bullet23Location,
		bullet24Location, bullet25Location, bullet26Location, bullet27Location,
		bullet28Location, bullet29Location, bullet30Location, bullet31Location, 
		bullet32Location, bullet33Location, bullet34Location, bullet35Location, 
		bullet36Location, bullet37Location, bullet38Location, bullet39Location, 
		bullet40Location, bullet41Location, bullet42Location, bullet43Location,
		bullet44Location, bullet45Location, bullet46Location, bullet47Location,
		bullet48Location, bullet49Location, bullet50Location, bullet51Location, 
		bullet52Location, bullet53Location, bullet54Location, bullet55Location, 
		bullet56Location, bullet57Location, bullet58Location, bullet59Location, 
		bullet60Location, bullet61Location, bullet62Location, bullet63Location,
		bullet64Location, bullet65Location, bullet66Location, bullet67Location,
		bullet68Location, bullet69Location, bullet70Location, bullet71Location, 
		bullet72Location, bullet73Location, bullet74Location, bullet75Location, 
		bullet76Location, bullet77Location, bullet78Location, bullet79Location, 
		bullet80Location, bullet81Location, bullet82Location, bullet83Location,
		bullet84Location, bullet85Location, bullet86Location, bullet87Location,
		bullet88Location, bullet89Location, bullet90Location, bullet91Location, 
		bullet92Location, bullet93Location, bullet94Location, bullet95Location, 
		bullet96Location, bullet97Location, bullet98Location, bullet99Location, 
		bullet100Location]

//MAAGGGICCC
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

//monsters image and location
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

	var boss1 = new Image();			boss1.src = "boss.png";
	var boss1Location = {x: 555, y: 250}

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
 
function startGame(){     //change time for boss
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
	"<span class='mono'>" + Math.round(timeDifference) +  "</span>" + " SECONDS";
	};
	if(bossLevel){document.getElementById('timer').innerHTML = playerName +" !! " + "KILL THE BOSS !!"}
}

function newPlayer(){
	playerNameDiv = document.getElementById("player-name");
	playerName = playerNameDiv.value;
	playerArray.push(new Player(playerName));
}

function Player(name){   //player constructor
	this.name = name;
	this.highscore = 0;
}

function updateSpeed(){     //monster speed and direction
	monsterLocation.x += (1*sp);		
	monsterLocation.y -= (.5*sp)
	monster2Location.x += (1.5*sp);		
	monster2Location.y -= (.5*sp)
	monster3Location.x += 2*sp;			
	monster3Location.y -= 2*sp
	monster4Location.x += 2.5*sp;		
	monster4Location.y -= .5*sp
	monster5Location.x -= 1.5*sp;		
	monster5Location.y -= .5*sp
	monster6Location.x -= 2*sp;			
	monster6Location.y -= -1*sp
	monster7Location.x -= 3.5*sp;		
	monster7Location.y -= -.5*sp
	monster8Location.x += (1*sp);		
	monster9Location.x -= 3*sp;			
	monster9Location.y -= .2*sp
	monster10Location.x -= (.3*directionX*sp);	   
	monster10Location.y -= (.3*directionY*sp)
	monster11Location.x -= (4*directionX2*sp);     //bounce off walls
	monster12Location.x -= .5*sp;		
	monster12Location.y -= 3*sp;
	
	deadfishLocation.y += 3;	
	deadfish2Location.y += 3;	
	deadfish3Location.y += 3;	
	deadfish4Location.y += 3;	
	deadfish5Location.y += 3;	
	deadfish6Location.y += 3
	deadfish7Location.y += 3;	
	deadfish8Location.y += 3;	
	deadfish9Location.y += 3
	deadfish10Location.y += 3;	
	deadfish11Location.y += 3;	
	deadfish12Location.y += 3;    // monsters speed
	boss1Location.x -= (2*bossX);
	boss1Location.y -= (2*bossY);
	bs = 15
 	for(var i = 0; i<100; i++){
 		bulletsArray[i].x += bs;}
}

function fireBullet(){
	if((70 in keysDown)&&(pressF)){
		if(bulletCounter >= 100){bulletCounter = 0};
		bulletsArray[bulletCounter] = {x: heroLocation.x+80, y: heroLocation.y + 33};
		bulletCounter++;
		pressF = false;
	}
	if((68 in keysDown)&&(!pressF)){
		if(bulletCounter >= 100){bulletCounter = 0};
		bulletsArray[bulletCounter] = {x: heroLocation.x+80, y: heroLocation.y + 33};
		bulletCounter++;
		pressF = true;	
	}
}

function fireBullet2(){
	if((70 in keysDown)&&(pressF)){
		if(bulletCounter2 >= 100){bulletCounter2 = 0};
		bulletsArray[bulletCounter2] = {x: heroLocation.x+80, y: heroLocation.y + 45};
		bulletCounter2++;
		pressF = false;
	}
	if((68 in keysDown)&&(!pressF)){
		if(bulletCounter2 >= 100){bulletCounter2 = 0};
		bulletsArray[bulletCounter2] = {x: heroLocation.x+80, y: heroLocation.y + 45};
		bulletCounter2++;
		pressF = true;	
	}
}

function collisionBoss(){
	for(var i = 0; i<100; i++){
		if((bulletsArray[i].x <= boss1Location.x + 45) 
			&& (bulletsArray[i].y <= boss1Location.y + 150)
			&& (bulletsArray[i].x >= boss1Location.x - 45)
			&& (bulletsArray[i].y >= boss1Location.y + 50)){
			damage++
			console.log(damage)
		}
	}
}

function runBossLevel(){
	if(bossLevel){
		backgroundImage.src = "background2.jpg"; 
		hero.src = "shark-gun.png"
		hsp = 1;

		fireBullet()
		collisionBoss()
		if(bulletLevel2){fireBullet2()}
		// shell location
		var qq = 5;
		shellLocation.y +=qq;	shell2Location.y +=qq;	shell3Location.y +=qq;
		shell4Location.y +=qq;	shell5Location.y +=qq;	shell6Location.y +=qq;
		shell7Location.y +=qq;	shell8Location.y +=qq;	shell9Location.y +=qq;
		shell10Location.y +=qq;	shell11Location.y +=qq;	shell12Location.y +=qq;
		shell13Location.y +=qq;
		if(heroLocation.x > 200){heroLocation.x -= 3}
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
		if(shell13Location.y >= 480){shell13Location = {x: 300, y: 0};};

		//boss1
		if(boss1Location.x >=450){bossX = 1};		if(boss1Location.x <=400){bossX = -1};
		if(boss1Location.y >=300){bossY = 1};		if(boss1Location.y <=0){bossY = -1};
		//bullet
		// if(69 in keysDown){bullet1.img.x = heroLocation.x} 
	}else{
		boss1Location = {x: 555, y: 250}
	}
}

function moveShark(){
	if((gameOn)&&(!bossLevel)){
		if(keysDown[39]){hero.src="shark-right.png"; console.log("ur moving right");
		}else if(keysDown[37]){hero.src="shark-left.png"; console.log("ur moving left");
		}else{hero.src="shark.png";}
	}

	if((!bossLevel)&&(39 in keysDown)&&(heroLocation.x < 601)){heroLocation.x += (6*hsp);  //right
		}else if((bossLevel)&&(39 in keysDown)&&(heroLocation.x < 200)){heroLocation.x += (6*hsp);} 
	if((37 in keysDown)&&(heroLocation.x > 5)){heroLocation.x -= (6*hsp);}    //left
	if((38 in keysDown)&&(heroLocation.y > 5)){heroLocation.y -= (6*hsp);}     //up
	if((40 in keysDown)&&(heroLocation.y < 403)){heroLocation.y += (6*hsp);}   //down		
}

function getScore(){
	if(score>highScore){highScore=score};

	document.getElementById("score").innerHTML ="&nbsp &nbsp Score: " + 
		"<span class='color-r'>" + score + "</span>" + 
		"&nbsp &nbsp &nbsp &nbsp High Score: "+
		"<span class='color-h'>" + highScore + "</span>";

	if(bossLevel){
		document.getElementById("score").innerHTML += 
		"<span class='dmg-color'>&nbsp &nbsp &nbsp &nbsp Damage: " + damage + "</span>"	
	}	
}	

function moveMonster(){          //before boss level
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
			 y: Math.floor(Math.random()*480)}
	}


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
}

function changeLevel(){
	sp =.5
	if(score>20000){sp=4; level=5
	}else if(score > 10000){sp=2.2; level=4
	}else if(score > 7000){sp = 1.7; level=3
	}else if(score > 3000){sp = 1.2; level=2
	}else{backgroundImage.src = "background.png"; level=1
	};
}

function update(){
	moveShark()
	changeLevel()
	runBossLevel()
	if(!bossLevel){moveMonster()}
	getScore()	
}

function drawBullets(){
	// var firingRate = 0
	for(var i = 0; i<100; i++){
		// if((bulletsArray[i].x - firingRate)>5){
			context.drawImage(bullet, bulletsArray[i].x, bulletsArray[i].y);
		// } firingRate = bulletsArray[i].x

	}
}

function drawMonster(){
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
}

function drawShell(){
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
}

function draw(){
	// context.drawImage(monster1, monster1.x, monster1.y);
	update();	
	updateSpeed();
	context.drawImage(backgroundImage, 0, 0);
	if(gameOn){context.drawImage(hero, heroLocation.x, heroLocation.y);}
	else{context.drawImage(hero, 310, 200)};

	if(!bossLevel){
		drawMonster()
	}else{
		context.drawImage(boss1, boss1Location.x, boss1Location.y);
		drawShell();
		drawBullets();
		// setInterval(drawBullets, 500);
	};
	requestAnimationFrame(draw);	
}

draw()


