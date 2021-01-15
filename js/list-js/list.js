window.onload = function() {
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
}
$(function() {
			$("#item0").click(function() {
				$(".floor2 .box2").css("display", "block");
				$(".floor2 .box").css("display", "none")
				$(".floor2 .po").hover(function() {
					$(".bod").css("display", "inline-block");
					$("#one i").css("display", "none");
					$("#two i").css("display", "inline-block");
				}, function() {
					$(".bod").css("display", "none");
					$("#one i").css("display", "inline-block");
					$("#two i").css("display", "none");
				})
			})
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
			//价格排序
			var a = true;
			$("#price").click(function() {
				if (a) { //从小到大
					$(".floor4 .pos_pho a").css("color", "#FD482C")
					$(".oup").css("display", "none");
					$(".dwn").css("display", "block");
					var s = $(".floor5 ul li");
					let arr = s.toArray();
					arr.sort(function(itemA, itemB) {
						var priceA = $(itemA).find(".down").text().replace("￥", "");
						var priceB = $(itemB).find(".down").text().replace("￥", "");
						priceA = parseInt(priceA);
						priceB = parseInt(priceB);
						return priceA - priceB;
					})
					$(".floor5 ul").append(arr)
					a = false;
				} else { //从大到小
					$(".floor4 .pos_pho a").css("color", "#FD482C")
					$(".oup").css("display", "block");
					$(".dwn").css("display", "none");
					var s = $(".floor5 ul li");
					let arr = s.toArray();
					arr.sort(function(itemA, itemB) {
						var priceA = $(itemA).find(".down").text().replace("￥", "");
						var priceB = $(itemB).find(".down").text().replace("￥", "");
						priceA = parseInt(priceA);
						priceB = parseInt(priceB);
						return priceB - priceA; 
					})
					$(".floor5 ul").append(arr)
					a = true;
				}
			})

			//存cookie --好存好取
			function setCookie(cname, cvalue, exdays) {
				var d = new Date();
				d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toGMTString();
				document.cookie = cname + "=" + cvalue + "; " + expires;
			}

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
			//加入购物车 存储数据
			$(".floor5 ul>li .top").click(function() {
				//取出自定义属性(data-id 区分同一个名称商品)
				var id = $(this).parents("li").data("id") //id的data属性
				//获取商品对象goods
				var name = $(this).siblings(".word").find("span").text().trim();
				var photo = $(this).find("img").attr("src"); //attr src 获取图片地址
				var pre = $(this).siblings(".down").text();
				var goods = {
					id: id,
					name: name,
					photo: photo,
					pre: pre,
					num: 1, //每次添加是1
				}
				//存cookie 对象不能直接存cookie
				//转换  
				//将对象转换为JSON  JSON.stringify() 
				//通过setCookie方法存进去
				// goods = JSON.stringify(goods); //有问题会覆盖
				// setCookie("goods",goods); //查看 --检查 --Application --cookie 

				//先提取cookie中的购物车数组
				//cart是一个数组
				var cart = getCookie("cart"); //不确定里面有几个商品
				if (cart) { //如果cart存在
					//JSON转换成数组 
					cart = JSON.parse(cart);
				} else {
					cart = [];
				}
				//在cart查找此商品，如果有，数量+1,如果无，push进数组
				var i = cart.findIndex(function(item, index) {
					return item.id == id;
				}) //找符合条件的元素索引 ，如果没有返回-1
				console.log(i)
				if (i >= 0) { //如果有，数量+1
					cart[i].num += 1;
				} else {
					//如果无，push进数组 添加goods至购物车
					cart.push(goods);
				}
				//转换成JSON
				cart = JSON.stringify(cart);
				//存储至cookie
				setCookie("cart", cart);
				alert("添加成功！")
			})
})