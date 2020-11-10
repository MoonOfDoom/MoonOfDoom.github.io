export default function update() {

  //camera movements
  this.camera.setBounds(0, -1.01 * screen.height, screen.width * 100, screen.height * 2);
  this.camera.startFollow(this.player);

  this.tree1.tilePositionX = this.camera.scrollX * 0.6;
  this.tree1.tilePositionY = this.camera.scrollY * 0.6;

  this.tree2.tilePositionX = this.camera.scrollX * 0.4;
  this.tree2.tilePositionY = this.camera.scrollY * 0.4;

  this.tree3.tilePositionX = this.camera.scrollX * 0.2;
  this.tree3.tilePositionY = this.camera.scrollY * 0.2;

  //banner lights flicker
  this.banner.anims.play('flicker', true);

  //player control
  //left
  if (this.cursors.left.isDown && this.player.body.touching.down) {
    this.player.setVelocityX(-350);
    this.cursors.up.isDown ? this.player.anims.play('cross', true) : this.player.anims.play('left', true);
    this.player.flipX = true;
    this.playerState.position = 'left';
  }

  //right
  else if (this.cursors.right.isDown && this.player.body.touching.down) {
    this.player.setVelocityX(350);
    this.cursors.up.isDown ? this.player.anims.play('cross', true) : this.player.anims.play('left', true);
    this.player.flipX = false;
    this.playerState.position = 'right';
  }

  //crouch
  else if (this.cursors.down.isDown && this.player.body.touching.down) {
    this.player.setVelocityX(0);
    this.player.anims.play('crouch', true);
  }

  //up
  else if (this.cursors.up.isDown && this.player.body.touching.down) {
    this.player.setVelocityX(0);
    this.player.anims.play('lookup', true);
  }

  //jump anim, still anim and direction control during jump
  else {
    if (!this.player.body.touching.down) {
      this.player.anims.play('jump', true);
      if (this.cursors.left.isDown) this.player.setVelocityX(-350);
      else if (this.cursors.right.isDown) this.player.setVelocityX(350);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('idle', true);
    }
  }

  //jump action
  if (this.shiftKey.isDown && this.player.body.touching.down) {
    this.player.setVelocityY(-1030);
  }

  //fire

  function create_callback(bullet, player, playerState) {
    if (bullet) {
      bullet[0].visible = true;
      bullet[0].x = player.getCenter().x;
      bullet[0].y = player.getCenter().y;
      if (playerState.position === 'left' && bullet[0].body) bullet[0].body.velocity.x = -1500;
      else if (playerState.position === 'right' && bullet[0].body) bullet[0].body.velocity.x = 1500;
    }
  }
  if (Phaser.Input.Keyboard.JustDown(this.ctrlKey)) {
    this.bullet = this.bullets.createFromConfig({
      classType: Phaser.GameObjects.Image,
      key: 'particle', // Required
      frame: null,
      visible: false,
      active: true,
      repeat: 0, // Create (1 + repeat) game objects
      createCallback: create_callback(this.bullet, this.player, this.playerState), // Override this.createCallback if not undefined
      setXY: {
        x: this.player.getCenter().x,
        y: this.player.getCenter().y,
        stepX: 0,
        stepY: 0
      },
      setScale: {
        x: 0.6,
        y: 0.6
      }
    });
  }

  //bullets die
  if (this.bullets.children.entries) {
    for (let bul of this.bullets.children.entries) {
      if (bul.x > this.cameras.main.worldView.x + 2000 || bul.x < this.cameras.main.worldView.x - 2000) {
        bul.destroy();
      }
    }
  }
};
