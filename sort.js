function sorting(){
 var n1=document.getElementById('number1').value;
 var n2=document.getElementById('number2').value;
    if(n2.length>n1.length){
      document.getElementById('number1').value=n2;
      document.getElementById('number2').value=n1;
 }
}


function sortascending(){
  var m1=document.getElementById('number1').value;
  var m2=document.getElementById('number2').value;
   if(m1.length>m2.length){
       document.getElementById('number1').value=m2;
       document.getElementById('number2').value=m1;
  }
}