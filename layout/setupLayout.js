export default function layout(game) {

  let {
    width,
    height
  } = game.game.config;

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
  game.reloadFlash = game.add.image(width / 2, height * 0.2, 'reload');
  game.reloadFlash.setScrollFactor(0);
  game.reloadFlash.visible = false;
  game.reloading = game.add.image(width / 2, height * 0.2, 'reloading').setScale(0.8);
  game.reloading.setScrollFactor(0);
  game.reloading.visible = false;
}
