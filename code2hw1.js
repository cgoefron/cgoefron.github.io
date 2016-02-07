
var size = Math.random(1, 200);
var arraySize = 100; //balls are bouncing or getting caught before edge?

var squaresize = 800;

var ballColor = [];

var posX = []; posX.length = arraySize;
var posY = []; posY.length = arraySize;

var velX = []; velX.length = arraySize;
var velY = []; velY.length = arraySize;

/*
var posX = new arraySize;
var posY = new arraySize;
var velX = new arraySize;
var velY = new arraySize;
*/

//var gravity;

//color ballColor = new color[arraySize];

function setup() {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  //createCanvas(800,800)
  //size(800, 800);
  reset_sketch();

  for (var i = 0; i<arraySize; i++){
ballColor[i] = getRandomColor();
console.log(ballColor[i]);
  }

  for (var i = 0; i < arraySize; i++) {
    posX[i] = random(100, squaresize-100);
    posY[i] = random(100, squaresize-100);
    //color col = color(random(255), random(255), random(255));
    //color col = new Color (int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
    //ballColor[i] = col;
    if (i % 2 == 0) {
      velX[i] = random(1, 5) ;
      velY[i] = random(1, 5) ;
    } else {
      velX[i] = random(-5, -1) ;
      velY[i] = random(-5, -1) ;
    }
  }

  //gravity = 0.5;
}

function reset_sketch() {
  size = random(10, 100);
  for (var i = 0; i < arraySize; i++) {
    posX[i] = random(100, squaresize-100);
    posY[i] = random(100, squaresize-100);
    //color col = color(random(255), random(255), random(255));
    //color col = new Color (int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
    //ballColor[i] = col;
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
  //background(0, 100, 100);
  //fill(255, 255,255,10);
  ctx.fillStyle = "#FFFFFF";
  //ctx.fillStyle = ballColor[i];
  //noStroke();
  //rect(0, 0, height, width);
  ctx.fillRect(0,0,squaresize,squaresize);
  for (var i = 0; i < arraySize; i++) {
   // fill(ballColor[i]);
    //fill(0);
    ctx.fillStyle = "#000000";
    //console.log("Draw: " + i + " arraySize: " + arraySize);
    //ellipse(posX[i], posY[i], size, size);
    ctx.beginPath();
	ctx.arc(posX[i],posY[i],size/2,0,2*Math.PI);
	ctx.stroke();
    posX[i] += velX[i];
    posY[i] += velY[i];

    if (posX[i] < size || posX[i] > squaresize-size) {
    	//fill(ballColor[i]);      //color col = color(random(255), random(255), random(255));
      //ballColor[i] = col;

      posX[i] -= velX[i];
      velX[i] = -velX[i];
    }
    if (posY[i] < size || posY[i] > squaresize-size) {
      //color col = color(random(255), random(255), random(255));
      //ballColor[i] = col;
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

