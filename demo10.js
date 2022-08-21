var b1=document.getElementById("add-item");
var b3=document.getElementById("del-item");
var t=document.getElementById("b");
var list=document.getElementById("todo-list");
var msg='';
b.addEventListener('input',function(e){
    msg=e.target.value;
});
b.addEventListener('keyup',function(e){
    if(e.keyCode===13)
        addList();
})
function del(e){
    var d=document.getElementById("item"+e);
    list.removeChild(d);
}
b1.addEventListener('click',addList)
function addList(){
    if(msg.length!==0){
    var newDiv=document.createElement('div');
    var image=document.createElement('img');
    image.setAttribute('src','trash.png');
    image.setAttribute('height',20);
    image.setAttribute('width',20); 
    image.style.marginLeft="100px";
    newDiv.appendChild(document.createTextNode(msg));
    newDiv.appendChild(image);
    newDiv.id="item"+list.childElementCount;
    console.log(newDiv.id);
    image.className=list.childElementCount;
    list.appendChild(newDiv);
    t.value='';
    image.addEventListener('click',function(){
       del(image.className);
    })
    }
    else{
        alert("Enter item first");
    }
}


b3.addEventListener('click',function(){
    if(list.childElementCount>0){
    var first=list.firstElementChild;
    list.removeChild(first);
    }
    else{
        alert("no items to delete");
    }
});
