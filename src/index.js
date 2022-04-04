import "./styles.css";
var ball = document.getElementById("ball");
var ballBlock = document.getElementById("ball-block");
console.log(ballBlock.clientHeight, ballBlock.clientWidth);
console.log(
  ball.getBoundingClientRect().top,
  ball.getBoundingClientRect().left
);
console.log(ball.x, ball.y);
var boundX = ballBlock.clientWidth;
var boundY = ballBlock.clientHeight;
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  var posX = ball.getBoundingClientRect().left;
  var posY = ball.getBoundingClientRect().top;
  //move upwards
  function scrollWin(x, y) {
    ball.scrollBy(x, y);
  }
  if (event.key === "w") {
    var interval = setInterval(function () {
      if (posY <= 10) {
        posY = boundY;
        clearInterval(interval);
        return;
      }
      ball.style.top = posY + "px";
      posY -= 10;
      scrollWin(posX, posY);
      console.log(posY, ball.top);
    }, 500);
  }
  //move left 154 204
  else if (event.key === "a") {
    // ball.style.left=boundX5
    posX = boundX - 20;
    var interval0 = setInterval(function () {
      if (posX < 10) {
        clearInterval(interval0);
        return;
      }
      ball.style.left = posX + "px";
      posX -= 10;
      scrollWin(posX, posY);
      console.log(posX);
    }, 500);
  }
  // move downwards
  else if (event.key === "s") {
    var interval1 = setInterval(function () {
      if (boundY - 30 < posY) {
        posY = boundY;

        clearInterval(interval1);

        return;
      }
      ball.style.top = posY + "px";
      posY += 10;
      console.log(posY, ball.top);
    }, 500);
  }
  //move right
  else if (event.key === "d") {
    var interval2 = setInterval(function () {
      if (boundX - 30 < posX) {
        posX = boundX;
        console.log(posX);
        clearInterval(interval2);
        return;
      }
      ball.style.left = posX + "px";
      posX += 10;
      scrollWin(posX, posY);
      console.log(posX);
    }, 500);
  }
});
