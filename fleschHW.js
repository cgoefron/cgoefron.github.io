//This takes text and visualizes the complexity of the sentences with font height and length of red bars underneath each sentence.
var data = "The officers were satisfied. My manner had convinced them. I was singularly at ease. They sat, and while I answered cheerily, they chatted of familiar things. But, ere long, I felt myself getting pale and wished them gone. My head ached, and I fancied a ringing in my ears: but still they sat and still chatted. The ringing became more distinct: --It continued and became more distinct: I talked more freely to get rid of the feeling: but it continued and gained definiteness --until, at length, I found that the noise was not within my ears. No doubt I now grew very pale; --but I talked more fluently, and with a heightened voice. Yet the sound increased --and what could I do? It was a low, dull, quick sound --much such a sound as a watch makes when enveloped in cotton. I gasped for breath --and yet the officers heard it not. I talked more quickly --more vehemently; but the noise steadily increased. I arose and argued about trifles, in a high key and with violent gesticulations; but the noise steadily increased. Why would they not be gone? I paced the floor to and fro with heavy strides, as if excited to fury by the observations of the men --but the noise steadily increased. Oh God! what could I do? I foamed --I raved --I swore! I swung the chair upon which I had been sitting, and grated it upon the boards, but the noise arose over all and continually increased. It grew louder --louder --louder! And still the men chatted pleasantly, and smiled. Was it possible they heard not? Almighty God! --no, no! They heard! --they suspected! --they knew! --they were making a mockery of my horror! --this I thought, and this I think. But anything was better than this agony! Anything was more tolerable than this derision! I could bear those hypocritical smiles no longer! I felt that I must scream or die! and now --again! --hark! louder! louder! louder! louder!";

//Look for word delimeters
var delimiters = ".:;?! !@#$%^&*()+-,";
var words;

// Look for sentence delimiters
var sentenceDelim = ".:;?!";
var sentences;

//Total counts
var totalSentences = 0;
var totalSyllables = 0;
var totalWords = 0;

//Starting height for rectangle
var sentHeight = 10;

var input;

function setup(){
  //Setup Canvas
  var canvas = document.getElementById("canvas"); 
  var ctx = canvas.getContext("2d"); 
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,2000,5000);
  
  //Setup Text
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 0.1;
  
  //Split data into sentences
  sentences = splitTokens(data, sentenceDelim); //doesn't work globally!
  totalSentences = sentences.length;
  
  console.log('Setup Started')
  
  /*
  input = createInput();
  input.position(20, 65);

  button = createButton('Submit');
  button.position(150, 65);
  button.mousePressed();
  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
  */
  
  for (var j = 0; j < totalSentences; j++) {
    words = splitTokens(sentences[j], delimiters);
    //array storing count of how many words w/ each # of syllables
    var sylCount = []; //how many words have # of syllables
    var letCount = []; //how many words have # of letters
    var sentScore = 0;
    var sylScore = 0;
    
    for (var i = 0; i < words.length; i++) {
      //Use regex to avoid counting special characters
      var word = words[i].replace(/[^a-zA-Z ]/g, ""); //fixes prob with hyphens in Telltale text
      
      var tempSyllables = countSyllables(word);
      totalSyllables += tempSyllables;
      
      var tempLetters = word.length;
      
      if(sylCount[tempSyllables] === undefined){
        sylCount[tempSyllables] = 1;
      }else{
        sylCount[tempSyllables] = sylCount[tempSyllables] + 1;
      }
      
      if(letCount[tempLetters] === undefined){
        letCount[tempLetters] = 1;
      }else{
        letCount[tempLetters] = letCount[tempLetters] + 1;
      }
      
      //Test output inside of loop
      /*
      console.log('Words with ' + tempSyllables + ' syl: ' + sylCount[tempSyllables]);
      console.log('Words with ' + tempLetters + ' letters: ' + letCount[tempLetters]);
      */
      
      totalWords++;
    }
    
    //console.log('Sentence ' + (j+1) + ': ' + sentences[j]);
   
     //Output syl data for current sentence
     for (var i = 1; i < sylCount.length; i++)  {
        if(sylCount[i] !== undefined){
          //console.log('Words with ' + i + ' syl: ' + sylCount[i] + ' (' + (i * sylCount[i]) + ')');
          sentScore = sentScore + (i * sylCount[i]);
          sylScore = sylScore + (i * sylCount[i]);
        }else{
          //Do not display if 0 
          //console.log('Words with ' + i + ' syl: 0');
        }
      }
    
    //Output letter data for current sentence
    for (var i = 1; i < letCount.length; i++)  {
      if(letCount[i] !== undefined){
        //console.log('Words with ' + i + ' letters: ' + letCount[i] + ' (' + (i * letCount[i]) + ')');
        sentScore = sentScore + (i * letCount[i]);
      }else{
        //Do not display if 0
        //console.log('Words with ' + i + ' letters: 0');
      }
    }
    
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20,sentHeight,sentScore*sylScore,sentScore);
    
    ctx.strokeRect(sentHeight,20,sentScore,sentScore);
    ctx.fillStyle = "#fff";
    ctx.font = sentScore/2 + "pt Arial";
    //Attempt to put the text inside the rectangle
    ctx.fillText(sentences[j], 25, (5 + sentHeight + sentScore/2));
    
    
    sentHeight = sentHeight + sentScore + 10
    
    console.log('Sentance: ' + sentences[j])
    console.log('Sentence Score: ' + sentScore);  
    
  }
  
}

function countSyllables(word) {
  var syl    = 0;
  var vowel  = false;
  var length = word.length;

  // Check each word for vowels (don't count more than one vowel in a row)
  for (var i = 0; i < length; i++) {
    if (isVowel(word.charAt(i)) && (vowel == false)) {
      vowel = true;
      syl++;
    } else if (isVowel(word.charAt(i)) && (vowel == true)) {
      vowel = true;
    } else {
      vowel = false;
    }
  }

  var tempChar = word.charAt(word.length-1);
  // Check for 'e' at the end, as long as not a word w/ one syllable
  if (((tempChar == 'e') || (tempChar == 'E')) && (syl != 1)) {
    syl--;
  }
  return syl;
}



// Check if a char is a vowel (count y)
function isVowel(c) {
  if      ((c == 'a') || (c == 'A')) { return true;  }
  else if ((c == 'e') || (c == 'E')) { return true;  }
  else if ((c == 'i') || (c == 'I')) { return true;  }
  else if ((c == 'o') || (c == 'O')) { return true;  }
  else if ((c == 'u') || (c == 'U')) { return true;  }
  else if ((c == 'y') || (c == 'Y')) { return true;  }
  else                               { return false; }


// Calculate flesch index
var f1 = 206.835;
var f2 = 84.6;
var f3 = 1.015;
var r1 = totalSyllables / totalWords;
var r2 = totalWords / totalSentences;
var flesch = f1 - (f2 * r1) - (f3 * r2);

// Write Report
var report = "";

report += "Total Syllables: " + totalSyllables + "\n";
report += "Total Words    : " + totalWords + "\n";
report += "Total Sentences: " + totalSentences + "\n";
report += "Flesch Index   : " + flesch + "\n";



}