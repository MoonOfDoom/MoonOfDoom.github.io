// Our game scene

var main_width = screen.width;
var main_height = screen.height;

var config = {
	type: Phaser.AUTO,
	width: main_width,
	height: main_height,
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
	physics: {
			default: 'arcade',
			arcade: {
					gravity: { y: 1600 },
					debug: false
			}
	},
	scene: {
			preload: preload,
			create: create,
			update: update
	}
};

// Create the game with our config values
// this will also inject our canvas element into the HTML source
// for us
var player;
var platforms;
var cursors;

var game = new Phaser.Game(config);

//scene functions
// scene.init = function() {
//
// };

function preload() {
	this.load.image('sky', 'assets/sky.png');
	this.load.image('ground', 'assets/platform.png');

	this.load.spritesheet('dude',
			'assets/rude.png',
			{ frameWidth: 1082, frameHeight: 1350 }
	);
};

function create() {
	//background
	this.add.image(main_width/2, main_height/2, 'sky');

	//platforms
	platforms = this.physics.add.staticGroup();

	platforms.create(main_width/2, main_height, 'ground').setScale(4).refreshBody();

	//player
	player = this.physics.add.sprite(100, 300, 'dude').setScale(0.1);


	player.setCollideWorldBounds(true);

	this.anims.create({
	    key: 'left',
	    frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 6 }),
	    frameRate: 15,
	    repeat: -1
	});

	this.anims.create({
	    key: 'turn',
	    frames: [ { key: 'dude', frame: 0 } ],
	    frameRate: 20
	});

	this.anims.create({
	    key: 'right',
	    frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 6 }),
	    frameRate: 15,
	    repeat: -1
	});

	this.anims.create({
		key: 'jump',
		frames: this.anims.generateFrameNumbers('dude', { start: 7, end: 13 }),
		frameRate: 45,
		repeat: -1
	});

	cursors = this.input.keyboard.createCursorKeys();

	this.physics.add.collider(player, platforms);
};

function update() {

	if (cursors.left.isDown && player.body.touching.down)
	{
			player.setVelocityX(-250);

			player.anims.play('left', true);

			player.flipX= true;
	}
	else if (cursors.right.isDown && player.body.touching.down)
	{
			player.setVelocityX(250);

			player.anims.play('right', true);

			player.flipX= false;
	}
	else {
		if(!player.body.touching.down)
		{
			player.anims.play('jump',true);
		}
		else
		{
			player.setVelocityX(0);

			player.anims.play('turn',true);
		}
	}

	if (cursors.up.isDown && player.body.touching.down)
	{
			player.setVelocityY(-830);
	}

};


function end() {

};
