require(["config"], function(){
	require(["jquery", "tools","changeImg"], function($,tools,changeImage){
		new Promise(function(resolve,reject){
			//异步加载title.html
			$(".title").load("/html/component/title.html", function(){
				resolve();
			});
			//异步加载form.html
			$("#form1").load("/html/component/form.html", function(){
				//获取验证码
				var isPic =$("#changeImg").changeImg("str")
				console.log(isPic)
				//进行判定
				$("#register-btn").click(function(e){
					//获取input值
					var rePhone = $("#foPhone").val();
					var rePic = $("#foPic").val();
					var reKey = $("#foKey").val();
					console.log(rePhone,rePic,reKey);
					var isPhone =/^[1][3,4,5,7,8][0-9]{9}$/;
					var isKey = /^[\w_-]{6,16}$/;
					
					if(!isPhone.test(rePhone)){
						alert("手机号错误");
					}else if(isPic!=rePic){
						alert("验证码错误");
					}else if (!isKey.test(reKey)) {
						alert("密码格式不对");
					}else{
						alert("注册成功")
						//将信息存为json
						var obj={
							rightPhone: rePhone,
							rightKey: reKey
						}
						console.log(obj);
						//var user = JSON.stringify(obj);
						//console.log(user)
						//ajax异步请求，将数据发送至后台
						$.ajax({
							method:"post",
							data: obj,
							dataType: "json",
							url:"http://localhost/projectPractice/iishangPHP/insert.php",
							success:function(res){
								console.log(res);
								if (res.key == 1) {
									location.href="http://localhost:1024/html/login.html"
								}else{
									alert("请求服务器失败");
								}
							}
						})
						e.preventDefault();
					}		
				})
			})
		})
	})
})