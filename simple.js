function si(){
	var const1 =document.getElementById('t1').value;
	var const2 =document.getElementById('t2').value;
	var const3 =document.getElementById('t3').value;
	var ans = parseInt(const1)*parseInt(const2)*parseInt(const3)/100;
	
	document.getElementById('t4').value=ans;
	console.log(ans);
} 