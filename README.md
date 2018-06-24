# **Arcade game Udacity Project**
_This is the fourth project for frontend nanodegree track_
![memory game](http://res.cloudinary.com/esraa/image/upload/v1529807473/arcade_game.png)
## How to play?
_Go to this link [arcade-game](https://esraa708.github.io/arcade-game/)_
## Instructions
* Use left, right, up and down arrows to move the player 
* If you hit the bug you will lose and go back to the initial position
* To win the game you have to reach  the water by crossing over the bugs and never ever hit them. 
* If you win, a congratulation pop up messege will appear to you hit clsoe icon to close it and reset the game again 
# Game dependencies 
* I used html canvas element to draw the game
* all the logic of the characters player and bugs happens in app.js
# How I built the game
* In app.js I initilized the game objects `Enemy` and `Player`
* **The enemy**:- 
    * it has 5 proprities x, y,spirit,imageWidth ,imageHeight and speed 
    * it has 2 methods 
        * `render():-` To show  enemies images on the screen
        * `update():-` To update the enemy position ,making it appears over and over across the screen horizently and handels collisions with the Player object 
* **the Player**        
    * it has 3 proprities x, y and spirit
    * It has 3 methods
        * `update():-` To set the limits for the player not to go over it and for the winning logic
        * `render():-` To show  enemies images on the screen
         * `handleInput():-` for the logic when the user press arrow keys
* After that we make instances from Enemy object in allEnemies array
  
* and then make instance from the Player object
