var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];

var YOUR_HAND = new Array();
var SCORE = 0;
function startGame() {
	addNumbersFromBag();
	displayHand();
	
};



function addNumbersFromBag(){
	console.log("your hand has:" + YOUR_HAND.length);
	for(i=YOUR_HAND.length; i < 7; i++){
		YOUR_HAND[i] = getAvailableLetter();
	}
	
}


function displayHand(){
	console.log("your hand has:" + YOUR_HAND.length);
	for (i = 0; i < YOUR_HAND.length; i++) {

		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);

		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}
	
}



function getAvailableLetter(){
	var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
	var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
		console.log('1', randomLetter[0]);
	return randomLetter[0];
}

function getGroup(data, index=0, group=[]) {
  var need_apply = new Array();
  need_apply.push(data[index]);
  for(var i = 0; i < group.length; i++) {
    need_apply.push(group[i] + data[index]);
  }
  group.push.apply(group, need_apply);
  if(index + 1 >= data.length){
  	return group;
  }
  else{
  	return getGroup(data, index + 1, group);
  }

}

function checkRegInWord(wordStr) {
	const LongStr= wordStr;
    const regStr = LongStr.split('').reduce(
		(result, value) => {
			let nextStr = value ==='_'?'_?':'(${next}|_){1}';
		    return result + nextStr
	}, '')
  const reg = new RegExp(regStr)
  function isPass (str) {
    return reg.test(str)
  }
  console.log('HELSS ' + isPass('HELSS'));
  console.log('HELS_ ' + isPass('HELS_'));
  console.log('HEL__ ' + isPass('HEL__'));
  console.log('HE___ ' + isPass('HE___'));
  console.log('H____ ' + isPass('H____'));
  console.log('_____ ' + isPass('_____'));
  console.log('__L__ ' + isPass('__L__'));
  console.log('EL__ ' + isPass('EL__'));
}

function findWordToUse(){
 //TODO Your job starts here.
	const dictForUsed = new Array();
	const letterListForUsed = new Array();
	for (var i=0;i<YOUR_HAND.length;i++) {
		letterListForUsed.push(YOUR_HAND[i]['letter']);
		dictForUsed[YOUR_HAND[i]['letter']] =YOUR_HAND[i]['pointsWhenLettersUsed']
	}
	var getGroupList = getGroup(letterListForUsed);
	var maxValue = 0;
	var mostValueWord = '';
	for (var i=0;i<getGroupList.length;i++){
		if(getGroupList[i].indexOf('_')>=0){
			const regStr =checkRegInWord(getGroupList[i])

		}else{

		}
		// check the _ in getGroupList[i]
		if(isThisAWord(getGroupList[i])){
			var lettersToCalculated = getGroupList[i].split("")
			var wordValue = 0;
			for (var j=0;j<lettersToCalculated.length;j++){
				wordValue += parseInt(dictForUsed[lettersToCalculated[j]])
			}
			if(wordValue>= maxValue){
				mostValueWord = getGroupList[i]
				maxValue = wordValue
			}
			}else{
			continue
		}
	}
	// if the check mostvalueWord is '' ,if '' ,it shows empty

	confirmLettersForWord(mostValueWord)
	successfullyAddedWord(mostValueWord);
}

function humanFindWordToUse(){
	 var humanFoundWord = $( "#human-word-input").val();
	 if(isThisAWord(humanFoundWord)){
		 if(haveLettersForWord(humanFoundWord)){
			 successfullyAddedWord(humanFoundWord);
		 }else{
			 alert(humanFoundWord + " - Do not have the letters for this word");
		 }
	 }else{
		 alert(humanFoundWord + " is not a valid word.");
	 }
		
}


function successfullyAddedWord(foundWord){
	$( "#word-history-list").append('<li class="list-group-item" style="text-align:center;background: #f7f0f09e;">' + foundWord + '</li>');
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	
}

function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}


function takeOutUsedLetters(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

function confirmLettersForWord(aProposedWord){
	if (aProposedWord ==""){
			resetHand()
	}
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < YOUR_HAND.length; i++) {
		for(ii=0; ii<wordAsArray.length; ii++) {
			if(YOUR_HAND[i].letter == wordAsArray [ii]|| YOUR_HAND[i].letter =="_"){
				if(!YOUR_HAND[i].used){
					console.log("     " + YOUR_HAND[i].letter + "<-Found");
					YOUR_HAND[i].used = true;

				}
			}
        }

	}
}

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]|| YOUR_HAND[ii].letter =="_"){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
		}
		
		
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	
	return true;
}


function resetHand(){
	if(YOUR_HAND.length<=1){
		alert("Tha process is finished")
	}else{
		for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
	}

}

function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
}
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
	});
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});