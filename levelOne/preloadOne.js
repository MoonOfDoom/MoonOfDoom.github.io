export default function preloadOne() {
	//images
	this.load.image('ground', '../assets/platform.png');
	this.load.image('lab', '../assets/lab.png');
	this.load.image('moon', '../assets/moon.png');
	this.load.image('box', '../assets/box.png');
	this.load.image('bullet', '../assets/bullet.png');
	this.load.image('laser', '../assets/laser.png');
	this.load.image('reload', '../assets/reload.png');
	this.load.image('reloading', '../assets/reloading.png');

	//audio
	this.load.audio('mainBG', '../assets/mainBG.mp3');
	this.load.audio('gun', '../assets/gun.mp3');
	this.load.audio('zap', '../assets/zap.mp3');
	this.load.audio('jump', '../assets/jump.mp3');
	this.load.audio('dead', '../assets/dead.mp3');

	//spritesheets
	this.load.spritesheet('dude',
			'../assets/rude.png',
			{ frameWidth: 512, frameHeight: 640 }
	);
	this.load.spritesheet('enemy1',
			'../assets/enemy1.png',
			{ frameWidth: 512, frameHeight: 639 }
	);
	this.load.spritesheet('land',
			'../assets/land.png',
			{ frameWidth: 154, frameHeight: 68 }
	);
	this.load.spritesheet('water',
			'../assets/water.png',
			{ frameWidth: 154, frameHeight: 68 }
	);
	this.load.spritesheet('sky',
			'../assets/sky.png',
			{ frameWidth: 1456, frameHeight: 890 }
	);
	this.load.spritesheet('tree1',
			'../assets/tree1.png',
			{ frameWidth: 1440, frameHeight: 1440 }
	);
	this.load.spritesheet('tree2',
			'../assets/tree2.png',
			{ frameWidth: 1440, frameHeight: 1440 }
	);
	this.load.spritesheet('tree3',
			'../assets/tree3.png',
			{ frameWidth: 1440, frameHeight: 1440 }
	);
	this.load.spritesheet('banner',
			'../assets/banner.png',
			{ frameWidth: 645, frameHeight: 1268 }
	);
};
