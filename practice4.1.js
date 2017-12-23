function checkAns(y)
{
	var x = document.getElementById("one").value;
	x = Number(x);
	

	/*-----提醒：電腦設定的隨機數字叫做y喔-----*/
	/*-----提醒：你所猜的數字叫作x喔-----*/

	/*-----比較你輸入的數跟答案誰大誰小吧！-----*/
	if ( x > y )
	{
		/*-----底下的" "裡面要輸入提示的字喔，例如"答對了！"這樣-----*/
	    document.getElementById("printOut").innerHTML = "猜小一點";
	    /* 這邊是要輸入當 電腦的數字 大於 我猜的數字*/
	} 
	else if ( x < y )
	{
	    document.getElementById("printOut").innerHTML = "猜大一點";
	} 
	else
	{
	    document.getElementById("printOut").innerHTML = "答對了!!";
	}
}