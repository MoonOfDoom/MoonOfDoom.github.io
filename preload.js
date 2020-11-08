export default function preload() {
	this.load.image('ground', 'assets/platform.png');
	this.load.image('lab', 'assets/lab.png');
	this.load.image('moon', 'assets/moon.png');

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
