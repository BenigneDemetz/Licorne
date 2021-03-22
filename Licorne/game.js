var gameCanvas = document.getElementById('gameScreen');
var ctx = gameCanvas.getContext("2d");
var sprites = {
	player: "player.png",
	ennemis: "patrégensti.png",
	boss1: "lepreumiépatrégensti",
	boss2: "ledesièmepatrégennti",
	boss3: "l'agentppatrégensti",
	balles: "wowc1bal",
	background: "levrettebacground.png"
}
var vie = 3
var pv = 5
var lvl = 1


function clear(ctx) {
	ctx.beginPath();
	ctx.rect(0, 0, 1503, 480);
	ctx.fillStyle = "pink";
	ctx.fill();


	
}
var Player = function() {
	this.pos = {
		x: 0 + 0 + 10,
		y: 380,
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
		if(this.pos.y <= 370)
			this.pos.y += 10;
		this.pos.x = p;
		
	}
	this.draw = function (ctx) {
		ctx.drawImage(this.sprite, this.pos.x, this.pos.y, 120, 85);
	}
	window.addEventListener("keydown", (e) => this.inputHandler(e));
}

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

var benigne = new Player();
var background = new Background();

function update(ctx, sprites) {
	clear(ctx);
	background.update(ctx);
	benigne.update(ctx);
}

setInterval(update, 1, ctx, sprites);