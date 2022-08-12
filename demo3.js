var x=document.getElementById("btn-submit");
x.onclick=function(){
    var c=Math.random()*255;
  
    document.body.style.backgroundColor="rgb(" +Math.floor(Math.random()*255)+"," +Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
}