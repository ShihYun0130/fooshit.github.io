function multiTable(){

	var table = document.getElementById("Table");
	table.innerHTML = " ";
	var i = 1;
	var j = 1;
	while(i <= 9)
	{
		while(j <= 9)
		{	
			table.innerHTML += "<div>"+i*j+"</div>";
			table.innerHTML += " ";
			j++;
		}
		j = 1;
		i++;
		table.innerHTML += "<br>";
	}
}