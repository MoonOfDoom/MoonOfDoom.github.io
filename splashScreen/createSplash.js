export default function createSplash() {

  let rnm = this.add.image(screen.width / 2, screen.height / 2, 'ricknmorty').setScale(0.8);
  let intro1 = this.add.image(screen.width * 0.7, 80, 'intro1').setScale(0.8);
  let intro2 = this.add.image(200, screen.height * 0.9, 'intro2').setScale(0.7);
  let intro3 = this.add.image(screen.width / 2, screen.height * 0.4, 'intro3').setScale(0.7);

  function tween(scene = this,gameObj,duration,delay,yoyo,loop = 0,cb = null,curve = 'Cubic.easeInOut',cb2 = null) {
    scene.tweens.add({
        targets: gameObj,
        alpha: { start: 0, from: 0, to: 1 },
        ease: curve,
        delay: delay,
        duration: duration,
        yoyo: yoyo,
        loop: loop,
        onComplete: cb,
        onStart: cb2
    });
  }

  let enterKey = this.input.keyboard.addKey('ENTER');
  console.log(enterKey);
  function nextScene(x = this) {
    enterKey.on('down',(e) => x.parent.scene.scene.start('levelOne'));
  }

  tween(this,rnm,2000,0,true);
  tween(this,intro1,3000,5000,false);
  tween(this,intro2,3000,5500,false);
  tween(this,intro3,4000,6500,false,0,() => {
    let hitenter = this.add.image(screen.width / 2, screen.height * 0.85, 'hitenter').setScale(0.6);
    hitenter.alpha = 0;
    tween(this,hitenter,500,800,true,-1,null,'Stepped',nextScene);
  });
}
