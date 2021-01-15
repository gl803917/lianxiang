$(function () {
	//支付平台
	$(".floor2 ul li").click(function () {
		$(this).css("border","1px solid #FD482C")
		$(this).siblings().css("border","1px solid #ccc");
	})
	//银行借记卡级信用卡
	$(".floor3 .down ul li").hover(function () {
		$(this).find(".prompt").css("display","block");
	},function () {
		$(this).find(".prompt").css("display","none");
	})
	
$(".floor3 .down ul li").click(function () {
		$(this).css("border","1px solid #FD482C");
		$(this).siblings().css("border","1px solid #ccc")
		$(this).parent().siblings().find("li").css("border","1px solid #ccc")
	})
	//查看更多
	$(".floor3 .down ul .view").click(function () {
		$(".floor3 .down ul:nth-child(3)").css("display","block");
		$(this).find(".more").css("display","none");
		$(this).find(".view_prompt").css("display","block")
	})
	//收起更多
	$(".floor3 .down ul .pack").click(function () {
		$(".floor3 .down ul:nth-child(3)").css("display","none");
		$(".floor3 .down ul li").find(".more").css("display","block");
		$(".floor3 .down ul li").find(".view_prompt").css("display","none")
	})
	//企业网银
	$(".floor4 .down ul li").click(function () {
		$(this).css("border","1px solid #FD482C")
		$(this).siblings().css("border","1px solid #ccc");
	})
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			var arrC = c.split("=");
			if (arrC[0] == cname) {
				return arrC[1];
			}
		}
		return "";
	}
  
  
  
})	
	
	
	
	
	
	
	
	
	
	
