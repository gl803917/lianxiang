$(function() {
	//轮播图
	var swiper = new Swiper('.detail_swiper', {
		slidesPerView: 5,
		spaceBetween: 10,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//postion定位
	$(window).scroll(function() {
		//scrollTop滚动距离
		var s = $(window).scrollTop();
		if (s >= 300) {
			$(".position").css("display", "block");
		}
		if (s < 300) {
			$(".position").css("display", "none");
		}
		$(".position ul li").hover(function() {
			$(this).find("img:nth-child(2)").css("display", "block")
			$(this).find("img:nth-child(1)").css("display", "none")
			$(this).find(".pos_box").css("display", "block")
			$(this).find(".pot").css("display", "block")
			$(".position div").hover(function() {
				$(this).find("img:nth-child(2)").css("display", "block")
				$(this).find("img:nth-child(1)").css("display", "none")
			}, function() {
				$(this).find("img:nth-child(2)").css("display", "none")
				$(this).find("img:nth-child(1)").css("display", "block")
			})
		}, function() {
			$(this).find(".pos_box").css("display", "none")
			$(this).find(".pot").css("display", "none")
			$(this).find("img:nth-child(2)").css("display", "none")
			$(this).find("img:nth-child(1)").css("display", "block")
		})
		//回到顶部
		$(".position>div img:nth-child(2)").click(function() {
			$("html,body").stop(true).animate({ scrollTop: 0 }, 500)
		})
	})

	//导航条
	$(window).scroll(function() {
		var s0 = $(window).scrollTop();
		if (s0 > 90) {
			$("#logo").css("display", "block");
			$("#photo").css("position", "fixed");
			$("#pho").css("position", "fixed");

		} else {
			$("#logo").css("display", "none");
			$("#photo").css("position", "static");
			$("#pho").css("position", "static");
		}
	})

	//floor2 大图显示滑过事件
	$(".floor2 .box ul li").hover(function() {
		$(".item").eq($(this).index()).css("display", "block");
		number = $(this).index();
		$(".item").not($(".item").eq($(this).index())).css("display", "none");
		$(this).css("border", "1px solid #FD482C");
		$(this).siblings().css("border", "1px solid #ccc")
	});

	//floor2 轮播图
	var w = $(".floor2 .box ul li").css("width");
	var w1 = w.replace("px", ""); //替换字符串
	w1 = parseInt(w1) + 10 + 2; //每个img的宽度+ margin+两个边框
	var long = $(".floor2 .box").find("ul>li img").length; //获取img的个数
	var s = $(".floor2 .box ul").css("width", w1 * long + "px");
	// $(".floor2 .box ul").animate({ left: -w1 }, 1000);
	var number = 0;
	//左按钮
	$("#one_btn").click(function() {
		number -= 1;
		if (number <= 0) {
			number = 0;
		}
		$(".item").eq(number).css("display", "block");
		$(".item").eq(number).siblings().css("display", "none");
		$(".floor2 .box ul li").eq(number).css("border", "1px solid #FD482C");
		$(".floor2 .box ul li").eq(number).siblings().css("border", "1px solid #ccc");
		if (number < 5) {
			$(".floor2 .box ul").animate({ left: 0 }, 100)
		}
	})
	//右按钮
	$("#two_btn").click(function() {
		number += 1;
		if (number > $(".floor2 .box ul li").length - 1) {
			number = $(".floor2 .box ul li").length - 1
		}
		$(".floor2 .box ul li").eq(number).css("border", "1px solid #FD482C");
		$(".floor2 .box ul li").eq(number).siblings().css("border", "1px solid #ccc");
		$(".item").eq(number).css("display", "block");
		$(".item").eq(number).siblings().css("display", "none");
		if (number >= 5) {
			$(".floor2 .box ul").animate({ left: -w1 * 5 }, 100)
		}
	})
	//floor2 计时器
	var h = $(".floor2 .rgt .setinteval .ite").eq(0).text();
	var m = $(".floor2 .rgt .setinteval .ite").eq(1).text();
	var s = $(".floor2 .rgt .setinteval .ite").eq(2).text();
	var d = $(".floor2 .rgt .setinteval").find(".day").text().replace("天", "");
	h = parseInt(h);
	m = parseInt(m);
	s = parseInt(s);
	d = parseInt(d);

	var hours = h;
	var minutes = m;
	var seconds = s

	function fn(a) {
		if (a < 10) {
			return a = "0" + a;
		} else {
			return a;
		}
	}
	var timer = setInterval(function() {
		//秒
		seconds -= 1;
		if (seconds < 0) {
			minutes -= 1;
			seconds = 60
		}
		if (minutes < 0) {
			hours -= 1;
			minutes = 59;
		}
		if (hours < 0) {
			d -= 1;
			hours = 23;
		}
		$(".floor2 .rgt .setinteval .ite").eq(2).text(fn(seconds));
		$(".floor2 .rgt .setinteval .ite").eq(1).text(fn(minutes));
		$(".floor2 .rgt .setinteval .ite").eq(0).text(fn(hours));
	}, 1000)
	//停止为0
	var num = s + m * 60 + h * 60 * 60 + d * 60 * 60 * 24
	setTimeout(function() {
		clearTimeout(timer)
	}, 1000 * num)

	//颜色点击事件
	$(".floor2 .rgt .colo .blue").click(function() {
		$(this).css("border", "1px solid #FD482C");
		$(this).siblings().css("border", "1px solid #ccc");
		$(".floor2 .rgt .colo_three .blue").css("border", "1px solid #ccc")
	})
	$(".floor2 .rgt .colo_three .blue").click(function() {
		$(this).css("border", "1px solid #FD482C");
		$(".floor2 .rgt .colo .blue").css("border", "1px solid #ccc")
	})
	//分期付款
	$(".floor2 .rgt .installment .iten").hover(function() {
		$(this).find(".down").css("display", "block")
		$(this).find(".odw").css("display", "inline-block")
		$(this).find(".oup").css("display", "none")
	}, function() {
		$(this).find(".down").css("display", "none")
		$(this).find(".odw").css("display", "none")
		$(this).find(".oup").css("display", "inline-block")
	})
	//加购数量
	//右按钮
	$("#rgt_btn").click(function() {
		var txt = $(".txt").val();
		txt = parseInt(txt);
		if (txt >= 5) {;
			$(".alert").fadeIn(100);
			setTimeout(function() {
				$(".alert").fadeOut(100);
			}, 3000)
			return;
		}
		$(".txt").val(txt + 1)
	})
	//左按钮
	$("#lef_btn").click(function() {
		var txt = $(".txt").val();
		txt = parseInt(txt);
		if (txt < 2) {
			return;
		}
		$(".txt").val(txt - 1)
	})

	var s = $(".floor2 .rgt .down .poso").find("input");
	$(".floor2 .rgt .down .poso").find("input").click(function() {
		$(this).parents(".iten").css("border", "1px solid #FD482C");
		var c = $(this).parents(".poso").find(".content").text().replace("￥", "");
		var ss=$(this).parents(".iten").index();
		if(ss==2){
			$("#s1").text(c);
			$("#s0").text("选择分期");
			$("#s0").parents('.iten').css("border", "1px solid #ccc");
		}else{
			$("#s0").text(c);
			$("#s1").text("选择分期");
			$("#s1").parents('.iten').css("border", "1px solid #ccc");
		}
 
	})

  

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

})
