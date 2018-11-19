require(["config"], function(){
	require(["jquery","tools","lunbo","template","cookie"], function($,tools,lunbo,template,cookie){
		//promise
		new Promise(function(resolve, reject){
			//异步加载detail-title.html
			$(".detail-title").load("/html/component/detail-title.html", function(){
				resolve();
			});
			//异步加载轮播图
			$(".lunbo").load("/html/component/detail-lunbo.html", function(){
				$(".lunbo").lunbo(
					{goPrev:"goPrev",
					goNext: "goNext"}
				);
			})
			//异步加载detail-box。html
			$(".detail-box").load("/html/component/detail-box.html", function(){
			});
			//异步加载detail-form.html
			$(".detail-form").load("/html/component/detail-form.html", function(){
			});
			//异步加载detail-pic.html
			$(".detail-pic").load("/html/component/detail-pic.html", function(){
			});
			//异步加载detail-footer.html
			$(".detail-footer").load("/html/component/detail-footer.html", function(){
			});
			//从url上取出id参数，然后携带这个参数去请求当前数据
			var str = location.search.slice(1);
			//console.log(str);
			var arr =str.split("=");
			//console.log(arr);
			var obj = {};
			//console.log(obj);
			obj[arr[0]] =arr[1];
			$.ajax({
				url:"http://rap2api.taobao.org/app/mock/115095/iishang",
				data:obj,
				method:"GET",
				dataType:"json",
				success:function(res){
					var proStr=res.product[0];
					//console.log(res.product[0]);
					var str = template("detil-template",{product: res.product[0]});
					$("#add-box").html(str);
				}
			})
			
			
		}).then(function(){
			//数量调整
			setTimeout(function(){
				var deBtn = document.getElementById("detail-form-nuchnage-decrease"),
					inBtn = document.getElementById("detail-form-nuchnage-add"),
					cNum = document.getElementById("detail-form-nuchange-number");
					console.log(deBtn,inBtn,cNum)
			//console.log(addcart)
				var addcart = document.getElementById("addcart");
				var str2 = location.search.slice(4);
				//console.log(str2)
			//如果存在cookie直接取出cookie，如果没有就申明一个数组接受product的cookie
				var obj2 = $.cookie("production");
				console.log(obj2)
				if (obj2) {
					var json= JSON.parse(obj2);
					console.log(json)
					var procookie =json;
					//procookie.push(json);
				} else{
					var procookie =[];
				}
				console.log(procookie)
			//绑定事件
				deBtn.onclick=function(){
					cNum.innerHTML= cNum.innerHTML -1;
					if (cNum.innerHTML < 0) {
						cNum.innerHTML = 0;
					}
				}
				inBtn.onclick = function(){
					cNum.innerHTML= parseInt(cNum.innerHTML) +1;
				}
				
				addcart.onclick=function(){	
					//由于名字和价格是网上获取，直接获取会因为加载延迟原因取不到，所以点击添加时获取
					var cname = document.getElementById("name").innerHTML;
					var cprice =document.getElementById("price").innerHTML;
					var cnum = cNum.innerHTML;
					//console.log(cNum.innerHTML)
					console.log(str2,cname,cprice,cnum);
					var obj3 ={
						no:str2,
						name:cname,
						price:cprice,
						num:cnum
					}
					console.log(obj3);
					//将独享存入数组中；
					procookie.push(obj3);
					console.log(procookie);
					
					//将数据存入cookie
					$.cookie.json = true;
					$.cookie("production",procookie,{path:"/"});
					alert("添加成功");
				}
					
			},300)
		})
			
	})
})