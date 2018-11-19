require(["config"], function(){
	require(["jquery","header","migrate","cookie"], function($,header,migrate,cookie){
		//异步加载title.html
		$(".title").load("/html/component/title.html", function(){});
		//异步加载form.html
		$("#form2").load("/html/component/form2.html", function(){
			//处理提交表单
			$("#form2-login").click(function(e){
				//构造请求携带的参数
				var data = {
					rightPhone: $("#username").val(),
					rightKey: $("#password").val()
				};
				console.log(data)
				$.ajax({
					method:"post",
					data: data,
					dataType:"json",
					url:"http://localhost/projectPractice/iishangPHP/login.php",
					success: function(res){
						console.log(res);
						//console.log(data)
						if(res.code === 1){
							alert("登陆成功")
							console.log(data.rightPhone) //使用cookie记录登录状态
							$.cookie("phone",data.rightPhone,{path:"/"})
							location.href = "http://localhost:1024/index.html";
						}else{
							alert("用户名或者密码错误");
						}
					}
				})
				e.preventDefault();
			})
		});
	})
})