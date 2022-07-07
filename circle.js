function circlearea(){
	var r = document.getElementById('a1').value;
    var area=3.14*parseInt(r)*parseInt(r);
    document.getElementById('a2').value= area;
    console.log(area); 
    
    if(r==''){
        document.getElementById('a2').value="enter radius value"
    }
        
}

function circleperimeter(){
    var p= document.getElementById('a1').value;
 
    var perimeter=2*3.14*parseInt(p);
    document.getElementById('a3').value= perimeter;
    console.log(perimeter);
    
    if(p==''){
        document.getElementById('a3').value="enter radius value" 
    }
    
}
