var t=document.getElementById("text");
var initSize=window.getComputedStyle(t).fontSize;
var btnMinus=document.getElementById("btn1");
var btnPlus=document.getElementById("btn2");
initSize=Number(initSize.slice(0,2));
btnMinus.addEventListener('click',function(){
    initSize=initSize-10;
    if(initSize<10)
    initSize=10;
    console.log(initSize);
    t.style.fontSize=initSize+"px";
   
});

btnPlus.addEventListener('click',function(){
    initSize=initSize+10;
    if(initSize>100)
        initSize=100;
    console.log(initSize);
    t.style.fontSize=initSize+"px";

});
