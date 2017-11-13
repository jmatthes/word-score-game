/* 
 * Word List JS
 * Purpose: This module creates the Word_List variable, which handles word-checking and random word generation.
 * Instructions: Add <script> element to include this file first, and then another <script> element to add the wordBank file.
 * Author: Tim Crouch
 * Date: 10.9.2012
 * Version: 0.21
 */

var Word_List = (function() {
    var publicInt = {};
    var wordBank = new Array();
    var wordBank1 = new Array();
    //Create method for checking if word is in list
	//完善listcheck，考虑通配符存在的各种情况。
    function listCheck(toCheck) {
		var UnderlineLocate1=toCheck.indexOf("_");
		var UnderlineLocate2=toCheck.indexOf("_",UnderlineLocate1+1);
		var i=0;
		if(UnderlineLocate1==-1)
		{
			toCheck = toCheck.toLowerCase();
			var letter = toCheck.charAt(0);
			return (wordBank[letter].indexOf(toCheck) > -1);
        }else{
			if(UnderlineLocate1!=0&&UnderlineLocate2==-1)
			{
				toCheck = toCheck.toLowerCase();
				var letter1 = toCheck.charAt(0);
				var len=wordBank[letter1].length;
				for(i=0;i<len;i++){
					if(wordBank[letter1][i].length==toCheck.length){
						if(wordBank[letter1][i].substring(0,UnderlineLocate1).indexOf(toCheck.substring(0,UnderlineLocate1))>-1)
							if(wordBank[letter1][i].substring(UnderlineLocate1+1).indexOf(toCheck.substring(UnderlineLocate1+1))>-1)
								return true;
							else
								continue;
						else
							continue;
					}else
						continue;
				}
				return false;	
			}
			else if(UnderlineLocate1==0&&UnderlineLocate2==-1){ 
				var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				for(var j=0;j<26;j++){
					var len=wordBank[alpha[j]].length;
					for(i=0;i<len;i++){
						if(wordBank[alpha[j]][i].length==toCheck.length){
							if(wordBank[alpha[j]][i].substring(UnderlineLocate1+1).indexOf(toCheck.substring(UnderlineLocate1+1))>-1)
								return true;
						}else
							continue;
					}
				}
				return false;
			}
			else if (UnderlineLocate1!=0&&UnderlineLocate2!=-1){
				toCheck = toCheck.toLowerCase();
				var letter1 = toCheck.charAt(0);
				var len=wordBank[letter1].length;
				for(i=0;i<len;i++){
					if(wordBank[letter1][i].length==toCheck.length){
						if(wordBank[letter1][i].substring(0,UnderlineLocate1).indexOf(toCheck.substring(0,UnderlineLocate1))>-1)
							if(wordBank[letter1][i].substring(UnderlineLocate1+1,UnderlineLocate2).indexOf(toCheck.substring(UnderlineLocate1+1,UnderlineLocate2))>-1)
								if(wordBank[letter1][i].substring(UnderlineLocate2+1).indexOf(toCheck.substring(UnderlineLocate2+1))>-1)
									return true;
								else
									continue;
							else
								continue;
						else
							continue;
					}else
						continue;
				}
				return false;	
				
				
			}
			else if (UnderlineLocate1==0&&UnderlineLocate2!=-1){
				var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				for(var j=0;j<26;j++){
					var len=wordBank[alpha[j]].length;
					for(i=0;i<len;i++){
						if(wordBank[alpha[j]][i].length==toCheck.length){
							if(wordBank[alpha[j]][i].substring(UnderlineLocate1+1,UnderlineLocate2).indexOf(toCheck.substring(UnderlineLocate1+1,UnderlineLocate2))>-1)
								if(wordBank[alpha[j]][i].substring(UnderlineLocate2+1).indexOf(toCheck.substring(UnderlineLocate2+1))>-1)
									return true;
						}else
							continue;
					}
				}
				return false;	
				
			}
		}
    }
	//新建fuzzycheck方法，考虑通配符存在的各种情况，完成模糊匹配。
    function fuzzyCheck(fCheck){
		var i=0;
		var UnderlineLocate1=fCheck.indexOf("_");
		var UnderlineLocate2=fCheck.indexOf("_",UnderlineLocate1+1);
		if(UnderlineLocate1==-1)
		{
			fCheck=fCheck.toLowerCase();
			var letter = fCheck.charAt(0);	
			var len=wordBank[letter].length;
			for(i=0;i<len;i++)
			{
			if(wordBank[letter][i].substring(0,fCheck.length).indexOf(fCheck) > -1)
				return true;
			}
			return false;
		}else{
			
			if(UnderlineLocate1!=0&&UnderlineLocate2==-1)
			{
				fCheck = fCheck.toLowerCase();
				var letter1 = fCheck.charAt(0);
				var len=wordBank[letter1].length;
				for(i=0;i<len;i++){
					if(wordBank[letter1][i].substring(0,UnderlineLocate1).indexOf(fCheck.substring(0,UnderlineLocate1))>-1)
						if(wordBank[letter1][i].substring(UnderlineLocate1+1).indexOf(fCheck.substring(UnderlineLocate1+1))>-1)
							return true;
						else
							continue;
					else
						continue;
				}
				return false;	
			}
			else if(UnderlineLocate1==0&&UnderlineLocate2==-1){ 
				var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				for(var j=0;j<26;j++){
					var len=wordBank[alpha[j]].length;
					for(i=0;i<len;i++){
						if(wordBank[alpha[j]][i].substring(UnderlineLocate1+1).indexOf(fCheck.substring(UnderlineLocate1+1))>-1)
							return true;
					}
				}
				return false;
			}	
			else if (UnderlineLocate1!=0&&UnderlineLocate2!=-1){
				fCheck = fCheck.toLowerCase();
				var letter1 = fCheck.charAt(0);
				var len=wordBank[letter1].length;
				for(i=0;i<len;i++){
					if(wordBank[letter1][i].substring(0,UnderlineLocate1).indexOf(fCheck.substring(0,UnderlineLocate1))>-1)
						if(wordBank[letter1][i].substring(UnderlineLocate1+1,UnderlineLocate2).indexOf(fCheck.substring(UnderlineLocate1+1,UnderlineLocate2))>-1)
							if(wordBank[letter1][i].substring(UnderlineLocate2+1).indexOf(fCheck.substring(UnderlineLocate2+1))>-1)
								return true;
							else
								continue;
						else
							continue;
					else
						continue;	
				}
				return false;	
			}
			else if (UnderlineLocate1==0&&UnderlineLocate2!=-1){
				var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				for(var j=0;j<26;j++){
					var len=wordBank[alpha[j]].length;
					for(i=0;i<len;i++){
						if(wordBank[alpha[j]][i].substring(UnderlineLocate1+1,UnderlineLocate2).indexOf(fCheck.substring(UnderlineLocate1+1,UnderlineLocate2))>-1)
							if(wordBank[alpha[j]][i].substring(UnderlineLocate2+1).indexOf(fCheck.substring(UnderlineLocate2+1))>-1)
								return true;
					}
				}
				return false;
			}
		}
	}
	
    function getRand(letterCount) {
        
        letterCount = letterCount || 0;
        
        if (letterCount == 0) {
            //If 0 was entered, get a random number of digits between 4 and 10
            letterCount = Math.floor(Math.random() * 7) + 4;
        }
        
        //Check bounds
        if (letterCount < 4) {
            letterCount = 4;
        }
        
        if (letterCount > 10) {
            letterCount = 10;
        }
        
        //Randomize the letter you are looking in
        var checkLetterNum = Math.floor(Math.random() * 26),
        		checkLetter = String.fromCharCode(checkLetterNum + 97),
        		wordNum,
        		wordPick;
        
        //check if the word is the correct length and repeat if not
        do {
		        //Randomly choose the number of an element in the correct wordBank letter array
            wordNum = Math.floor(Math.random() * wordBank[checkLetter].length);
      			wordPick = wordBank[checkLetter][wordNum];
        } while (wordPick.length != letterCount);        
        
        return wordPick;     
    }
    
    function loadWordDat(wordArray) {
        var character = wordArray[12].charAt(0);
        if (!character) {
            throw "Not able to get first letter from word to determine word bank.";
        }
        wordBank[character] = wordArray;
    }
    
    publicInt.isInList = listCheck;
	publicInt.FuzzyCheck = fuzzyCheck;
    publicInt.getRandomWord = getRand;
    publicInt.loadBank = loadWordDat;
    
    return publicInt;

}());
