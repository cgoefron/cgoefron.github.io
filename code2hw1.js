
var size = Math.random(1, 200);
var arraySize = 100; 

var squaresize = 800;

var ballColor = [];

var posX = []; posX.length = arraySize;
var posY = []; posY.length = arraySize;

var velX = []; velX.length = arraySize;
var velY = []; velY.length = arraySize;



function setup() {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');


  reset_sketch();

  for (var i = 0; i<arraySize; i++){
	ballColor[i] = getRandomColor();
	console.log(ballColor[i]);
  }

  for (var i = 0; i < arraySize; i++) {
    posX[i] = random(100, squaresize-100);
    posY[i] = random(100, squaresize-100);

    if (i % 2 == 0) {
      velX[i] = random(1, 5) ;
      velY[i] = random(1, 5) ;
    } else {
      velX[i] = random(-5, -1) ;
      velY[i] = random(-5, -1) ;
    }
  }


}

function reset_sketch() {
  size = random(10, 100);
  for (var i = 0; i < arraySize; i++) {
    posX[i] = random(100, squaresize-100);
    posY[i] = random(100, squaresize-100);

    if (i % 2 == 0) {
      velX[i] = random(1, 5) ;
      velY[i] = random(1, 5) ;
    } else {
      velX[i] = random(-5, -1) ;
      velY[i] = random(-5, -1) ;
    }
  }
}

function draw() {

  ctx.fillStyle = "#FFFFFF";

  ctx.fillRect(0,0,squaresize,squaresize);
  for (var i = 0; i < arraySize; i++) {

    ctx.beginPath();
    ctx.fillStyle = ballColor[i];
    ctx.fill();


	ctx.arc(posX[i],posY[i],size/2,0,2*Math.PI);
	ctx.strokeStyle = ballColor[i];
	ctx.stroke();
    posX[i] += velX[i];
    posY[i] += velY[i];

    if (posX[i] < size || posX[i] > squaresize-size) {
 

      posX[i] -= velX[i];
      velX[i] = -velX[i];
    }
    if (posY[i] < size || posY[i] > squaresize-size) {

      posY[i] -= velY[i];
      velY[i] = -velY[i];
    }
  }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function keyReleased() {
  if ( key == ' ' ) {
    reset_sketch();
  }
}

