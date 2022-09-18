var countdown=10;
console.clear();
var c=document.getElementById("countdown");
var initial=c.innerHTML;
var colors=["red","blue","pink","yellow","green","grey"];
setInterval(function(){
    document.body.style.backgroundColor=colors[initial];
   initial=initial>0?initial-1:0;
   c.innerHTML=initial; 
   
        
},1000);
