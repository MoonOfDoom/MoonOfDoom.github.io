export default function updateLayout(game) {
  //reload message
  if (game.playerState.ammo === 0 && game.showMsg && !game.playerState.reloading) game.reloadFlash.visible = true;
  else game.reloadFlash.visible = false;
  if (game.playerState.reloading) game.reloading.visible = true;
  else game.reloading.visible = false;
}
