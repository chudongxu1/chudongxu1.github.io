/**
 * Created by lenovo on 18/3/24 024.
 */
var p1=document.querySelectorAll(".p1")[0];
var p2=document.querySelectorAll(".p2")[0];
var p3=document.querySelectorAll(".p3")[0];
var pic=document.querySelector(".pic");
var pic1=document.querySelector(".pic1");
var pic2=document.querySelector(".pic2");
function toggle1(){
    pic.style.display="block";
    pic1.style.display="none";
    pic2.style.display="none";
    p1.style.borderBottom="2px solid red";
    p2.style.borderBottom="none";
    p3.style.borderBottom="none";
}
function toggle2(){
    pic.style.display="none";
    pic1.style.display="block";
    pic2.style.display="none";
    p1.style.borderBottom="none";
    p2.style.borderBottom="2px solid red";
    p3.style.borderBottom="none";
}
function toggle3(){
    pic.style.display="none";
    pic1.style.display="none";
    pic2.style.display="block";
    p1.style.borderBottom="none";
    p2.style.borderBottom="none";
    p3.style.borderBottom="2px solid red"
}
var left = document.getElementById("left");
var aSpan =left.getElementsByTagName("span");
var aDiv =left.getElementsByTagName("div");
for(var i=0;i<aSpan.length;i++){
    aSpan[i].index=i;
    aSpan[i].onclick=function(){
        for(var k=0;k<aSpan.length;k++){
            aSpan[k].className ='';
            aDiv[k].style.display ='none';
        }
        this.className ='on';
        aDiv[this.index].style.display ='block';
    };
}
function checkName(){
    var a=document.getElementById("name").value;
    if(a==""){
        document.getElementById("nameSpan").innerHTML="姓名不能为空";
    }else if(a.length<3){
        document.getElementById("nameSpan").innerHTML="姓名不能少于3位";
    }else if(a.length<10){
        document.getElementById("nameSpan").innerHTML="√";
    }else{
        document.getElementById("nameSpan").innerHTML="名字太长";
    }
}
function checkPwd(){
    var a=document.getElementById("pwd").value;
    if(a==""){
        document.getElementById("pwdSpan").innerHTML="密码不能为空";
    }else if(a.length<6){
        document.getElementById("pwdSpan").innerHTML="密码不能少于6位";
    }else if(!isNaN(a)){
        document.getElementById("pwdSpan").innerHTML="密码不能为纯数字";
    }else if(a.length<18){
        document.getElementById("pwdSpan").innerHTML="√";
    }else{
        document.getElementById("pwdSpan").innerHTML="名字太长";
    }
}
function checkPwd2(){
    var a=document.getElementById("pwd").value;
    var b=document.getElementById("pwd2").value;
    if(a!=b){
        document.getElementById("pwd2Span").innerHTML="×";
    }else if(b==""){
        document.getElementById("pwd2Span").innerHTML="密码不能为空";
    }else{
        document.getElementById("pwd2Span").innerHTML="√";
    }
}
function checkPhone(){
    var a=document.getElementById("phoneNum").value;
    var b=/^1\d{10}$/;
    if(b.test(a)){
        document.getElementById("phoneNumSpan").innerHTML="√";
    }else if(a==""){
        document.getElementById("phoneNumSpan").innerHTML="手机号不能为空";
    }else{
        document.getElementById("phoneNumSpan").innerHTML="×";
    }
}
function checkEmail(){
    var a=document.getElementById("email").value;
    var b=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+.[a-zA-Z]+$/;
    if (b.test(a)){
        document.getElementById("emailSpan").innerHTML="√";
    }else if(a==""){
        document.getElementById("emailSpan").innerHTML="邮箱不能为空";
    }else{
        document.getElementById("emailSpan").innerHTML="×";
    }
}
function checkAll(){
    var name=document.getElementById("name").value;
    var pwd=document.getElementById("pwd").value;
    var pwd2=document.getElementById("pwd2").value;
    var phoneNum=document.getElementById("phoneNum").value;
    var email=document.getElementById("email").value;
    if(name==""){
        alert("用户名未填");
        return false;
    }else if(pwd==""){
        alert("密码未填");
        return false;
    }else if(pwd2==""){
        alert("确认密码未填");
        return false;
    }else if(phoneNum==""){
        alert("手机号未填");
        return false;
    }else if(email==""){
        alert("邮箱未填");
        return false;
    }
}
new WOW().init();

