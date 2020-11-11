import setupLevel from '/level1/setupLevel.js';
import playerSetup from '/player/playerSetup.js';
import playerAnims from '/player/playerAnims.js';

export default function create() {

  //level setup
  setupLevel(this);

  //player
  playerSetup(this);

  //camera
  this.camera = this.cameras.main;

  //animations
  playerAnims(this);

  //keys
  this.shiftKey = this.input.keyboard.addKey('SHIFT');
  this.ctrlKey = this.input.keyboard.addKey('CTRL');
  this.cursors = this.input.keyboard.createCursorKeys();

  //collisions
  this.physics.add.collider(this.player, this.platforms);
};
