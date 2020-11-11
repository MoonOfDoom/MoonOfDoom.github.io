export default function update() {

  //camera movements
  this.camera.setBounds(0, -1.01 * screen.height, screen.width * 100, screen.height * 2);
  this.camera.startFollow(this.player);

  //scene movements
  this.tree1.tilePositionX = this.camera.scrollX * 0.6;
  this.tree1.tilePositionY = this.camera.scrollY * 0.6;

  this.tree2.tilePositionX = this.camera.scrollX * 0.4;
  this.tree2.tilePositionY = this.camera.scrollY * 0.4;

  this.tree3.tilePositionX = this.camera.scrollX * 0.2;
  this.tree3.tilePositionY = this.camera.scrollY * 0.2;

  //banner lights flicker
  this.banner.anims.play('flicker', true);

  //player positions
  //landed
  if (this.player.body.touching.down) this.playerState.landed = true;
  else this.playerState.landed = false;

  //mid-air anim
  if (!this.playerState.landed) this.player.anims.play('jump', true);

  //jump
  if (this.cursors.shift.isDown) {
    if (this.playerState.landed) this.player.setVelocityY(-1030);
  }

  //left
  if (this.cursors.left.isDown) {
    this.playerState.position = 'left';
    this.player.flipX = true;
    this.player.setVelocityX(-350);
    if (this.playerState.landed) {
      if (this.cursors.up.isDown) {
        this.playerState.cross = true;
        this.player.anims.play('cross', true);
      }
      else this.player.anims.play('left', true);
    }
  }

  //right
  else if (this.cursors.right.isDown) {
    this.playerState.position = 'right';
    this.player.flipX = false;
    this.player.setVelocityX(350);
    if (this.playerState.landed) {
      if (this.cursors.up.isDown) {
        this.playerState.cross = true;
        this.player.anims.play('cross', true);
      }
      else this.player.anims.play('right', true);
    }
  }

  //crouch
  else if (this.cursors.down.isDown) {
    this.playerState.crouch = true;
    if (this.playerState.landed) {
      this.player.setVelocityX(0);
      this.player.anims.play('crouch', true);
    }
  }

  //lookup
  else if (this.cursors.up.isDown) {
    this.playerState.lookup = true;
    if (this.playerState.landed) {
      this.player.setVelocityX(0);
      this.player.anims.play('lookup', true);
    }
  }

  //idle
  else {
    if (this.playerState.landed) {
      this.player.setVelocityX(0);
      this.player.anims.play('idle', true);
    }
  }

  //crouch, lookup and cross reset
  if (this.cursors.up.isUp) this.playerState.lookup = false;
  if (this.cursors.up.isUp || (this.cursors.left.isUp && this.cursors.right.isUp)) this.playerState.cross = false;
  if (this.cursors.down.isUp) this.playerState.crouch = false;

  //fire
  function create_callback(bullet, player, playerState) {
    if (bullet && bullet[0] && bullet[0].body) {
      bullet[0].visible = true;
      bullet[0].x = player.getCenter().x;
      bullet[0].y = player.getCenter().y;
      if (playerState.position === 'left') {
        bullet[0].body.velocity.x = -1500;
        bullet[0].flipX = true;
      }
      else if (playerState.position === 'right') {
        bullet[0].body.velocity.x = 1500;
        bullet[0].flipX = false;
      }
      if (playerState.cross) {
        playerState.position === 'right' ? bullet[0].body.velocity.x = 800 : bullet[0].body.velocity.x = -800;
        bullet[0].body.velocity.y = -550;
      }
      else if (playerState.lookup) {
        bullet[0].body.velocity.x = 0;
        bullet[0].body.velocity.y = -1000;
        bullet[0].angle = -90;
      }
    }
  }
  if (this.ctrlKey.isDown && this.playerState.shoot) {
    this.bullet = this.bullets.createFromConfig({
      classType: Phaser.GameObjects.Image,
      key: 'particle',
      frame: null,
      visible: false,
      active: true,
      repeat: 0,
      createCallback: create_callback(this.bullet, this.player, this.playerState),
      setXY: {
        x: this.player.getCenter().x,
        y: this.player.getCenter().y,
        stepX: 0,
        stepY: 0
      },
      setScale: {
        x: 0.6,
        y: 0.4
      }
    });
    this.playerState.shoot = false;
  }

  //bullets destroy
  if (this.bullets.children.entries) {
    for (let bul of this.bullets.children.entries) {
      if (
        bul.x > this.cameras.main.worldView.x + 1500
        || bul.x < this.cameras.main.worldView.x
        || bul.y < this.cameras.main.worldView.y
      ) bul.destroy();
    }
  }
};
