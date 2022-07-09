function cylinderArea(){
    var a1=document.getElementById('c1').value;
    var a2=document.getElementById('c2').value;
    var area=2*3.142*parseInt(a1)*(parseInt(a1)+parseInt(a2));
    document.getElementById('ar').value=area;
    console.log(area);
    
}

function cylinderPerimeter(){
  var a1=document.getElementById('c1').value;
  var a2=document.getElementById('c2').value;  
  var perimeter=2*3.142*parseInt(a1);
  document.getElementById('peri').value=perimeter;
 console.log(perimeter);
   
}

function cylinderVolume(){
    var a1=document.getElementById('c1').value;
    var a2=document.getElementById('c2').value;
    var volume=3.142*parseInt(a1)*parseInt(a1)*parseInt(a2);
    document.getElementById('vol').value=volume;
    console.log(volume);
}