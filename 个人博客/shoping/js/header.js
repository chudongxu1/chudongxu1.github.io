// JavaScript Document
/*------header------*/
$(function(){
	$("#skin li").click(function(){
		var i=$(this).attr("item");//skin1
		$("#header,#nav,h3").removeClass().addClass(i);
		$(this).addClass("selected").siblings().removeClass("selected");
	})
	
/*-nav导航菜单-*/ 
    $(".mainmenu").hover(function(){
		$(this).children("ul").slideDown(100);
	},function(){
		$(this).children("ul").slideUp(100);
	})

})




