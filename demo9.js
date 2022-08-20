
var btn=document.getElementById("add-item");
var list=document.getElementById("todo-list");
var count=4;
btn.addEventListener('click',function(){
    var x=document.createElement('li');
    x.appendChild(document.createTextNode("ListItem"+count));
    count++;
    list.appendChild(x);
    console.log(x);
});
