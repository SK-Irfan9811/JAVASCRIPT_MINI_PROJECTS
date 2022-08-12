var x=document.getElementById("text");
//x.classList.add("smaller");
var xx=document.getElementById("btn");
xx.addEventListener('click',function(){
    if(x.classList.contains('smaller'))
        x.classList.remove('smaller');
    else    
    x.classList.add('smaller');
});
/*setTimeout(function(){
    x.classList.remove("smaller");

},2000);*/
