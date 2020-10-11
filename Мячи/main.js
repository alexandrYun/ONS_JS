// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// конструктор мяча

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

// добавление метода draw в прототип конструктора Ball для отрсовки мячей

Ball.prototype.draw = function() {
ctx.beginPath();
ctx.fillStyle = this.color;
ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
ctx.fill();
}

// добавление метода update в прототип конструктора Ball для задания движения мяча

Ball.prototype.update = function() {
if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
}

if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
}

if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
}

if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
}

this.x += this.velX;
this.y += this.velY;
}

// добавление метода collisionDetect в прототип конструктора Ball для проверки соприкосновения мячей
// var заменён на let

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        let dx = this.x - balls[j].x;
        let dy = this.y - balls[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
}

// var заменён на const

const balls = [];

// функция loop обёрнута в IIFE

(function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    while (balls.length < 25) {
      let ball = new Ball(
        random(0,width),
        random(0,height),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        random(10,20)
      );
      balls.push(ball);
    }
  
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  
    requestAnimationFrame(loop);
})();

