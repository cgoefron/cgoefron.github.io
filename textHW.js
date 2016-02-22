var paragraph = "The officers were satisfied. My manner had convinced them. I was singularly at ease. They sat, and while I answered cheerily, they chatted of familiar things. But, ere long, I felt myself getting pale and wished them gone. My head ached, and I fancied a ringing in my ears: but still they sat and still chatted. The ringing became more distinct: --It continued and became more distinct: I talked more freely to get rid of the feeling: but it continued and gained definiteness --until, at length, I found that the noise was not within my ears. No doubt I now grew very pale; --but I talked more fluently, and with a heightened voice. Yet the sound increased --and what could I do? It was a low, dull, quick sound --much such a sound as a watch makes when enveloped in cotton. I gasped for breath --and yet the officers heard it not. I talked more quickly --more vehemently; but the noise steadily increased. I arose and argued about trifles, in a high key and with violent gesticulations; but the noise steadily increased. Why would they not be gone? I paced the floor to and fro with heavy strides, as if excited to fury by the observations of the men --but the noise steadily increased. Oh God! what could I do? I foamed --I raved --I swore! I swung the chair upon which I had been sitting, and grated it upon the boards, but the noise arose over all and continually increased. It grew louder --louder --louder! And still the men chatted pleasantly, and smiled. Was it possible they heard not? Almighty God! --no, no! They heard! --they suspected! --they knew! --they were making a mockery of my horror! --this I thought, and this I think. But anything was better than this agony! Anything was more tolerable than this derision! I could bear those hypocritical smiles no longer! I felt that I must scream or die! and now --again! --hark! louder! louder! louder! louder!"

var regExp = new RegExp(/ /);
var paraArray = paragraph.split(regExp); //the paragraph text array
var compareString = ""; //this will store the last string at the end of the code
var compareCount = 0; //used to count the duplicate words
var excCount = 0; //counts the exclamation points

function setup() {
//document.bgColor="black"
console.log(compareString);

	

	for (var i = 0; i < paraArray.length; i++){ //loop to change the font size every !
		addSpace = false;
		if (paraArray[i].includes('!')){
			excCount = excCount + 1;
			//document.write('<font style = "font-weight: ' + (50*excCount)+';">');
		}

		document.write('<font size = "' + (2*excCount)+'">'); //Write font opening tag

		console.log(paraArray[i].replace(/(--|\!)/g, "")); 
		console.log(compareString.replace(/(--|\!)/g, ""));

		//if (paraArray[i].replace(/(--|\!)/g, "")==compareString.replace(/(--|\!)/g, "")){
		if ((paraArray[i].replace(/(--|\!)/g, "")==paraArray[i+1].replace(/(--|\!)/g, ""))||(paraArray[i].replace(/(--|\!)/g, "")==compareString.replace(/(--|\!)/g, ""))){ //this removes the -- and ! to look for duplicate words; reads ahead and one behind
		compareCount = compareCount + 1;
		document.write("<br>"); //this breaks the line whenever -- or !

		for (var c = 0; c < compareCount; c++){
			document.write('&nbsp&nbsp&nbsp&nbsp&nbsp') //this adds tabs, compounds per duplicate
		}
		//document.write('<font style = "font-weight: ' + (100*compareCount)+';">');
		//document.write('<font size = "' + (2*(compareCount+excCount))+'">'); //hit the font size limit
		}else
		{
			compareCount = 0;
		}

		

		var tempString = paraArray[i] + " ";
		document.write(tempString); //temp store add back spaces

		//console.log(paraArray[i].charAt(paraArray[i].length-1)); //how to use slice?

		document.write('</font>'); //Close font tag

		//Line break at every !
		if (paraArray[i].charAt(paraArray[i].length-1)=="!"){ //break at !
					document.write("<br>");
					//console.log("linebreak");
		}

		if (paraArray[i+1].charAt(0)=="-"){ //reads ahead one character to check for -
					document.write("<br>");
					//console.log("linebreak");
		}
		compareString = paraArray[i]; //this makes compareString one position behind

	}
}
