function findRound(){
	var input = document.getElementById("enterAbs").value;
	// input是你們輸入的數字
	var output = Math.pow(input, 2)
	//output是答案，輸出 input的平方
	var absResult = document.getElementById("absNumber");
	absResult.innerHTML = output;
}
