function squarearea(){
	var ar=document.getElementById('s').value;
	
	var area= parseInt(ar)*parseInt(ar);
	document.getElementById('area').value=area;
	console.log(area);
}

function squareperi(){
	var pe=document.getElementById('s').value;
	
	var perimeter=4*parseInt(pe);
	document.getElementById('peri').value=perimeter;
	console.log(perimeter);

	
}