export default function update() {

  //camera
	this.camera.setBounds(0, -1.01*screen.height, screen.width*100, screen.height*2);
	this.camera.startFollow(this.player);

	this.tree1.tilePositionX = this.camera.scrollX * 0.6;
	this.tree1.tilePositionY = this.camera.scrollY * 0.6;

	this.tree2.tilePositionX = this.camera.scrollX * 0.4;
	this.tree2.tilePositionY = this.camera.scrollY * 0.4;

	this.tree3.tilePositionX = this.camera.scrollX * 0.2;
	this.tree3.tilePositionY = this.camera.scrollY * 0.2;

  //keys
	if (this.cursors.left.isDown && this.player.body.touching.down)
	{
			this.player.setVelocityX(-350);

			this.cursors.up.isDown ? this.player.anims.play('cross', true) : this.player.anims.play('left', true);

			this.player.flipX= true;
	}
	else if (this.cursors.right.isDown && this.player.body.touching.down)
	{
			this.player.setVelocityX(350);

			this.cursors.up.isDown ? this.player.anims.play('cross', true) : this.player.anims.play('left', true);

			this.player.flipX= false;
	}
	else if (this.cursors.down.isDown && this.player.body.touching.down)
	{
		this.player.setVelocityX(0);

		this.player.anims.play('crouch', true);
	}
	else if (this.cursors.up.isDown && this.player.body.touching.down)
	{
		this.player.setVelocityX(0);

		this.player.anims.play('lookup', true);
	}
	else {
		if(!this.player.body.touching.down)
		{
			this.player.anims.play('jump',true);
		}
		else
		{
			this.player.setVelocityX(0);

			this.player.anims.play('turn',true);
		}
	}

	if (this.shiftKey.isDown && this.player.body.touching.down)
	{
			this.player.setVelocityY(-1030);
	}

};
