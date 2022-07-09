function add(){
  var num1=document.getElementById('n1').value; 
  var num2=document.getElementById('n2').value;
  var add=parseInt(num1)+parseInt(num2);
  document.getElementById('add').value=add; 
}

function sub(){
    var nu1=document.getElementById('n1').value;
    var nu2=document.getElementById('n2').value;
    var sub=parseInt(nu1)-parseInt(nu2);
  document.getElementById('sub').value=sub; 
}


function mul(){
    var n1=document.getElementById('n1').value;
    var n2=document.getElementById('n2').value;
    var mul=parseInt(n1)*parseInt(n2);
  document.getElementById('mul').value=mul; 
    
}

function div(){
    var n3=document.getElementById('n1').value;
    var n4=document.getElementById('n2').value;
    var div=parseInt(n3)/parseInt(n4);
  document.getElementById('div').value=div; 
    
}