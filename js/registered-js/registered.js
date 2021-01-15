window.onload = function() {
	var oPhon = document.getElementsByClassName("phon");
	var oHide = document.getElementsByClassName("hide");
	var oHide2 = document.getElementsByClassName("hide2");
	//手机号码验证
	oPhon[0].onblur = function() {
		var txt = oPhon[0].value;
		if (/^1[3456789]\d{9}$/.test(txt)) {
			oHide2[0].style.display = "block";
			oHide[0].style.display = "none";
		} else {
			oHide2[0].style.display = "none";
			oHide[0].style.display = "block";
		}
	}
	//密码验证
	oPhon[1].onblur = function() {
		var txt2 = oPhon[1].value;
		if (/^[0-9]\w{5,7}/.test(txt2)) {
			oHide2[1].style.display = "block";
			oHide[1].style.display = "none";
		} else {
			oHide2[1].style.display = "none";
			oHide[1].style.display = "block";
		}
	}
	//再次输入密码
	oPhon[2].onblur = function() {
		if (oPhon[2].value == "") {
			oHide2[2].style.display = "none";
			oHide[2].style.display = "block";
		}
		if (oPhon[2].value == oPhon[1].value) {
			oHide2[2].style.display = "none";
			oHide[2].style.display = "block";
		} else {
			oHide2[2].style.display = "block";
			oHide[2].style.display = "none";
		}
	}
	//立即注册
	var oRe = document.getElementsByClassName("resgiter")[0];
	var a = true;
	oRe.onclick = function() {
		for (var s = 0; s < oHide.length; s++) {
			var h = oHide[s].style.display;
			console.log(h)
			if(h != "block"){
				a = true;
			}else{
				a=false;
				break;
			}
			if(h==""){
				oHide[s].style.display="block";
				a=false;
				break;
			}
		}
		if(a){
			location.assign("./login.html")
		}else{
			alert("注册失败!")
		}
	}












}
