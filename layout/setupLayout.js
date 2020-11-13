export default function layout(game) {
  //message display
  game.showMsg = false;
  //flash message
  game.time.addEvent({
    delay: 500,
    callback: () => {
      game.showMsg = !game.showMsg;
    },
    loop: true
  });
  //reload
  game.reloadFlash = game.add.image(screen.width / 2, screen.height * 0.2, 'reload');
  game.reloadFlash.setScrollFactor(0);
  game.reloadFlash.visible = false;
  game.reloading = game.add.image(screen.width / 2, screen.height * 0.2, 'reloading').setScale(0.8);
  game.reloading.setScrollFactor(0);
  game.reloading.visible = false;
}
