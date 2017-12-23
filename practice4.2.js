function generateTriangle()
{
	var y = document.getElementById("demon");
	y.innerHTML = "";
	/*-----宣告你的for迴圈-----*/
	for(var i = 1; i <= 10; i = i + 1)	//請完成for迴圈 （輸出幾行） 
	
	{
		/*-----再次宣告for迴圈-----*/
	    for(var j = 1; j <= i; j = j + 1) //（那一行要輸出幾個符號）
	    {	
	    	/*-----寫出你想要印出的符號吧！-----*/
	        y.innerHTML += "&";
	    }
	    y.innerHTML += "<br>";
	}
}
