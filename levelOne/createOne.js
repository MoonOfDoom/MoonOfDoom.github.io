import setupLevel from './setupLevel.js';
import playerSetup from '../player/playerSetup.js';
import enemy1Setup from '../enemy1/enemy1Setup.js';
import spriteAnims from './spriteAnims.js';
import playerAnims from '../player/playerAnims.js';
import enemy1Anims from '../enemy1/enemy1Anims.js';
import layout from '../layout/setupLayout.js';

export default function createOne() {

  //level setup
  setupLevel(this);

  //player
  playerSetup(this);

  //enemy1
  enemy1Setup(this);

  //camera
  this.camera = this.cameras.main;

  //animations
  playerAnims(this);
  enemy1Anims(this);
  spriteAnims(this);

  //keys
  this.ctrlKey = this.input.keyboard.addKey('CTRL');
  this.cursors = this.input.keyboard.createCursorKeys();

  //collisions
  this.physics.add.collider(this.player, this.platforms);
  this.physics.add.collider(this.enemy1, this.platforms);
  this.physics.add.collider(this.enemy1, this.bullets);
  this.physics.add.collider(this.player, this.boxes);

  //layout
  layout(this);
};
