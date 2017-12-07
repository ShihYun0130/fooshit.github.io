
function checkTriangle(edge1,edge2,edge3){
	var answer = document.getElementById("triangleResult").value;

	if (edge1 + edge2 > edge3 && edge2 + edge3 > edge1 && edge1 + edge3 > edge2) {

		if (pow(edge1,2) == pow(edge2,2) + pow(edge3,2) || pow(edge2,2) == pow(edge1,2) + pow(edge3,2) ||pow(edge3,2) == pow(edge2,2) + pow(edge1,2)) {
				var x = "是，直角三角形";
		}
	}
	else{
		 "否";
	}
	answer.innerHTML = x;
}