function generateTriangle()
{
	var y = document.getElementById("demon");
	y.innerHTML = "";


	/*-----你的三角形邊長為何？-----*/
	var n = document.getElementById("inputSide").value;
	n = Number(n);

	/*-----宣告你的for迴圈-----*/
	for(i = 0; i < n; i++)
	{
		/*-----這裡也要宣告喔-----*/
	    for(j = 0; j <= i; j++)
	    {	
	    	/*-----寫出你想要印出的符號吧！-----*/
	        y.innerHTML += "*";
	    }
	    y.innerHTML += "<br>";
	}
}
