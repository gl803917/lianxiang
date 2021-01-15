window.onload = function() {
	var oPh = document.getElementsByClassName("ph")[0]
	var oForm = document.getElementById("form");
	var oForm2 = document.getElementById("form2");
	var oPhone = document.getElementById("phone");
	var oPoe = document.getElementById("poe");

	//点击用户密码登录
	oPh.onclick = function() {
		oPhone.style.display = "block";
		oPoe.style.display = "none";
		oForm.style.display = "none";
		oForm2.style.display = "block";
		oBtn2.style.display = "block";
		oBtn.style.display = "none";
	}
	//点击手机验证码快捷登录
	oPhone.onclick = function() {
		oPhone.style.display = "none";
		oPoe.style.display = "block";
		oForm.style.display = "block";
		oForm2.style.display = "none";
		oBtn.style.display = "block";
		oBtn2.style.display = "none";

	}
	var oPhon = document.getElementsByClassName("phon");
	var oHide = document.getElementsByClassName("hide");
	var oHide2 = document.getElementsByClassName("hide2");

	//手机号码验证
	oPhon[0].onblur = function() {
		var tx = oPhon[0].value;
		if (/^1[3456789]\d{9}$/.test(tx)) {
			oHide[0].style.display = "none";
			oHide2[0].style.display = "block";
		} else {
			oHide[0].style.display = "block";
			oHide2[0].style.display = "none";
		}
	}
	//邮箱/号码验码
	oPhon[1].onblur = function() {
		var tx2 = oPhon[1].value;
		if (/^([a-zA-Z0-9]+[|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/.test(tx2) ||
			/^1[3456789]\d{9}$/.test(tx2)) {
			oHide[1].style.display = "none";
			oHide2[1].style.display = "block";
		} else {
			oHide[1].style.display = "block";
			oHide2[1].style.display = "none";
		}
	}
	//密码验证
	oPhon[2].onblur = function() {
		var pwd = oPhon[2].value;
		if (/^[0-9]\w{5,7}/.test(pwd)) {
			oHide[2].style.display = "none";
			oHide2[2].style.display = "block";
		} else {
			oHide[2].style.display = "block";
			oHide2[2].style.display = "none";
		}
	}
	//登录按钮 --用户密码登录
	var oBtn = document.getElementsByClassName("bto")[0];
	// console.log(oBtn);
	var a = true;
	oBtn.onclick = function() {
		var o = oHide[0].style.display;
		if (o != "block") {
			a = true;

		} else {
			a = false;
		}
		if (o == "") {
			oHide[0].style.display = "block";
			a = false;
		}

		if (a) {
			location.assign("./index.html")
		} else {
			a = false;
			alert("登录失败！")
		}
	}

	//手机号码快捷登录扭
	var oBtn2 = document.getElementsByClassName("bto2")[0];
	var b = true
	console.log()
	oBtn2.onclick = function() {
		for (var i = 1; i < oHide.length; i++) {
			var o = oHide[i].style.display;
			if (o != "block") {
				b = true;

			} else {
				b = false;
			}
			if (o == "") {
				oHide[i].style.display = "block";
				b = false;
			}
		}
		if (b) {
			location.assign("./index.html")
		} else {
			b = false;
			alert("登录失败！")
		}
	}
	//点击二维码
	$(".banner .form .pos_pho").click(function () {
		$(this).css("display","none");
		$(".banner form .pos_pho2").css("display","block");
	    $(".banner form .box").css("display","none")
		$(".banner form .box2").css("display","block")
	})
	$(".banner .form .pos_pho2").click(function () {
		$(this).css("display","none");
		$(".banner form .pos_pho").css("display","block");
	    $(".banner form .box2").css("display","none")
		$(".banner form .box").css("display","block")
	})
}

