var username=document.getElementById("user");
var loginfrom=document.getElementById("form");
var err=document.getElementById("user-error");
username.addEventListener('input',function(e){

var pattern=/^[\w]{6,8}$/;
var val=e.target.value;
if(!(pattern.test(val))){
    err.style.display="block";
}
else
   err.style.display="none";
});
