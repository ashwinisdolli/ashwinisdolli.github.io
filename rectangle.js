function rectanglearea(){
    var fvalue=document.getElementById('len').value;
    var lvalue=document.getElementById('wid').value;
    var area=parseInt(fvalue)+parseInt(lvalue);
    document.getElementById('area').value=area;
     console.log(area);
}


function rectangleperi(){
    var fval=document.getElementById('len').value;
    var lval=document.getElementById('wid').value;
    var perimeter=2*parseInt(fval)+ 2*parseInt(lval);
    document.getElementById('peri').value=perimeter;
    console.log(perimeter);
    
}