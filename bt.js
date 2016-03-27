

var eng;
var tra;
var bt;

var dictionary = {
        awesome:"excellent",
        successful:"triumphant",
        man:"dude",
        bad:"bogus",
        fantastic:"most outstanding",
        take_care:"be excellent to each other",
        goodbye:"party on, dudes",
        wow:"whoa",
        


  };
    
// bt.value = Dictionary[text.split(' ').join('_')] || 'not found';

function multipleReplace(text, wordDict) {
    for (var key in wordDict) {
        text = text.replace(key.split('_').join(' '), wordDict[key]);
    }
    bt.value = text;
}
    
//pir.value = translateToPirate(eng.value); //place translated english text into pirate field

function translateToBt(text)
{
    bt.value = dictionary[text.split(' ').join('_')] || 'not found';
    console.log("btTrans");
}

window.onload = function() {
    tra = document.getElementById('translate');
    bt = document.getElementById('bt');
    bt.disabled = true;
    eng = document.getElementById('english');

    tra.onclick = function(){ 
        console.log("clicking");
        //translateToBt(eng.value);
        multipleReplace(eng.value, dictionary);
    };
}

