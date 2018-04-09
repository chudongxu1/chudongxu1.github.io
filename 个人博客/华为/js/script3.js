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

