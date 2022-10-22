var b1=document.getElementById("add-item");
var b3=document.getElementById("del-item");
var t=document.getElementById("b");
var list=document.getElementById("todo-list");
var msg='';
var count=document.getElementById("count");
var api=document.getElementById("API");
var pic=document.getElementById("imgg");
var count=0;
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
b1.addEventListener('click',postMethod)
b1.addEventListener('click',addList)
function addList(){
    count++;
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
    msg='';
    }
    else{
        alert("Enter item first");
    }
    
}

b3.addEventListener('click',function(){
    if(list.childElementCount>0){
    var first=list.firstElementChild;
    list.removeChild(first);
    count--;
    }
    else{
        alert("no items to delete");
    }
});
function dynamicToDoList(id,url){
    count++;
    var newDiv=document.createElement('div');
    newDiv.appendChild(document.createTextNode("id is "+id+"                 "))
    newDiv.appendChild(document.createTextNode("URL is "+url));
    newDiv.id="item"+list.childElementCount;
    list.appendChild(newDiv);
    
}
console.log(count);
function postMethod(){
    var http=new XMLHttpRequest();
    http.onreadystatechange=function(){
        if(this.readyState===4){
            if(this.status===201){
                var res=JSON.parse(this.responseText);
                dynamicToDoList(res.id,msg);
                console.log("item sent successfully");
            }
            else{
                console.log("call failed");
            }
        }
    }
    http.open("POST","https://jsonplaceholder.typicode.com/photos",true);
    var obj=JSON.stringify({
        "albumId":msg,
         "id":5001,
         "url":"okok"
    });
    console.log("post Method");
    http.send(obj);
}
function getApiData(){
    var http=new XMLHttpRequest();
    http.onreadystatechange=function(){
        if(this.readyState===4){
            if(this.status===200){
                var sub=JSON.parse(this.responseText);
                for(let i=0;i<sub.length;i++){
                    dynamicToDoList(sub[i].id,sub[i].url);
                    
                } 
            }
            else{
                console.log("call failed");
            }
        }
    }
    http.open("GET",'https://jsonplaceholder.typicode.com/photos',true);
    http.send();
    console.log(list.childElementCount);
} 
getApiData();


