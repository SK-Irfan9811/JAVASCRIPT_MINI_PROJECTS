var b1=document.getElementById("add-item");
var b2=document.getElementById("up-item");
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
b1.addEventListener('click',addList)
function addList(){
    if(msg.length!==0){
    var newLi=document.createElement('li');
    newLi.appendChild(document.createTextNode(msg));
    list.appendChild(newLi);
    msg='';
    t.value='';
    }
    else{
        alert("Enter item first");
    }
}
function createNewNode(){
    if(msg.length>0){
    var newList=document.createElement('li');
    newList.appendChild(document.createTextNode(msg));
    return newList;}
    else{
        alert("give valid input to update");
    }
}
b2.addEventListener('click',function(){
    var firstItem=list.firstElementChild;
    var newItem=createNewNode();
    list.replaceChild(newItem,firstItem);
    
});
b3.addEventListener('click',function(){
    if(list.childElementCount>0){
    var first=list.firstElementChild;
    list.removeChild(first);
    }
    else{
        alert("no items to delete");
    }
});
