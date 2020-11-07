// Our game scene
var config = {
	type: Phaser.AUTO,
	width: screen.width,
	height: screen.height,
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
var sky;
var tree1;
var tree2;
var tree3;

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
	this.load.spritesheet('tree1',
			'assets/tree1.png',
			{ frameWidth: 1440, frameHeight: 1440 }
	);
	this.load.spritesheet('tree2',
			'assets/tree2.png',
			{ frameWidth: 1440, frameHeight: 1440 }
	);
	this.load.spritesheet('tree3',
			'assets/tree3.png',
			{ frameWidth: 1440, frameHeight: 1440 }
	);
};

function create() {
	//world bounds
	this.physics.world.setBounds(0, 0, config.width*100, config.height, true, true, true, true);

	//background
	sky = this.add.tileSprite(config.width/2, config.height/2, config.width, config.height, 'sky');
	sky.setScrollFactor(0);

	//trees
	tree3 = this.add.tileSprite(config.width/2, config.height*0.5, config.width, config.height*2, 'tree3').setScale(1);
	tree3.setScrollFactor(0);

	tree2 = this.add.tileSprite(config.width/2, config.height*0.5, config.width, config.height*2, 'tree2').setScale(1);
	tree2.setScrollFactor(0);

	tree1 = this.add.tileSprite(config.width/2, config.height*0.5, config.width, config.height*2, 'tree1').setScale(1);
	tree1.setScrollFactor(0);

	//platforms
	platforms = this.physics.add.staticGroup();

	platforms.create(config.width/2, config.height, 'ground').setScale(config.width*100,4).refreshBody();

	//land
	this.add.tileSprite(0, config.height*0.95, config.width*100, 169, 'land').setScale(0.4);

	//player
	player = this.physics.add.sprite(100, 300, 'dude').setScale(0.3);

	player.setCollideWorldBounds(true);

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

	camera.setBounds(0, -1.01*config.height, config.width*100, config.height*2);
	camera.startFollow(player);

	tree1.tilePositionX = camera.scrollX * 0.6;
	tree1.tilePositionY = camera.scrollY * 0.6;

	tree2.tilePositionX = camera.scrollX * 0.4;
	tree2.tilePositionY = camera.scrollY * 0.4;

	tree3.tilePositionX = camera.scrollX * 0.2;
	tree3.tilePositionY = camera.scrollY * 0.2;

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
