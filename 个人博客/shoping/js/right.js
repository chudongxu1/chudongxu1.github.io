// JavaScript Document

/*图片轮播*/
var i=1;
function scrollBanner(){
	if(i>=5){
		i=1;
		$(".piclist").animate({top:"0px"},500);
	}
	else{
		$(".piclist").animate({top:"-=150px"},500);
		i++;
	}
	$(".picnum li:eq("+(i-1)+")").addClass("selected").siblings().removeClass("selected");
}

$(function(){
	var inter=setInterval(scrollBanner,2000);
	$("#banner").hover(function(){
		clearInterval(inter);
	},function(){
		clearInterval(inter);
		inter=setInterval(scrollBanner,2000);
	})
	
	/*悬停数字*/
	$(".picnum li").hover(function(){
		var num=$(this).text();
		var y=(parseInt(num)-1)*-150;
		$(".piclist").stop(true,true).animate({top:y+"px"},500);
		i=parseInt(num);
		$(this).addClass("selected").siblings().removeClass("selected");
	},function(){
		
	})
})


$(function(){
	var k=1;
	$(".picright").click(function(){
		if(k>=3){
			k=1;
			$(".bottomlist").animate({left:"0px"},500);
		}
		else{
			$(".bottomlist").animate({left:"-=586px"},500);
			k++;
		}
	})
	$(".picleft").click(function(){
		if(k<=1){
			k=3;
			$(".bottomlist").animate({left:"-1172px"},500);
		}
		else{
			$(".bottomlist").animate({left:"+=586px"},500);
			k--;
		}
	})
})
