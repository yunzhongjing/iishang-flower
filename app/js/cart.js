require(["config"], function(){
	require(["jquery","template","tools", "header", "footer","cookie"], function($,template,tools,header,cookie){

		//promise
		//header
		new Promise(function(resolve, reject){
			//购物车
			$("#cart-box").load("/html/component/cart-box.html", function(){
				resolve();
			});
		}).then(function(){
			
			var cartproducts = $.cookie("production");
			//console.log(cartproducts);
			var json = JSON.parse(cartproducts);
			//console.log(json);
			var html = template("box-template",{json})
			//console.log(html);
			$("#add").html(html);
		}).then(function(){
			//console.log(111)
			/*var fniBtn = document.getElementById("fni-btn");
			var editBtn = document.getElementById("edit-btn");
			tools.on(editBtn,"click",function(e){
				e = e||event;
				var target = e.target||e.srcElement;
				editBtn.className="ac";
				fniBtn.className="";
				var boAll = target.parentNode.parentNode;
				//var boList = d.children().eq(1);
				//console.log(boAll)
				var divBox = boAll.children[1].children;
				//console.log(divBox);
				for(let i =0 ; i<divBox.length;i++){
					var section1 =divBox[i].children[2];//console.log(section1);
//					var a = $("section").eq(0)
//					console.log(a)
					var section2 =divBox[i].children[3];//console.log(section2);
					section1.className = "ac";
					section2.className = "";
					//console.log(section2.innerHTML)
					//获取btn
					var deBtn = section2.children[0].children[0];
					var pNum = section2.children[1];
					var inBtn = section2.children[2].children[0];
					console.log(deBtn);
					tools.on(deBtn,"click",function(){
						console.log(pNum[i]);
					})
					
					$(deBtn).on("click",function){
						console.log($(this)) 
					}
					
				}
			})*/
			/*var $a=$(.ri-dec-btn);
			console.log($a)*/
			$("#edit-btn").on("click",function(){
				$("#fni-btn").removeClass("ac");
				$(this).addClass("ac");
				//console.log()
				$("section:even").removeClass("bd").addClass("ac");
				$("section:odd").removeClass("ac");
				
			})
			$(".ri-dec-btn").on("click",function(){
				if($(this).parent().siblings()[0].innerHTML<=0){
					$(this).parent().siblings()[0].innerHTML
				}else{
					$(this).parent().siblings()[0].innerHTML=$(this).parent().siblings()[0].innerHTML-1;
				}	
			})
			$(".ri-inc-btn").on("click",function(){
				$(this).parent().siblings()[1].innerHTML=parseInt($(this).parent().siblings()[1].innerHTML)+1;
			})
			$(".ri-det-btn").on("click",function(){
				$(this).parent().parent().parent().remove();//console.log(JSON.parse($.cookie("production")));
				var arr =JSON.parse($.cookie("production"))
				//console.log($(this))
				for (var i=0;i<arr.length;i++) {
					console.log($(arr)[i].no)
				}
				//console.log($(this).index())
				
				
				/*$.cookie.json =true;
				$.cookie("production",procookie,{path:"/"});*/
				/*console.log(22)
				console.log($.cookie("production"))*/
			})
			$("#fni-btn").on("click",function(){
				$(this).addClass("ac");
				$("#edit-btn").removeClass("ac");
				$("section:odd").removeClass("bd").addClass("ac");
				$("section:even").removeClass("ac");
			})
		})
	})
})
