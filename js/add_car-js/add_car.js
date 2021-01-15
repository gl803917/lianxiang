$(function() {
	//轮播图
	var w = $(".floor7 .down ul li ").css("width");
	var w2 = w.replace("px", "");
	w2 = parseInt(w2) + 10;; //每个img的宽度
	var num = $(".floor7 .down ").find("ul>li img").length; //获取img的个数	
	$(".floor7 .down ul").css("width", w2 * num + "px"); //总宽度

	//左按钮
	var n = 0
	$("#lbtn").click(function() {
		n += w2 * 4;
		if (n > 0) {
			n = (num - 4) * -w2;
		}
		$(".floor7 .down ul").animate({ left: n }, 100);
		clearInterval(times);
		time();
	})
	//右按钮
	$("#rbtn").click(function() {
		n -= w2 * 4;
		if (n < (num - 4) * -w2) {
			n = 0;
		}
		$(".floor7 .down ul").animate({ left: n }, 100);
		clearInterval(times);
		time();
	})
	//定时器
	var times;
	function time() {
		times = setInterval(function() {
			n -= w2;
			if (n < -w2 * 4) {
				n = 0;
			}
			var b = n / w2;
			$(".floor7 .down ul").css("left",n);
		}, 4000)
	}
	time();
	//提取数据 cookie
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
	//存cookie --好存好取
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	var cart = getCookie("cart");
	if (cart) { //如果cart存在
		//JSON转换成数组 
		cart = JSON.parse(cart);
	} else {
		cart = [];
	}
	//渲染数据
	//判断数组要用forEach循环
	cart.forEach(function(item, index) {                 //传id
		var $item = $(            
			`	<div class="floor4 container" data-id="${item.id}">
						<div class="box">
							<ul class="clear">
								<li>
									<input class="checkbox" type="checkbox" name="hobby" />
								</li>
								<li>
									<img src="${item.photo}">
								</li>
								<li>
									${item.name}
								</li>
								<li class="price"> ${item.pre.replace("￥","")}</li>
								<li class="txt">
									<button class="lef_bt"  type="button">-</button><input class="bt_text" type="text" value="${item.num}" /><button class="rgt_bt" type="button">+</button>
								</li>
								<li class="red">${item.pre.slice(1)*item.num}</li>
								<li class="del">
									<div class="remove_del">删除</div>
									<div>移入收藏夹</div>
								</li>
							</ul>
						</div>
					</div>`)
		$("#cart_content").append($item);
	})
	//全选  复选框
	$(".chkAll").click(function() {
		//获取当前状态 选中true  不选中false
		var c = $(this).prop("checked");
		$("input[name=hobby]").prop("checked", c);
		$("input[name=children]").prop("checked", c);
		fn();
	});
	//计算总价格封装一个方法
	function fn() {
		//checkbox的总数
		var total = $("input[name=hobby]").length;
		//获取价格
		var price = 0; //定义一个变量计算价格
		for (var i = 0; i < total; i++) {
			if ($("input[name=hobby]").eq(i).prop("checked")) {
				var m0 = $(".floor4").eq(i).find(".red").text();
				m0 = parseFloat(m0)
				price += m0;
			} else {
				price += 0;
			}
		}
		$(".total_price").text(price);
	}
	//反向 全选复选框按钮
	$("input[name=hobby]").click(function() {
		//checkbox的总数
		var total = $("input[name=hobby]").length;
		//选中的checkbox的个数
		var checked = $("input[name=hobby]:checked").length;
		if (total == checked) {
			$(".chkAll").prop("checked", true);
		} else {
			$(".chkAll").prop("checked", false);
		}
		fn();
	})
	//购物车列表 加购数量
	var oBtn = $(".floor4 .box .txt .lef_bt");
	//左按钮
	oBtn.click(function() {
		var $txt = $(this).siblings(".bt_text").val();
		$txt = parseInt($txt);
		if ($txt < 2) {
			return;
		}
		var pr = $(this).parents(".txt").siblings(".price").text();
		pr = parseInt(pr);
		var num = 0;
		num = pr * ($txt - 1);
		$(this).siblings(".bt_text").val($txt - 1);
		$(this).parents(".txt").siblings(".red").text(num)
		fn()
	})
	//右按钮
	var oBtn2 = $(".floor4 .box .txt .rgt_bt");
	oBtn2.click(function() {
		var $txt = $(this).siblings(".bt_text").val();
		$txt = parseInt($txt);
		if ($txt >= 5) {
			return;
		}
		var pr = $(this).parents(".txt").siblings(".price").text();
		pr = parseInt(pr);
		var num = 0;
		num = pr * ($txt + 1);
		$(this).siblings(".bt_text").val($txt + 1);
		$(this).parents(".txt").siblings(".red").text(num)
		fn()
	})
	//删除
	$("#cart_content").on("click",".remove_del",function () {
		var cart = getCookie("cart");
		cart = JSON.parse(cart);
		var number=$(this).parents(".floor4").data("id");
		 cart.forEach(function (item,index) {
		 if(number==item.id){
				cart.splice(index,1)
			}
		 })
		//转换成JSON
		cart = JSON.stringify(cart);
		//存储至cookie
		setCookie("cart", cart);
		$(this).parents(".floor4 .box").remove();
	})
	//删除选中商品
	$(".floor6 .all").on("click",function () {
		$(".floor4 .box").each(function () {
			if($(this).find('input[name="hobby"]').prop("checked")){
				$(this).remove();
			}
		})
	})
	//点击跳转收获地址页面
	$("#bt").click(function () {
		location.assign("./order.html")
	})
	
});
