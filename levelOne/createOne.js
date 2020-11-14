import setupLevel from './setupLevel.js';
import playerSetup from '../player/playerSetup.js';
import spriteAnims from './spriteAnims.js';
import playerAnims from '../player/playerAnims.js';
import layout from '../layout/setupLayout.js';

export default function createOne() {

  //level setup
  setupLevel(this);

  //player
  playerSetup(this);

  //camera
  this.camera = this.cameras.main;

  //animations
  playerAnims(this);
  spriteAnims(this);

  //keys
  this.shiftKey = this.input.keyboard.addKey('SHIFT');
  this.ctrlKey = this.input.keyboard.addKey('CTRL');
  this.zKey = this.input.keyboard.addKey('Z');
  this.cursors = this.input.keyboard.createCursorKeys();

  //collisions
  this.physics.add.collider(this.player, this.platforms);
  this.physics.add.collider(this.player, this.boxes);

  //layout
  layout(this);
};
