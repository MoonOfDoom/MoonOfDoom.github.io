export default function updateLayout(game) {
  //reload message
  if (game.playerState.ammo === 0 && game.showMsg && !game.playerState.reloading) game.reloadFlash.visible = true;
  else game.reloadFlash.visible = false;
  if (game.playerState.reloading) game.reloading.visible = true;
  else game.reloading.visible = false;
  game.energyMask.x = game.playerState.health - 12;
  game.scoreText.setText('Score: ' + '0'.repeat(6 - game.playerState.score.toString().length) + game.playerState.score);
  if(!game.playerState.deadSound) game.gameOver.visible = true;
}
