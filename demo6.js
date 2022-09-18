var username=document.getElementById("user");
var sub=document.getElementById("subb");
console.log(username);
username.addEventListener('change',function(){
    console.log("value changed");
});
username.addEventListener('input',function(event){
    var c=event.target.value;
    console.log(c.toUpperCase());
});
username.addEventListener('focus',function(){
    console.log("focussed");
});
username.addEventListener('blur',function(){
    console.log("blureed");
});
sub.addEventListener('submit',function(e){
    alert("submitted");
    e.preventDefault();

});