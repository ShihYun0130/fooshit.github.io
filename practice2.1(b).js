function findRound(){
	var x = Math.round(document.getElementById("enterRound").value);
	var roundResult = document.getElementById("roundNumber");
	roundResult.innerHTML = x;
}