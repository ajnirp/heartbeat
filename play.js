var player;
var playerData = {
  MAX_SPEED: 500,
  ACCELERATION: 1500,
  DRAG: 500,
  GRAVITY: 2600,
  JUMP_SPEED: -1000
};

var cursors;
var jumpButton;

var playState = {
  create: function () {
    console.log("play create");
    game.physics.arcade.gravity.y = 250;
    
    player = game.add.sprite(game.width/2 - 50, game.height/2 - 50, 'player');
    
    // scale down the player sprite
    player.scale.setTo(0.5, 0.5);
    
    // add animations to the player
    // the second last argument determines whether looping should be done or not
    player.animations.add('idleleft', [0], 60, false, true);
    player.animations.add('idleright', [1], 60, false, true);
    player.animations.add('runleft', [2,3,4,5,6,7,8,9,10], 20, true, true);
    player.animations.add('runright', [11,12,13,14,15,16,17,18,19], 20, true, true);
                                    
    // capture keyboard input
    game.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN
    ]);
    
    player.animations.play('runright');
    
//    cursors = game.input.keyboard.createCursorKeys();
//    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  
//  loadUpdate: function () {
//  },
  
  update: function () {
//    game.physics.arcade.collide(player, ground);
    
//    if (jumpButton.isDown && 
  }
}