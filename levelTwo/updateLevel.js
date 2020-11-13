export default function updateLevel(game) {
  //camera movements
  game.camera.setBounds(0, -1.01 * screen.height, screen.width * 100, screen.height * 2);
  game.camera.startFollow(game.player);

  //scene movements
  game.tree1.tilePositionX = game.camera.scrollX * 0.6;
  game.tree1.tilePositionY = game.camera.scrollY * 0.6;

  game.tree2.tilePositionX = game.camera.scrollX * 0.4;
  game.tree2.tilePositionY = game.camera.scrollY * 0.4;

  game.tree3.tilePositionX = game.camera.scrollX * 0.2;
  game.tree3.tilePositionY = game.camera.scrollY * 0.2;

  //banner lights flicker
  game.banner.anims.play('flicker', true);
}
