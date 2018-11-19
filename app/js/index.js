require(["config"], function(){
	require(["jquery", "tools", "header", "footer","lunbo","cookie"], function($,tools,header,lunbo,cookie){

		//promise
		//header
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
		}).then(function(){
				header.welcome();
			
		})
		//banner
		new Promise(function(resolve, reject){
			$("#banner").load("/html/component/banner.html", function(){
				resolve();
			})
		}).then(function(){
			setTimeout(function(){
				$("#banner").lunbo(
					{goPrev:"goPrev",
					goNext: "goNext"}
				);
			},100)
			/*$("#banner").lunbo(
			{goPrev:"goPrev",
			goNext: "goNext"}
			);*/
		})
		//main
		new Promise(function(resolve, reject){
			$("main").load	("/html/component/main.html", function(){
				resolve();
			});
		})
		//footer
		new Promise(function(resolve, reject){
			$("footer").load("/html/component/footer.html", function(){
				resolve();
			});
		})
	})
})
