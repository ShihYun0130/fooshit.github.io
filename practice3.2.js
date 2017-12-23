function enterNumberSnd(){
var n = document.getElementById("enterNumberSnd").value
//----以下兩行為變數名稱設定-------------------------------------------------------------------------
var num = n;
var sum = 0;
var i = 1;  
//-----題目：計算從1到輸入數字的總和(用while的方法)----------------------------------------------------  
while(i <= num)
{
  sum = sum + i;
  i = i + 1;
}
//--------------------------------------------------------------------------------------------------
var c = document.getElementById("NumberSnd");
c.innerHTML = "Result: <br> The sum from 1 to "+Number(n)+" is "+Number(sum);
}