function findRound(){
	var input = document.getElementById("enterAbs").value;
	var output = Math.round(Math.pow(input,2));
	var absResult = document.getElementById("absNumber");
	absResult.innerHTML = output;
}
