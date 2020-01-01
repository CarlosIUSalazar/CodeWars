// 1 Jan 2020  fuuuuuuuckk!! Is 2020000000!!
// https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript
// 1.  There are two players and both start off the board on square 0.
// 2.  Player 1 starts and alternates with player 2.
// 3.  You follow the numbers up the board in order 1=>100
// 4.  If the value of both die are the same then that player will have another go.
// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).
// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).
// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

function SnakesLadders() {
  

    let die1 = 0;
    let die2 = 0;
    let doubleTurn = false;
    let dieResult = 0;
  
    die1 = Math.floor(Math.random()*6+1);
    die2 = Math.floor(Math.random()*6+1);
  
  
  };
  
  SnakesLadders.prototype.play = function(die1, die2) {
    let player1Turn = true;
    let positionP1;
    let positionP2;
    let spacesToMove = die1 + die2;
  
    
    if (player1Turn = true){
      positionP1 += spacesToMove;
    }
    