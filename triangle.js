
function checkTriangle(){
	var answer = document.getElementById("triangleResult");
        var edge1 = document.getElementById("edge1").value;
	var edge2 = document.getElementById("edge2").value;
	var edge3 = document.getElementById("edge3").value;
	var x ;
	
	if (edge1 + edge2 > edge3 && edge2 + edge3 > edge1 && edge1 + edge3 > edge2) {

		if (pow(edge1,2) == pow(edge2,2) + pow(edge3,2) || pow(edge2,2) == pow(edge1,2) + pow(edge3,2) ||pow(edge3,2) == pow(edge2,2) + pow(edge1,2)) {
				x = "yes";
		}
	}
	else{
		x = "no";
	}
	answer.innerHTML = x;
}
