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
var shiftKey;
var camera;
var world;

var game = new Phaser.Game(config);

//scene functions

function preload() {
	this.load.image('ground', 'assets/platform.png');

	this.load.spritesheet('dude',
			'assets/rude.png',
			{ frameWidth: 512, frameHeight: 638.8 }
	);
	this.load.spritesheet('land',
			'assets/land.png',
			{ frameWidth: 386, frameHeight: 169 }
	);
	this.load.spritesheet('sky',
			'assets/sky.png',
			{ frameWidth: 1456, frameHeight: 890 }
	);
};

function create() {
	//world bounds
	this.physics.world.setBounds(0, 0, main_width*100, 890, true, true, true, true);

	//background
	this.add.tileSprite(main_width/2, main_height/2, main_width*100, 890, 'sky');

	//platforms
	platforms = this.physics.add.staticGroup();

	platforms.create(main_width/2, main_height, 'ground').setScale(main_width*100,4).refreshBody();


	//player
	player = this.physics.add.sprite(100, 300, 'dude').setScale(0.35);

	player.setCollideWorldBounds(true);

	//land
	this.add.tileSprite(0, 737, main_width*100, 169, 'land').setScale(0.4);

	camera = this.cameras.main;

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
	    key: 'cross',
	    frames: this.anims.generateFrameNumbers('dude', { start: 17, end: 22 }),
	    frameRate: 15,
	    repeat: -1
	});

	this.anims.create({
		key: 'jump',
		frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 14 }),
		frameRate: 65,
		repeat: -1
	});

	this.anims.create({
		key: 'lookup',
		frames: [ { key: 'dude', frame: 16 } ],
		frameRate: 20,
		repeat: -1
	})

	this.anims.create({
		key: 'crouch',
		frames: [ { key: 'dude', frame: 24 } ],
		frameRate: 20,
		repeat: -1
	})

	shiftKey = this.input.keyboard.addKey('SHIFT');
	cursors = this.input.keyboard.createCursorKeys();

	this.physics.add.collider(player, platforms);
};

function update() {
	camera.setBounds(0, -800, main_width*100, main_height*2);
	camera.startFollow(player);

	if (cursors.left.isDown && player.body.touching.down)
	{
			player.setVelocityX(-450);

			cursors.up.isDown ? player.anims.play('cross', true) : player.anims.play('left', true);

			player.flipX= true;
	}
	else if (cursors.right.isDown && player.body.touching.down)
	{
			player.setVelocityX(450);

			cursors.up.isDown ? player.anims.play('cross', true) : player.anims.play('left', true);

			player.flipX= false;
	}
	else if (cursors.down.isDown && player.body.touching.down)
	{
		player.setVelocityX(0);

		player.anims.play('crouch', true);
	}
	else if (cursors.up.isDown && player.body.touching.down)
	{
		player.setVelocityX(0);

		player.anims.play('lookup', true);
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

	if (shiftKey.isDown && player.body.touching.down)
	{
			player.setVelocityY(-1030);
	}

};


function end() {

};
