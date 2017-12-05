function findRandom(){
	var ups = document.getElementById("enterUps").value;

	var x = Math.floor (Math.random() * ups );
	var randomResult = document.getElementById("randomNumber");
	randomResult.innerHTML = x;
}