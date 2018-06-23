const minHeight=100;
const maxHeight=300
// Enemies our player must avoid
var Enemy = function (x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.imageWidth=70;
    this.imageHeight=90;
    this.speed=speed;


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
this.x +=Math.floor((Math.random() * this.speed));

    let sameMove = dt * this.speed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y,this.imageWidth,this.imageHeight);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor() {
        
        this.sprite = 'images/char-princess-girl.png';
        this.x=200;
        this.y=300;

    }
    update() {

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
    handleInput() {

    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// const enemy1 = new Enemy(50,200)
// const enemy2 = new Enemy(200,200);
// const enemy3 = new Enemy(300,220);
// const enemy4 = new Enemy(300,100);
// const enemy5 = new Enemy(100,290);
// const enemy1 = new Enemy(50,200)
// const enemy2 = new Enemy(50,500);
// const enemy3 = new Enemy(50,220);

const allEnemies = [];
for(i=0;i<=2;i++){
    let YDirection=100+ 80*i;
    let xDirectION=Math.floor(Math.random()*20);
    let speed = Math.floor(Math.random()*30);
    allEnemies.push(new Enemy(xDirectION,YDirection,speed))
}

const player = new Player();
console.log(player);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});