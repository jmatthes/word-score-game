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
var isempty=false;
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
//加上了BAG_OF_LETTERS.length是否为零的判定条件。
function getAvailableLetter(){
	if(BAG_OF_LETTERS.length!=0){
		var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
		var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
		console.log(randomLetter[0]);
		return randomLetter[0];
	}else{
		randomLetter=new Letter('*', 7, 0);
		return randomLetter;
	}
}
//完成查找单词最高分的方法。并考虑了不能匹配成单词以及通配符在末尾的情况。
function findWordToUse(){
 //TODO Your job starts here.
	if(isempty==true){
		alert("game is over ,your final scroe is "+ SCORE);
	}
	else{
		var tempscore = 0;
		var tempstr="";
		for (i = 0; i < YOUR_HAND.length; i++) {
			for(j=0;j<YOUR_HAND.length;j++)
				if(j==i)
					continue;
				else{
					var str=YOUR_HAND[i].letter+YOUR_HAND[j].letter;
					if(Word_List.FuzzyCheck(str)){
						if(isThisAWord(str)){
							var tempscore1=YOUR_HAND[i].pointsWhenLettersUsed+YOUR_HAND[j].pointsWhenLettersUsed;
							if(tempscore1>tempscore){
								tempscore=tempscore1;
								tempstr=str;
							}
						}
						for(q=0;q<YOUR_HAND.length;q++)
							if(q==i||q==j)
								continue;
							else{
								str= YOUR_HAND[i].letter+YOUR_HAND[j].letter+YOUR_HAND[q].letter;
								if(Word_List.FuzzyCheck(str)){
									if(isThisAWord(str)){
										var tempscore1=YOUR_HAND[i].pointsWhenLettersUsed+YOUR_HAND[j].pointsWhenLettersUsed+YOUR_HAND[q].pointsWhenLettersUsed;
										if(tempscore1>tempscore){
											tempscore=tempscore1;
											tempstr=str;
										}
									}
									for(w=0;w<YOUR_HAND.length;w++)
										if(w==i||w==j||w==q)
											continue;
										else{
											str= YOUR_HAND[i].letter+YOUR_HAND[j].letter+YOUR_HAND[q].letter+YOUR_HAND[w].letter;
											if(Word_List.FuzzyCheck(str)){
												if(isThisAWord(str)){
													var tempscore1=YOUR_HAND[i].pointsWhenLettersUsed+YOUR_HAND[j].pointsWhenLettersUsed+YOUR_HAND[q].pointsWhenLettersUsed+YOUR_HAND[w].pointsWhenLettersUsed;
													if(tempscore1>tempscore){
														tempscore=tempscore1;
														tempstr=str;
													}
												}
												for(e=0;e<YOUR_HAND.length;e++)
													if(e==i||e==j||e==q||e==w)
														continue;
													else{
														str= YOUR_HAND[i].letter+YOUR_HAND[j].letter+YOUR_HAND[q].letter+YOUR_HAND[w].letter+YOUR_HAND[e].letter;
														if(Word_List.FuzzyCheck(str)){
															if(isThisAWord(str)){
																var tempscore1=YOUR_HAND[i].pointsWhenLettersUsed+YOUR_HAND[j].pointsWhenLettersUsed+YOUR_HAND[q].pointsWhenLettersUsed+YOUR_HAND[w].pointsWhenLettersUsed+YOUR_HAND[e].pointsWhenLettersUsed;
																if(tempscore1>tempscore){
																	tempscore=tempscore1;
																	tempstr=str;
																}
															}
															for(r=0;r<YOUR_HAND.length;r++)
																if(r==i||r==j||r==q||r==w||r==e)
																	continue;
																else{
																	str= YOUR_HAND[i].letter+YOUR_HAND[j].letter+YOUR_HAND[q].letter+YOUR_HAND[w].letter+YOUR_HAND[e].letter+YOUR_HAND[r].letter;
																	if(Word_List.FuzzyCheck(str)){
																		if(isThisAWord(str)){
																			var tempscore1=YOUR_HAND[i].pointsWhenLettersUsed+YOUR_HAND[j].pointsWhenLettersUsed+YOUR_HAND[q].pointsWhenLettersUsed+YOUR_HAND[w].pointsWhenLettersUsed+YOUR_HAND[e].pointsWhenLettersUsed+YOUR_HAND[r].pointsWhenLettersUsed;
																			if(tempscore1>tempscore){
																				tempscore=tempscore1;
																				tempstr=str;
																			}
																		}
																		for(t=0;t<YOUR_HAND.length;t++)
																			if(t==i||t==j||t==q||t==w||t==e||t==r)
																				continue;
																			else{
																				str= YOUR_HAND[i].letter+YOUR_HAND[j].letter+YOUR_HAND[q].letter+YOUR_HAND[w].letter+YOUR_HAND[e].letter+YOUR_HAND[r].letter+YOUR_HAND[t].letter;
																				if(isThisAWord(str)){
																					tempscore=YOUR_HAND[i].pointsWhenLettersUsed+YOUR_HAND[j].pointsWhenLettersUsed+YOUR_HAND[q].pointsWhenLettersUsed+YOUR_HAND[w].pointsWhenLettersUsed+YOUR_HAND[e].pointsWhenLettersUsed+YOUR_HAND[r].pointsWhenLettersUsed+YOUR_HAND[t].pointsWhenLettersUsed;
																					tempstr=str;
																				}
																			}
																	}
																	else{
																		continue;
																	}
																}
														}
														else{
															continue;
														}
													}
											}
											else{
												continue;
											}
										}
								}	
								else{
									continue;
								}	
							}	
					}
					else{
						continue;
					}	
				}	
		}
		tempstr=tempstr.toLowerCase();
		if(tempstr.indexOf("_")==tempstr.length-1)
			tempstr=tempstr.substring(0,tempstr.length-1);
		if(BAG_OF_LETTERS.length!=0&&tempscore==0)
			alert("can not build a word ,please click 'Retire the hand'");
		else if(BAG_OF_LETTERS.length<tempstr.length){
			haveLettersForWord(tempstr);
			successfullyAddedWord(tempstr);
			isempty=true;
			alert("game is over ,your final scroe is "+ SCORE);
		}
		else{
			haveLettersForWord(tempstr);
			successfullyAddedWord(tempstr);
		}
	}
}

function humanFindWordToUse(){
	
	 var humanFoundWord = $( "#human-word-input").val();
	 console.log("Checking human workd of:" + humanFoundWord);
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
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	//clearClasses();
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

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
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
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
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
	if(BAG_OF_LETTERS.length==0){
		alert("BAG_OF_LETTERS is empty");
	}else{
		clearClasses();
		YOUR_HAND = new Array();
		addNumbersFromBag();
		displayHand();
		}
}
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}
function Letter(letter, numberOfStartingTiles, pointsWhenLettersUsed) {
    this.letter = letter;
    this.numberOfStartingTiles = numberOfStartingTiles;
    this.pointsWhenLettersUsed = pointsWhenLettersUsed;
    this.tilesUsed = 0;
    this.used = false;

    this.remainingTiles = function () {
        if((this.numberOfStartingTiles - this.tilesUsed) > 0){
            return (this.numberOfStartingTiles - this.tilesUsed);
        }else{
            return 0;
        }
    };
    this.useTile = function () {
        if((this.numberOfStartingTiles - this.tilesUsed) > 0){
            this.tilesUsed++;
            return true;
        }else{
            return false;
        }
    };
}
