function checkAns(y)
{
	var x = document.getElementById("one").value;
	x = Number(x);
	/*-----把你想要的變數名稱改造成x的值吧！-----*/
	//var =;



	/*-----比較你輸入的數跟答案誰大誰小吧！-----*/
	if(x < y)
	{
	    document.getElementById("printOut").innerHTML = "再猜大一點！";
	} 
	else if(x > y)
	{
	    document.getElementById("printOut").innerHTML = "再猜小一點！";
	} 
	else
	{
	    document.getElementById("printOut").innerHTML = "答對囉！";
	}
}