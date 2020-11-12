export default function updateLayout(game) {
  //reload message
  if (game.playerState.ammo === 0 && game.showMsg) game.reloadFlash.visible = true;
  else game.reloadFlash.visible = false;
}
