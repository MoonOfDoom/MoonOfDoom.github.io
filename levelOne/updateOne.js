import updateLevel from './updateLevel.js';
import playerUpdate from '../player/playerUpdate.js';
import enemy1Update from '../enemy1/enemy1Update.js';
import gunfire from '../player/gunfire.js';
import updateLayout from '../layout/updateLayout.js';

export default function updateOne() {
  //update scene
  updateLevel(this);

  //update player
  playerUpdate(this);

  //update enemy1
  enemy1Update(this);

  //gunfire
  gunfire(this);

  //layout update
  updateLayout(this);
};
