import updateLevel from '/level1/updateLevel.js';
import playerUpdate from '/player/playerUpdate.js';
import gunfire from '/player/gunfire.js';

export default function update() {
  //update scene
  updateLevel(this);

  //update player
  playerUpdate(this);

  //gunfire
  gunfire(this);
};
