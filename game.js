import preload from './preload.js';
import create from './create.js';
import update from './update.js';

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
var game = new Phaser.Game(config);





// function end() {
//
// };
