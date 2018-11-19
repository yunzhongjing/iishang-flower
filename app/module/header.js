define(["jquery","cookie"],function($){
	function Header(){}
	//获取cookie，操作登陆、注册
	Header.prototype.welcome = function(){
		var userphone =$.cookie("phone");
		//console.log(userphone)
		if (userphone) {
			var a =$("#before")[0];
			//console.log(a);
			a.className ="ac";
			var b =$("#after")[0];
			b.className = "";
			$("#after").append("<span>欢迎光临"+userphone+"</span>");
			$("#logout").click(function(e){
				$.cookie("phone","",{expires:-20,path:"/"});
				a.className = "";
				b.className = "ac";
				
			})
		}
	}
	return new Header();
})