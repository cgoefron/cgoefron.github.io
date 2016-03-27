
var a = 500;
var b = 50;
var c = 10; 
var d = 10;
var keys = [];
var concordance = {};
var startPoint = 20;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  console.log("testing");
  

  data = "A large program is a costly program, and not just because of the time it takes to build. ";
  data += "Size almost always involves complexity, and complexity confuses programmers. ";
  data += "Confused programmers, in turn, tend to introduce mistakes (bugs) into programs. ";
  data += "A large program also provides a lot of space for these bugs to hide, making them hard to find. ";
  data += "Let’s briefly go back to the final two example programs in the introduction. The first is self-contained and six lines long.";

  var tokens = data.split(/\W+/);

  
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i];
    if (concordance[word] === undefined) {
      concordance[word] = 1;
      keys.push(word); //if we have a new word, add it to the array.
    } else {
      concordance[word]++;
    }
  }

  
  
  keys.sort(function(a, b) {
    return (concordance[b] - concordance[a]);
  });




for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ': ' + concordance[keys[i]]);

    //if key.concordance > #, draw an ellipse with size relative to concordance
      
      if (concordance[keys[i]] > 1) {
        console.log(keys[i] + ': ' + concordance[keys[i]] + "larger");
        startPoint = startPoint + concordance[keys[i]] * 25;
        a = startPoint;
        b = startPoint;
        c = concordance[keys[i]] * 200;
        d = concordance[keys[i]] * 200;
        //console.log("c =" + c);
        fill (random(255), random(255), random(255));
        ellipse(a,b,c,d);
      }
    }  
   
}


