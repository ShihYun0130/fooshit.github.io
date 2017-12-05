/*var n = document.getElementById("enterNumber").value
var sum = 0;    
//cin  >> n;
for(var i = 0; i <= n; i++)
{
	sum += i;
}
document.write("the sum from 1 to "+ n + " is "+ sum)*/

function enterNumber(){
var n = document.getElementById("enterNumber").value
var sum = 0;    
for(var i = 0; i <= n; i++)
{
  sum += i;
}
var c = document.getElementById("Number");
c.innerHTML = "Result: <br> The sum from 1 to "+Number(n)+" is "+Number(sum)
//var para = document.createElement("h4");
//para.appendChild(document.createTextNode("The sum from 1 to "+Number(n)+" is "+Number(sum)));
//c.appendChild(para);
}