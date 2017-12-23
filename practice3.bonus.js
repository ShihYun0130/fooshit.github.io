function multiTable(){
	var table = document.getElementById("Table");
	table.innerHTML = " ";
	//------題目：寫出九九乘法表--------------------------
	//------以下兩行請設定變數----------------------------
	var i = 1;
	var j = 1;
	//------填入while迴圈的各個條件和執行指令--------------
	while(i <= 9)
	{
		while(j <= 9)
		{	
			//-----空格內請填入要如何計算出九九乘法表的每一個元素------
			table.innerHTML += "<div>"+i*j+"</div>";
			table.innerHTML += " ";
			//-----請填入結束一個while迴圈前要做的事情---------------
			j = j + 1;
		}
		j = 1;
		//-----請填入結束一個while迴圈前要做的事情---------------
		i = i + 1;
		table.innerHTML += "<br>";
	}
}
