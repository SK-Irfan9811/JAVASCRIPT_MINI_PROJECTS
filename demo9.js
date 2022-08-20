
var btn=document.getElementById("add-item");
var list=document.getElementById("todo-list");
var count=4;
btn.addEventListener('click',function(){
    
    var x=document.createElement('li');
    var y=document.getElementById('b');
   
    if(y.value.length==0 ){
        alert("please enter items");
    }else{
    x.appendChild(document.createTextNode(y.value));
    count++;
    y.value="";
    list.appendChild(x);
    }
});
