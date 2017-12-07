function findRandom(){
	var ups = document.getElementById("enterUps").value;
	
	var output = Math.floor (Math.random() * ups );
	
	var randomResult = document.getElementById("randomNumber");
	randomResult.innerHTML = output;
}
