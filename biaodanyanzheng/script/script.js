/***
 *  Created by lenovo on 17/10/17 017.
 **/


//支持字母数字的2--18个字符
function f(id,text){
    document.querySelector(id).innerHTML=text;

}
function b(id ,idTip,text){
    var user=document.querySelector(id);
    var userTips=document.querySelector(idTip);
    var t=user .value.length<2||user.value.length>18;
    if(user.value===""){
        userTips.innerHTML=text
    }else if(t){
        userTips.innerHTML="格式错误"
    }else{
        userTips.innerHTML="输入正确"
    }
}
//用户名焦点状态下执行的函数
    var user=document.querySelector("#user");
    user.addEventListener("focus",function(){
        f("#userTips","支持字母数字的2-18个字符")
    });
user.addEventListener("blur",function(){
    b("#user","#userTips","请输入用户名")
});

var password=document.querySelector("#password");
password.addEventListener("focus",function(){
    f("#passwordTips","建议使用数字字母俩种组合")
});
password.addEventListener("blur",function(){
    b("#password","#passwordTips","请输入密码")
});
//确认密码
var password2=document.querySelector("#password2");
password2.addEventListener("focus",function(){
    b("#password2","#password2Tips","请再次输入密码")
});
function ps2(){
    var password2Tips=document.querySelector("#password2Tips");
    if(password2.value===""){
        password2Tips.innerHTML="确认密码不能为空";
        return false

    } else if(password.value!=password2.value){
       password2Tips.innerHTML=("请确认密码是否匹配");
        return false

    }else{
        password2Tips.innerHTML=("确认密码成功");
        return true
    }
}
password2.addEventListener("blur",function(){
  ps2()
});
//var submit=document.querySelector("#submit");
//submit.addEventListener("click",function(){});




function form(){
    var user=document.querySelector("#user");
    var password=document.querySelector("#password");
    if(user.value===""||password.value==="" || !ps2()){
        alert("用户名、密码、确认密码、不正确");
        return false;

    }else if(ps2() !=true){
        alert("确认密码不正确");
        return false;
    }else if(xy()!=true){
        alert("请勾选用户协议");
        return false;
    }
    else{
        alert("注册成功");
        return true;
    }
};
var code=document.querySelector("#code");
function xc(id,text){
    //通过当前元素的父级元素，找到父级元素的子级元素
    //var p=code.parentNode.children[1];
    //通过当前的元素，找到同级相邻的下一个元素；
    var p=id.nextElementSibling;
    console.log(p);
    p.innerHTML = text;
};
code.addEventListener("focus",function(){
    xc(this,"请输入验证码")
});
var getCode=document.querySelector("#getCode");
var yzm;
var time= 5;
var t;
function xget(){
    yzm=Math.floor(Math.random()*9000+1000);
    alert("验证码为："+ yzm);
    t=setInterval(function(){
        getCode.value = time;
        //button变灰（不可点击状态）
        getCode.disabled="disabled";
        if(time>0){
            time--;
        }else{
            clearInterval(t);
            time=5;
            getCode.value="获取验证码";
            getCode.disabled="";

        }
    },1000);
}
getCode.addEventListener("click",function(){
    xget();
});
function xb(){
    if(code.value==yzm){
        code.nextElementSibling.innerHTML="通过"
    }else {
        code.nextElementSibling.innerHTML="验证码不匹配，请重新输入"
    }
}
code.addEventListener("blur",function(){
    xb()
})
var check=document.querySelector("#check");
function xy(){
    if(check.checked === true){
        return true;
    }else{
        return false;
    }
}
