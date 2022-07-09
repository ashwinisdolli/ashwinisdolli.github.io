function add(){
     var con=document.getElementById('a1').value;
     var con2=document.getElementById('a2').value;
      var i=0;
      var as='';
      for(i=1; i<=con2; i++){
          as=as+'<br>'+con+'x'+i+'='+(con*i);
         
     }
     document.getElementById('s1').innerHTML=as;
     console.log(as);
     }


function add1(){
     var con1=document.getElementById('a1').value;
     var con3=document.getElementById('a2').value;
     var i=0;
     var as='';
     var abc='<table>';
     for(i=1;i<=10;i++){
       abc=abc+'<tr><td>5</td><td>x</td><td>1</td><td>=</td><td>5</td></tr>';
      }
      abc=abc+'</table>';
      
     document.getElementById('s1').innerHTML=abc;
     console.log(abc);
     }
     
 function add2(){
     var con1=document.getElementById('a1').value;
     var con3=document.getElementById('a2').value;
     var i=0;
     var as='';
     var abc='<table>';
     for(i=1;i<=parseInt(con3);i++){
       abc=abc+'<tr><td>'+ (con1)+'</td><td>'+'x'+'</td><td>'+(i)+'</td><td>'+'='+'</td><td>'+(con1*i)+'</td></tr>';
      }
      abc=abc+'</table>';
      
     document.getElementById('s1').innerHTML=abc;
     console.log(abc);
     }
     
     
   function add3(){
     var con1=document.getElementById('a1').value;
     var con3=document.getElementById('a2').value;
     var i=0;
     var as='';
     var abc='<table class="table table-hover table-warning"> <tbody>';
     
   for(i=1;i<=parseInt(con3);i++){
       abc=abc+'<tr><td>'+ (con1)+'</td><td>'+'x'+'</td><td>'+(i)+'</td><td>'+'='+'</td><td>'+(con1*i)+'</td></tr>';
      }
      abc=abc+'</tbody></table>';
      document.getElementById('s1').innerHTML=abc;
     console.log(abc);
     }