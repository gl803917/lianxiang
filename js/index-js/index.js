$(function() {

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

	//轮播图	
	$(".floor1").css("width");
	var a = $(".floor1").css("width").replace("px", "");
	a = parseInt(a); //转化为数字
	var b = $(".floor1").find(".pho img").length; //获得img个数
	$(".floor1 .pho").css("width", a * b + "px");
	$(".floor1 .pho").animate({ left: -a }, 1000);
	$(".floor1_box button").click(function() {
		// $(this).index();
		// console.log($(this).index());
		$(".floor1 .pho").animate({ left: -a * $(this).index() }, 1000);
		$(this).css("backgroundColor", "blue")
		$(this).siblings().css("backgroundColor", "white")
	});
	var num = 0;
	setInterval(function() {
		num -= a;
		if (num <= -a * 8) {
			num = 0;
		}
		var n = num / a;
		$(".floor1 .pho").animate({ left: num });
		$(".floor1_box button").eq(-n).css("backgroundColor", "blue")
		$(".floor1_box button").eq(-n).siblings().css("backgroundColor", "white")
	}, 4000)
	//按钮
	$(".floor1").hover(function() {
		$(".floor1_box .bot").css("display", "block")
	}, function() {
		$(".floor1_box .bot").css("display", "none")
	})
	$(".floor1_box .bot .lef").click(function() {
		num += a;
		if (num > 0) {
			num = ($(".pho img").length - 3) * -a;
		}
		var n = num / a
		$(".floor1 .pho").animate({ left: num });
		$(".floor1_box button").eq(-n).css("backgroundColor", "blue")
		$(".floor1_box button").eq(-n).siblings().css("backgroundColor", "white")
	})
	$(".floor1_box .bot .rgt").click(function() {
		num -= a;
		if (num <= -a * 8) {
			num = 0;
		}
		var n = num / a
		$(".floor1 .pho").animate({ left: num });
		$(".floor1_box button").eq(-n).css("backgroundColor", "blue")
		$(".floor1_box button").eq(-n).siblings().css("backgroundColor", "white")
	})

	//floor1鼠标滑过显示 
	$(".floor1 .pos .item").hover(function() {
		// $(this).index();
		$(".floor1 .content").eq($(this).index()).css("display", "block");
		$(this).css("background", "#ececec")
	}, function() {
		$(".floor1 .content").eq($(this).index()).css("display", "none");
		$(this).css("background", "#e1dedc")
	});

	//floor2 鼠标滑过变颜色
	$(".floor2 .box ").hover(function() {
		$(this).find(".pho1").children().css("display", "none");
		$(this).find(".pho2").children().css("display", "inline-block")
		$(this).css("color", "#de2020");
	}, function() {
		$(this).find(".pho1").children().css("display", "inline-block");
		$(this).find(".pho2").children().css("display", "none")
		$(this).css("color", "#000");
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
	//position_lef定位
	$(window).scroll(function() {
		var s2 = $(window).scrollTop()
		// console.log(s2)
		//出现
		if (s2 >= 648) {
			$(".position_lef").css("display", "block");
		} else {
			$(".position_lef").css("display", "none");
		}
		$(".position_lef ul li").hover(function() {
			$(this).find("div a").css("display", "block")
			$(this).children("a").css("display", "none")
			$(this).find("div a").css("color", "#000")
		}, function() {
			$(this).find("div a").css("display", "none")
			$(this).children("a").css("display", "block")
		})

		if (s2 >= 749 && s2 < 1050) {
			$(".position_lef ul").find("div a").eq(1).css("display", "block");
			$(".position_lef ul").find("div a").eq(1).css("color", " #40AFFE");
			$(".position_lef ul").find(".pho a img").css("display", "none");
		} else {
			$(".position_lef ul").find("div a").eq(1).css("display", "none");
			$(".position_lef ul").find(".pho a img").css("display", "block");
			$(".position_lef ul").find(".pho a img").css("marginLeft", "10px");
		}
		if (s2 > 1050 && s2 < 1650) {
			$("#Fone").css("display", "none");
			$("#Fone_now").css("display", "block");
			$("#Fone_now").css("color", " #40AFFE");
		} else {
			$("#Fone").css("display", "block");
			$("#Fone_now").css("display", "none");
		}
		if (s2 > 1650 && s2 < 2280) {
			$("#Fsecond").css("display", "none");
			$("#Fsecond_now").css("display", "block");
			$("#Fsecond_now").css("color", " #40AFFE");
		} else {
			$("#Fsecond").css("display", "block");
			$("#Fsecond_now").css("display", "none");
		}
		if (s2 > 2280 && s2 < 2885) {
			$("#Fthree").css("display", "none");
			$("#Fthree_now").css("display", "block");
			$("#Fthree_now").css("color", " #40AFFE");
		} else {
			$("#Fthree").css("display", "block");
			$("#Fthree_now").css("display", "none");
		}
		if (s2 > 2885 && s2 < 3504) {
			$("#Ffour").css("display", "none");
			$("#Ffour_now").css("display", "block");
			$("#Ffour_now").css("color", " #40AFFE");
		} else {
			$("#Ffour").css("display", "block");
			$("#Ffour_now").css("display", "none");
		}

		if (s2 > 3504 && s2 < 4115) {
			$("#Ffive").css("display", "none");
			$("#Ffive_now").css("display", "block");
			$("#Ffive_now").css("color", " #40AFFE");
		} else {
			$("#Ffive").css("display", "block");
			$("#Ffive_now").css("display", "none");
		}

		if (s2 > 4115 && s2 < 4735) {
			$("#Fsix").css("display", "none");
			$("#Fsix_now").css("display", "block");
			$("#Fsix_now").css("color", " #40AFFE");
		} else {
			$("#Fsix").css("display", "block");
			$("#Fsix_now").css("display", "none");
		}

		if (s2 > 4735 && s2 < 5350) {
			$("#Fseven").css("display", "none");
			$("#Fseven_now").css("display", "block");
			$("#Fseven_now").css("color", " #40AFFE");
		} else {
			$("#Fseven").css("display", "block");
			$("#Fseven_now").css("display", "none");
		}
		if (s2 > 5350 && s2 < 5965) {
			$("#Feight").css("display", "none");
			$("#Feight_now").css("display", "block");
			$("#Feight_now").css("color", " #40AFFE");
		} else {
			$("#Feight").css("display", "block");
			$("#Feight_now").css("display", "none");
		}
		if (s2 > 5965 && s2 < 6575) {
			$("#Fnine").css("display", "none");
			$("#Fnine_now").css("display", "block");
			$("#Fnine_now").css("color", " #40AFFE");
		} else {
			$("#Fnine").css("display", "block");
			$("#Fnine_now").css("display", "none");
		}
	})
	//floor3 计时器
	var hour = $(".floor3 .pot .set .bor").eq(0).text();
	var minutes = $(".floor3 .pot .set .bor").eq(1).text();
	var seconds = $(".floor3 .pot .set .bor").eq(2).text();
	seconds = parseInt(seconds);
	minutes = parseInt(minutes);
	hour = parseInt(hour);
	var s = seconds;
	var m = minutes;
	var h = hour;

	function fn(a) {
		if (a < 10) {
			return a = "0" + a;
		} else {
			return a;
		}
	}
	var timer = setInterval(function() {
		s--;
		if (s < 0) {
			m -= 1;
			s = 59;
		}
		if (m < 0) {
			h -= 1;
			m = 59;
		}
		$(".floor3 .pot .set .bor").eq(2).text(fn(s));
		$(".floor3 .pot .set .bor").eq(1).text(fn(m));
		$(".floor3 .pot .set .bor").eq(0).text(fn(h));
	}, 1000)

	var number = s + m * 60 + h * 60 * 60
	setTimeout(function() { //在多少秒后停止
		clearTimeout(timer);

	}, 1000 * number)
	//点击照片跳转详情
	$(".banner .floor4").find(" .box img");


})
	$('.box').click(function() {
		location.assign("./detail.html")
	})