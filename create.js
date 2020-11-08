export default function create() {
	//world bounds
	this.physics.world.setBounds(0, 0, screen.width*100, screen.height, true, true, true, true);

	//background
	this.sky = this.add.tileSprite(screen.width/2, screen.height/2, screen.width, screen.height, 'sky');
	this.sky.setScrollFactor(0);

	//moon
	this.moon = this.add.sprite(screen.width/2, screen.height/5,'moon');
	this.moon.setScrollFactor(0);

	//trees
	this.tree3 = this.add.tileSprite(screen.width/2, screen.height*0.5, screen.width, screen.height*2, 'tree3').setScale(1);
	this.tree3.setScrollFactor(0);

	this.tree2 = this.add.tileSprite(screen.width/2, screen.height*0.5, screen.width, screen.height*2, 'tree2').setScale(1);
	this.tree2.setScrollFactor(0);

	this.tree1 = this.add.tileSprite(screen.width/2, screen.height*0.5, screen.width, screen.height*2, 'tree1').setScale(1);
	this.tree1.setScrollFactor(0);

	//platforms
	this.platforms = this.physics.add.staticGroup();
	this.platforms.create(screen.width/2, screen.height, 'ground').setScale(screen.width*100,4).refreshBody();

	//lab
	this.lab = this.physics.add.staticGroup();
	this.lab.create(100,screen.height*0.38,'lab').setScale(0.21).refreshBody();

	//land
	this.add.tileSprite(0, screen.height*0.95, screen.width*100, 169, 'land').setScale(0.4);

	//player
	this.player = this.physics.add.sprite(100, 300, 'dude').setScale(0.3);
	this.player.setCollideWorldBounds(true);

	//camera
	this.camera = this.cameras.main;

	//animations
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

  //keys
	this.shiftKey = this.input.keyboard.addKey('SHIFT');
	this.cursors = this.input.keyboard.createCursorKeys();

  //collisions
	this.physics.add.collider(this.player, this.platforms);
};
