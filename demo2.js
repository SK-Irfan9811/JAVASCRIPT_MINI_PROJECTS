var x=document.getElementById("11");
var i=x.innerHTML;
var p=document.getElementById("im");
var interval=setInterval(function(){
    p.style.width=i*10+'%';
    x.innerHTML=i;
    i=i>0?i-1:0;
    if(i<0){
        clearInterval(interval);
    }
},1000);


