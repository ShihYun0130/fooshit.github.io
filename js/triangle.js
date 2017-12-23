function checkTriangle(){
    var edge1 = document.getElementById("edge1").value;
	var edge2 = document.getElementById("edge2").value;
	var edge3 = document.getElementById("edge3").value;
	var x;
	edge1 = Number(edge1);
	edge2 = Number(edge2);
	edge3 = Number(edge3);
	
	if ((         ) && (         ) && (         )) {
		if (Math.pow(edge1,2) == Math.pow(edge2,2) + Math.pow(edge3,2) || Math.pow(edge2,2) == Math.pow(edge1,2) + Math.pow(edge3,2) ||Math.pow(edge3,2) == Math.pow(edge2,2) + Math.pow(edge1,2)) {
			x = "是，直角三角形";
		}
		else if (          &&          ){
			x = "是，正三角形";
		}
		else if (          ||           ||          ){
			x = "是，等腰三角形";
		}
		else{
			x = "是，三角形";
		}
	}
	else{
		x = "否";
	}
	var class2answer = document.getElementById("triangleResult");
	class2answer.innerHTML = x;
}