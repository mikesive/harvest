var Menu = {

  preload : function() {
    // Loading images is required so that later on we can create sprites based on the them.
    // The first argument is how our image will be refered to,
    // the second one is the path to our file.
    game.load.image('man-left', '/images/man-left.png');
    game.load.image('man-right', '/images/man-right.png');
  },

  create: function () {
    //Set background color
    game.stage.backgroundColor = "#1BDCFF";

    //Add player to screen, set size
    man = game.add.sprite(game.world.centerX, game.world.centerY, 'man-left');
    man.width = 50;
    man.height = 68;
  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
      if (man.x > 0){
        man.x -= movementPx;
      }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      if (!(man.x > (game.world.bounds.width - man.width))){
        man.x += movementPx;
      }
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
      if (man.y > 0){
        man.y -= movementPx;
      }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
      if (!(man.y > (game.world.bounds.height - man.height))){
        man.y += movementPx;
      }
    }
  }
};

var game;
var man;
var movementPx = 4;

// Create a new game instance 600px wide and 450px tall:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);

game.state.start('Menu');
