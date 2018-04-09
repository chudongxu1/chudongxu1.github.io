// JavaScript Document

//颜色选择
$(function(){
	$(".color_list li").click(function(){
		var c=$(this).attr("title");
		$("#color").text(c);
//换左侧图片 
		var k=$(this).attr("co");//获取 li co 的属性
    	$(".piclist img:eq(0)").attr("src",k+"_one.jpg").attr("path",k+"_one");
	    $(".piclist img:eq(1)").attr("src",k+"_two.jpg").attr("path",k+"_two");
	    $(".piclist img:eq(2)").attr("src",k+"_three.jpg").attr("path",k+"_three");
	})

   
})


//评分
$(function(){
	$(".startlist li").hover(function(){
		var y=$(this).attr("star");
		$(".startlist").css("background-position","0 "+y+"px");
	},function(){
		$(".startlist").attr("style","");
	})
})

$(function(){
	$(".size li").click(function(){
		var a=$(this).text();
		$(".size span").text(a);
		$(this).css("background","#F3F").siblings().css("background","");
		})
	
	})












