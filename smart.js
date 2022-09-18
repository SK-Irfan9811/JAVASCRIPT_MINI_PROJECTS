var i=document.getElementById("image");
//i.src="MINI_PROJECT_1/pink.png";
var blue=document.getElementById("one");
var orange=document.getElementById("two");
var vio=document.getElementById("three");
var pink=document.getElementById("four");
blue.addEventListener('click',function(){
    i.src="MINI_PROJECT_1/blue.png";
});
orange.addEventListener('click',function(){
    i.src="MINI_PROJECT_1/orange.png";
});
vio.addEventListener('click',function(){
    i.src="MINI_PROJECT_1/violet.png";
});
pink.addEventListener('click',function(){
    i.src="MINI_PROJECT_1/pink.png";
});
function timee(){
var timestamp=document.getElementById("time");
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    if(h>=0 && h<=9){
        h="0"+String(h);
    }
    if(m>=0 && m<=9){
        m="0"+String(m);
      
    }
    if(s>=0 && s<=9){
        s="0"+String(s);
    }
    
    timestamp.innerHTML=(h+":"+m+":"+s);
}
setInterval(()=>{
    timee();
},1000);

