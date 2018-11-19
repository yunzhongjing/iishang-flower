require(["config"], function(){
	require(["jquery","template","tools", "header", "footer","cookie"], function($,template,tools,header,cookie){

		//promise
		//header
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			})
			//footer
			$("footer").load("/html/component/footer.html", function(){});
		}).then(function(){
				$.ajax({
					type:"get",
					url:"http://rap2api.taobao.org/app/mock/115095/iishang",
					success:function(res){
						//console.log(res)
						var html = template("pro-template",{product:res.product});
						//console.log(html);
						$("#prolist").html(html);
					}
				});
		}).then(function(){
				header.welcome();
		})
	})
})
