// JavaScript Document

//最新动态样式
// $(function(){
// 	//toggle 切换
// 	$("#left h3 img").toggle(function(){
// 	    $(this).parent().next().slideUp(500)
// 		$(this).attr("src","images/up.gif");
// 	},function(){
// 		$(this).parent().next().slideDown(500);
// 		$(this).attr("src","images/down.gif");
// 	})
// })


$(function(){
	$("#left h3 img").toggle(function(){
		$(this).parent().next().slideUp(500)
		$(this).attr("src","images/up.gif")
	},function(){
		$(this).parent().next().slideDown(500)
		$(this).attr("src","images/down.gif")
	})
})














//滚动文字
function scrollNews(){
	$(".news").animate({top:"-21px"},500,function(){
		var li=$(".news li:first").remove();
		$(".news").append(li);
		$(".news").css("top","0px");
	})	
}

$(function(){
	var inter=setInterval(scrollNews,2000);
	$("#leftnews").hover(function(){
		//停止计时器
		clearInterval(inter);
	},function(){
		clearInterval(inter);
		var inter=setInterval(scrollNews,2000);
	})
})

// 产品分类
$(function(){
	$(".mainlist>li").toggle(function(){
		$(this).children("ul").hide();
		$(this).css("background","url(images/treeview-expanded.gif) no-repeat");
	},function(){
		$(this).children("ul").show();
		$(this).css("background","url(images/treeview-collapsed.gif) no-repeat");
	})
})	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	