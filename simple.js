function simple(){
	var const1 =document.getElementById('t1').value;
	var const2 =document.getElementById('t2').value;
	var const3 =document.getElementById('t3').value;
	var const= parseInt(const1)*parseInt(const2)*parseInt(const3)/100;
	
	document.getElementById(t4).value = const;
	console.log(const)
} 