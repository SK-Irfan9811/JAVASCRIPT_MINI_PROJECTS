
var btn=document.getElementById("add-item");
var list=document.getElementById("todo-list");
var b=document.getElementById('b');
var msg="";
b.addEventListener('input',function(e){
    msg=e.target.value;
});
b.addEventListener('keyup',function(e){
    if(e.keyCode===13)
        addItems();
        
});
function addItems(){
    if(msg!==undefined && msg!==null && msg!==''){
    var x=document.createElement('li');
    x.appendChild(document.createTextNode(msg));
    b.value='';
    msg='';
    list.appendChild(x);
    }
    else{
        alert("please enter items");
        }
    
};
btn.addEventListener('click',addItems);
