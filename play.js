var player;

var playerConsts = {
    MAX_SPEED: 800,
    GRAVITY: 2600,
    JUMP_SPEED: -1000
};

var playState = {
  fpsText: '',

  create: function () {
    player = game.add.sprite(game.width/2 - 50, game.height/2 - 50, 'player');
    player.scale.setTo(0.1, 0.1);
    player.anchor.setTo(0.5, 0.5);

    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;

    this.tiles = game.add.group();
    this.tiles.enableBody = true;

    game.add.image(game.width/2 + 60, game.height/2 + 60, 'tile', 0, this.tiles);
    this.tiles.setAll('body.moves', false);

    game.physics.arcade.collide(player, this.tiles);

    player.body.maxVelocity.setTo(playerConsts.MAX_SPEED, playerConsts.MAX_SPEED*10);
    game.physics.arcade.gravity.y = playerConsts.GRAVITY;

    this.canDoubleJump = true;

    this.fpsText = game.add.text(20, 20, '', { font: '16px Arial', fill: '#000000' });

    game.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN
    ]);
  },

  // http://gamemechanicexplorer.com/#platformer-5
  update: function () {
    if (game.time.fps != 0) {
      this.fpsText.setText(game.time.fps + ' FPS');
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      player.body.velocity.x = -playerConsts.MAX_SPEED;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      player.body.velocity.x = playerConsts.MAX_SPEED;
    } else {
      player.body.velocity.x = 0;
    }

    var onTheGround = player.body.touching.down || player.body.blocked.down;
    if (onTheGround) this.canDoubleJump = true;

    if (game.input.keyboard.downDuration(Phaser.Keyboard.UP, 5)) {
      if (this.canDoubleJump || onTheGround) {
        player.body.velocity.y = playerConsts.JUMP_SPEED;
        if (!onTheGround) this.canDoubleJump = false;
      }
    }
  }
};
