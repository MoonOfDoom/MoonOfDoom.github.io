import updateLevel from './updateLevel.js';
import playerUpdate from '../player/playerUpdate.js';
import gunfire from '../player/gunfire.js';
import updateLayout from '../layout/updateLayout.js';

export default function updateTwo() {
  //update scene
  updateLevel(this);

  //update player
  playerUpdate(this);

  //gunfire
  gunfire(this);

  //layout update
  updateLayout(this);
};
