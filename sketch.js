var ball = {
  x : 20,
  y : 30,
  r : 30,
  vx : 1,
  vy : 0,
  colour : ["yellow", "red", "blue"],
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.colour[1]);

  ball.x = ball.x + ball.vx;

}