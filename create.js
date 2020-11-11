export default function create() {
  //world bounds
  this.physics.world.setBounds(0, 0, screen.width * 100, screen.height, true, true, true, true);

  //background
  this.sky = this.add.tileSprite(screen.width / 2, screen.height / 2, screen.width, screen.height, 'sky');
  this.sky.setScrollFactor(0);

  //moon
  this.moon = this.add.sprite(screen.width / 2, screen.height / 5, 'moon');
  this.moon.setScrollFactor(0);

  //trees
  this.tree3 = this.add.tileSprite(screen.width / 2, screen.height * 0.5, screen.width, screen.height * 2, 'tree3').setScale(1);
  this.tree3.setScrollFactor(0);

  this.tree2 = this.add.tileSprite(screen.width / 2, screen.height * 0.5, screen.width, screen.height * 2, 'tree2').setScale(1);
  this.tree2.setScrollFactor(0);

  this.tree1 = this.add.tileSprite(screen.width / 2, screen.height * 0.5, screen.width, screen.height * 2, 'tree1').setScale(1);
  this.tree1.setScrollFactor(0);

  //platforms
  this.platforms = this.physics.add.staticGroup();
  this.platforms.create(screen.width / 2, screen.height, 'ground').setScale(screen.width * 100, 4).refreshBody();

  //lab banner
  this.banner = this.add.sprite(245, 480, 'banner').setScale(0.15);

  //lab
  this.add.sprite(100, screen.height * 0.38, 'lab').setScale(0.21);

  //land
  this.add.tileSprite(0, screen.height * 0.95, screen.width * 100, 169, 'land').setScale(0.4);

  //player
  this.player = this.physics.add.sprite(200, 0, 'dude').setScale(0.3);
  this.player.setCollideWorldBounds(true);
	this.player.setDepth(1);

  this.playerState = {
    landed: true,
    walking: false,
    jumping: false,
    position: 'right',
    crouch: false,
    lookup: false,
    cross: false,
    firing: false,
    shoot: true
  }

  //bullets
  this.bullets = this.physics.add.group({
    classType: Phaser.GameObjects.Image,
    defaultKey: 'particle',
    defaultFrame: null,
    active: true,
    maxSize: 5,
    runChildUpdate: false,
    createCallback: null,
    removeCallback: null,
    createMultipleCallback: null,
    allowGravity: false
  });

  //bullets limiter
  this.time.addEvent({
    delay: 100,
    callback: () => {
      this.playerState.shoot = true;
    },
    loop: true
  });

  //camera
  this.camera = this.cameras.main;

  //animations
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 1,
      end: 6
    }),
    frameRate: 15,
    repeat: -1
  });

  this.anims.create({
    key: 'idle',
    frames: [{
      key: 'dude',
      frame: 0
    }],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 1,
      end: 6
    }),
    frameRate: 15,
    repeat: -1
  });

  this.anims.create({
    key: 'cross',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 17,
      end: 22
    }),
    frameRate: 15,
    repeat: -1
  });

  this.anims.create({
    key: 'jump',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 8,
      end: 14
    }),
    frameRate: 65,
    repeat: -1
  });

  this.anims.create({
    key: 'flicker',
    frames: this.anims.generateFrameNumbers('banner', {
      start: 0,
      end: 2
    }),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: 'lookup',
    frames: [{
      key: 'dude',
      frame: 16
    }],
    frameRate: 20,
    repeat: -1
  });

  this.anims.create({
    key: 'crouch',
    frames: [{
      key: 'dude',
      frame: 24
    }],
    frameRate: 20,
    repeat: -1
  });

  //keys
  this.shiftKey = this.input.keyboard.addKey('SHIFT');
  this.ctrlKey = this.input.keyboard.addKey('CTRL');
  this.cursors = this.input.keyboard.createCursorKeys();

  //collisions
  this.physics.add.collider(this.player, this.platforms);
};
