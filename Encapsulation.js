//Encapsulation
name="Irfan";
cls="B-Tech";
sec="C";
mobile="9390773125";
function getName(){
return name;
}
function getCls(){
return cls;
}
function getSec(){
return sec;
}
function getMobile(){
return mobile;
}
var k={
name:"Irfan",
cls:"B-Tech",
sec:"C",
mobile:"9390773125",
getName:function(){
return this.name;
},
getCls:function(){
return this.cls;
},
getSec:function(){
return this.sec;
},
getMobile:function(){
return this.mobile;
}

}
console.log(k.getMobile());

