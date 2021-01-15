$(function() {
	//选项卡
	$(".bt").click(function() {
		$(this).css("background", "#fff")
		$(this).siblings().css("background", "#f7f7f7")
		$(".cot").eq($(this).index()).css("display", "block")
		$(".cot").not($(".cot").eq($(this).index())).css("display", "none");
	})
	//姓名
	$("#cont").focus(function() {
		$("#cont").css("border", "1px solid #FF0000")
		$(".name").animate({ left: 12, top: -8 }, 400)
		$(".name").css("font-size", "12px")
		$(".name").css("color", "#FF0000");
		$(".name").css("background", "#fff");
	})
	$("#cont").blur(function() {
		$("#cont").css("border", "1px solid #999")
		$(".name").animate({ left: 18, top: 10 }, 400)
		$(".name").css("font-size", "14px")
		$(".name").css("color", "#999");
		$(".name").css("background", "#fff");
	})
	//手机号
	$("#cont2").focus(function() {
		$("#cont2").css("border", "1px solid #FF0000")
		$(".phoe").animate({ left: 326, top: -8 }, 400)
		$(".phoe").css("font-size", "12px")
		$(".phoe").css("color", "#FF0000");
		$(".phoe").css("background", "#fff");
	})
	$("#cont2").blur(function() {
		$("#cont2").css("border", "1px solid #999")
		$(".phoe").animate({ left: 330, top: 10 }, 400)
		$(".phoe").css("font-size", "14px")
		$(".phoe").css("color", "#999");
		$(".phoe").css("background", "#fff");
	})
	//详细地址
	$("#cont3").focus(function() {
		$("#cont3").css("border", "1px solid #FF0000");
		$(".detail").animate({ left: 15, top: -9, fontSize: 12 }, 400);
		$(".detail").css("color", "#FF0000");
		$(".detail").css("background", "#fff")
	})
	$("#cont3").blur(function() {
		$("#cont3").css("border", "1px solid #999");
		$(".detail").animate({ left: 15, top: 19, fontSize: 15 }, 400);
		$(".detail").css("color", "#999");
		$(".detail").css("background", "#fff")
	})
	var now="off"; //状态是添加状态
	//收货地址弹窗
	$(".address").click(function() {
		$(".ba").css("display", "block")
		$(".ba").animate({ top: 0, opacity: 1 }, 500)
		now="off" //状态为修改
	})
	//点击取消和叉号消失
	$("#err").click(function() {
		$(".ba").animate({ top: -20, opacity: 0 }, 500)
		setTimeout(function() {
			$(".ba").css("display", "none")
		}, 500)
		$("#cont").val("");
		$("#cont2").val("");
		$("#cont3").val("")
	})
	$("#remove").click(function() {
		$(".ba").animate({ top: -20, opacity: 0 }, 500)
		setTimeout(function() {
			$(".ba").css("display", "none")
		}, 500)
		$("#cont").val("");
		$("#cont2").val("");
		$("#cont3").val("")
	})
	//添加收货地址	
	//验证手机号
	 var oHd0 = document.getElementById("hd0");
	 var oHd1 = document.getElementById("hd1")
	 $("#cont2").blur(function () {
		 var s2 = $("#cont2").val();
	 if (/^1[3456789]\d{9}$/.test(s2)) {
		   oHd0.style.display="none";
	  	   oHd1.style.display="block";
		   setTimeout(function () {
		   	$("#hd1").css("display", "none")
		   },500)
	 	} else {
			oHd0.style.display="block";
			oHd1.style.display="none";
	 }
	})
	//渲染 -- 点击保存按钮
	$("#bot").click(function() {
		var s = $("#cont").val();
		var s2 = $("#cont2").val();
		var s3 = $("#cont3").val();
		if(now == "off"){
			var $add = $(
				`<div class=" address0  fl">
						<div class="name">${s}</div>
						<div class="phoe">${s2}</div>
						<div class="adres">${s3}</div>
							<div class="but">
									<button class="change_btn" type="button">修改</button>
									<button class="remove_btn" type="button">删除</button>
								</div>
						</div>`)
			//插入	
			$(".address_box .address").before($add)
		}else{
			$(".address0").eq(pindex).find(".name").text(s);
			$(".address0").eq(pindex).find(".phoe").text(s2);
			$(".address0").eq(pindex).find(".adres").text(s3);
		}
		//插入后消失
		$(".ba").animate({ top: -20, opacity: 0 }, 500)
		setTimeout(function() {
			$(".ba").css("display", "none")
		}, 500)
		//插入后加红色边框
		$(".address0").css("border", "1px solid #FF0000")
		
		$("#cont").val("");
		$("#cont2").val("");
		$("#cont3").val("")
	})
	//鼠标滑过修改\删除显示
	$(".address_box").hover(function() {
		$(".but").css("display", "block")
	}, function() {
		$(".but").css("display", "none")
	})
	//姓名
	$("#cont").blur(function () {
		if($(this).val() == ""){
			$("#cont").css("border", "1px solid #999")
			$(".name").animate({ left: 18, top: 10 }, 400)
			$(".name").css("font-size", "14px")
			$(".name").css("color", "#999");
			$(".name").css("background", "#fff");
		}else{
			$(".name").stop().animate({ left: 12, top: -8 },100)
			$(".name").css("font-size", "12px")
			$(".name").css("color", "#999");
		}
	
	})
	//手机号
	$("#cont2").blur(function () {
		if($(this).val() == ""){
		$("#cont2").css("border", "1px solid #999")
		$(".phoe").animate({ left: 330, top: 10 }, 400)
		$(".phoe").css("font-size", "12px")
		$(".phoe").css("color", "#999");
		$(".phoe").css("background", "#fff");
		}else{
			$(".phoe").stop().animate({ left: 326, top: -8 },100)
			$(".phoe").css("font-size", "12px")
			$(".phoe").css("color", "#999");
		}
	})
	//详细地址
	$("#cont3").blur(function () {
		if($(this).val() == ""){
			$("#cont3").css("border", "1px solid #999");
			$(".detail").animate({ left: 15, top: 19, fontSize: 12 }, 400);
			$(".detail").css("color", "#999");
			$(".detail").css("background", "#fff")
		}else{
			$(".detail").stop().animate({ left: 15, top: -9 },100)
			$(".detail").css("font-size", "12px")
			$(".detail").css("color", "#999");
		}
	
	})
	//删除
	$(".address_box").on("click",".remove_btn",function () {
		$(this).parents(".address0").remove();
		$(this).parents(".address0").animate({top:-20, opcity:0},500);
	})
	//修改
	var pindex = 0;
	$(".address_box").on("click",".change_btn",function () {
		$(".ba").css("display", "block")
		$(".ba").animate({ top: 0, opacity: 1 }, 500)
	   //获取添加的文本
	   var  n = $(this).parents(".address_box").find(".address0 .name").text();
	   var  p = $(this).parents(".address_box").find(".address0 .phoe").text();
	   var  a = $(this).parents(".address_box").find(".address0 .adres").text();
	   //在赋值给文本框
		$("#cont").val(n);
		$("#cont2").val(p);
		$("#cont3").val(a);
		pindex = $(this).parents(".address0").index();
		//状态是修改
		now="open";
	
	})
	$(".banner .btn button").click(function () {
		var time = new Date();
		location.assign("./pay_order.html");
	})
})











