/*var x=document.getElementById("btn");
x.addEventListener('mousedown',function(){
    console.log("mouse down")
});
x.addEventListener('mouseup',function(){
    console.log("mouse up")
});
x.addEventListener('click',function(){
    console.log("clicked")
});
x.addEventListener('dblclick',function(){
    console.log("double clicked ")
});
var xx=document.getElementById('c');
xx.addEventListener('mousedown',function(){
    console.log("mouse down by div")
});*/
var a=document.getElementById("over");
var o=document.getElementById("text");
var num1=(Number)(o.innerHTML);
a.addEventListener('mouseover',function(){
    
    num1+=1;
    o.innerHTML=num1;
});
var b=document.getElementById("enter");
var o1=document.getElementById("text1");
var num2=(Number)(o1.innerHTML);

b.addEventListener('mouseenter',function(){
   
    num2+=1;
    o1.innerHTML=num2;
});
var c=document.getElementById("move");
var o2=document.getElementById("text2");
var num3=(Number)(o2.innerHTML);
c.addEventListener('mousemove',function(){
    num3+=1;
    console.log("Moved");
    o2.innerHTML=num3;
});




