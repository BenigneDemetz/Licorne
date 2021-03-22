var gameCanvas = document.getElementById('gameScreen');
var ctx = gameCanvas.getContext("2d");
var sprites = {
	player: "player.png",
	background: "desertbackground.jpg",
	sol: "sol.png"
}
var gravity = 0.5;


var Background = function() {
	this.pos = {
		x:0,
		y:0 
	}
	this.sprite = new Image();
	this.sprite.src = sprites.background
	this.update = function (ctx) {
		this.draw(ctx);
	}

	this.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos.x, this.pos.y, 1503, 480);
	}
}
var W = 1503;
var H = 480;
var vx = 0;
var vy = (Math.random() * -10) - 5;


function clear(ctx) {
	ctx.beginPath();
	ctx.rect(0, 0, 1503, 480);
	ctx.fillStyle = "pink";
	ctx.fill();


	
}
var Player = function() {
	this.pos = {
		x: 0 + 0 + 10,
		y: 290,
	}

	this.sprite = new Image();
	this.sprite.src = sprites.player; 
	this.update = function (ctx) {
		this.draw(ctx);
	}	
	this.inputHandler = function (e) {
		if (e.keyCode == 81)  
			this.pos.x -= 20;
		if (e.keyCode == 68)
			this.pos.x += 20;
		if (e.keyCode == 32)
			this.pos.y -= 100;
		if(this.pos.y <= 280)
			this.pos.y += 10;
		
	}

	this.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos.x, this.pos.y, 120, 85);
	}
	window.addEventListener("keydown", (e) => this.inputHandler(e));
}




var Floor = function() {
	this.pos = {
		x:100,
		y:100
	}
	this.sprite = new Image();
	this.sprite.src = sprites.sol
	this.update = function (ctx) {
		this.draw(ctx);
	}

	this.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos.x, this.pos.y, 200, 20);
	}
}

if (Player.x < Floor.x + Floor.width  && Player.x + Player.width  > Floor.x &&
		Player.y < Floor.y + Floor.height && Player.y + Player.height > Floor.y) {
	Player.pos.x == 800
}

var background = new Background();
var sol = new Floor();
var benigne = new Player();
(function renderFrame() {
    requestAnimationFrame(renderFrame);
    ctx.clearRect(0, 0, W, H, ctx);
 
    benigne.x += vx;
    benigne.y += vy;
    vy += gravity;
 
    background.draw(ctx);
    benigne.draw(ctx);
    sol.draw(ctx);
    if (benigne.draw < 290) {
		benigne.pos.y += gravity
	};
}());


function update(ctx, sprites) {
	clear(ctx);
	background.update(ctx);
	benigne.update(ctx);
	sol.update(ctx);
}

setInterval(update, 1, ctx, sprites);