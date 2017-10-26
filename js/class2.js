var queOne, queTwo, queThree, queFour, queFive;
var ansOne, ansTwo, ansThree, ansFour, ansFive;
var rightAns = 0;
var wrongAns = 0;
queOne = "草莓的英文?";
queTwo = "西瓜的英文?";
queThree = "蘋果的英文?";
queFour = "芭樂的英文?";
queFive = "香蕉的英文?";
ansOne = "Strawberry";
ansTwo = "Watermelon";
ansThree = "Apple";
ansFour = "Guava";
ansFive = "Banana";
function functionJS(guess, question){
	if (question == 1){
		if (ansOne == guess){
			rightAns++;
		}
		else{
			wrongAns++;
		}
	}
	if (question == 2){
		if (ansTwo == guess){
			rightAns++;
		}
		else{
			wrongAns++;
		}
	}
	if (question == 3){
		if (ansThree == guess){
			rightAns++;
		}
		else{
			wrongAns++;
		}
	}
	if (question == 4){
		if (ansFour == guess){
			rightAns++;
		}
		else{
			wrongAns++;
		}
	}
	if (question == 5){
		if (ansFive == guess){
			rightAns++;
		}
		else{
			wrongAns++;
		}
	}
}