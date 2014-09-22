var player;

var playerData = {
  facing: 'left'
};

var playerConstants = {
  MAX_SPEED: 500,
  ACCELERATION: 500,
  DRAG: 500,
  JUMP_SPEED: -1000
};

var worldConstants = {
  GRAVITY: 2600
}

var cursors;
var jumpButton;

var playState = {
  fpsText: '',
  
  create: function () {
    console.log("play create");
    game.physics.arcade.gravity.y = 250;
    
    player = game.add.sprite(game.width/2 - 50, game.height/2 - 50, 'player');
    
    // scale down the player sprite
    player.scale.setTo(0.5, 0.5);
    
    // the player anchor should be at (0.5, 0.5)
    // otherwise animations look jerky because the default anchor is at (0, 0)
    player.anchor.setTo(0.5, 0.5);
    
    // add animations to the player
    // the second last argument determines whether looping should be done or not
    player.animations.add('idleleft', [0], 60, false, true);
    player.animations.add('idleright', [1], 60, false, true);
    player.animations.add('runningleft', [2,3,4,5,6,7,8,9,10], 20, true, true);
    player.animations.add('runningright', [11,12,13,14,15,16,17,18,19], 20, true, true);
  
    // enable physics on the player
    game.physics.enable(player, Phaser.Physics.ARCADE);
    // prevent player from leaving the world
    player.body.collideWorldBounds = true;
    // set max velocity
    player.body.maxVelocity.setTo(playerConstants.MAX_SPEED, 0);
    // add drag and gravity
    player.body.drag.setTo(playerConstants.DRAG, 0);
    game.physics.arcade.gravity.y = worldConstants.GRAVITY;
    
    // show FPS
    game.time.advancedTiming = true;
    this.fpsText = game.add.text(20, 20, '', { font: '16px Arial', fill: '#000000' });
                                    
    // capture keyboard input
    game.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN
    ]);
    
//    cursors = game.input.keyboard.createCursorKeys();
//    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  
//  loadUpdate: function () {
//  },
  
  update: function () {
    // update FPS
    if (game.time.fps != 0) {
      this.fpsText.setText(game.time.fps + ' FPS');
    }
    
    // take keyboard input
    // if the player is facing in the same direction as the keyboard input, accelerate him
    // otherwise, turn him around
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      if (playerData.facing == 'right') {
        playerData.facing = 'left';
      }
      else {
        player.body.acceleration.x = -playerConstants.ACCELERATION;
      }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      if (playerData.facing == 'left') {
        playerData.facing = 'right';
      }
      else {
        player.body.acceleration.x = playerConstants.ACCELERATION;
      }
    }
    // no acceleration if no keyboard input
    else {
      player.body.acceleration.x = 0;
    }
    
    // choose the right animation for the player
    var playerMovement = (player.body.velocity.x == 0 ? 'idle' : 'running');
    player.animations.play(playerMovement + playerData.facing);
  }
}