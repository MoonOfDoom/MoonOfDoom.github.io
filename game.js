import preload from './preload.js';
import create from './create.js';
import update from './update.js';

//game scene
let config = {
	type: Phaser.AUTO,
	width: screen.width,
	height: screen.height,
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
	scene: null
};

let game = new Phaser.Game(config);

let levelOneConfig = {
	key: 'levelOne',
	preload: preload,
	create: create,
	update: update,
	physics: {
			default: 'arcade',
			arcade: {
					gravity: { y: 1600 },
					debug: false
			}
	},
};

let levelOne = game.scene.add('levelOne',levelOneConfig,true);
