import preloadOne from './levelOne/preloadOne.js';
import createOne from './levelOne/createOne.js';
import updateOne from './levelOne/updateOne.js';

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
	preload: preloadOne,
	create: createOne,
	update: updateOne,
	physics: {
			default: 'arcade',
			arcade: {
					gravity: { y: 1600 },
					debug: false
			}
	},
};

let levelOne = game.scene.add('levelOne',levelOneConfig,true);
