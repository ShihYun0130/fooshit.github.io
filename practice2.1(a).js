function findRound(){
	var x = document.getElementById("enterAbs").value;
	x = Math.round(Math.pow(x,2));
	var absResult = document.getElementById("absNumber");
	absResult.innerHTML = x;
}