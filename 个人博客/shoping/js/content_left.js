// JavaScript Document
//放大镜
$(function(){
	                                       //offset小图大图之间距离
	$(".jqzoom").jqueryzoom({xzoom:310,yzoom:310,offset:50});
})

$(function(){
	$(".piclist img").click(function(){
		//path="images/pro_img/blue_one"
		var s=$(this).attr("path");
		$(".jqzoom img").attr("src",s+"_small.jpg").attr("jqimg",s+"_big.jpg");
	})
})
//选项卡
$(function(){
	$(".btn_menu li").click(function(){
		var it=$(this).attr("item");
		$("."+it).show().siblings().hide();
		//颜色
		$(this).addClass("btn1").siblings().removeClass("btn1");
	})
})	