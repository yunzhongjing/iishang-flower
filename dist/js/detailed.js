"use strict";require(["config"],function(){require(["jquery","tools","lunbo","template","cookie"],function(r,o,e,l,n){new Promise(function(o,e){r(".detail-title").load("/html/component/detail-title.html",function(){o()}),r(".lunbo").load("/html/component/detail-lunbo.html",function(){r(".lunbo").lunbo({goPrev:"goPrev",goNext:"goNext"})}),r(".detail-box").load("/html/component/detail-box.html",function(){}),r(".detail-form").load("/html/component/detail-form.html",function(){}),r(".detail-pic").load("/html/component/detail-pic.html",function(){}),r(".detail-footer").load("/html/component/detail-footer.html",function(){});var n=location.search.slice(1).split("="),t={};t[n[0]]=n[1],r.ajax({url:"http://rap2api.taobao.org/app/mock/115095/iishang",data:t,method:"GET",dataType:"json",success:function(o){o.product[0];var e=l("detil-template",{product:o.product[0]});r("#add-box").html(e)}})}).then(function(){setTimeout(function(){var o=document.getElementById("detail-form-nuchnage-decrease"),e=document.getElementById("detail-form-nuchnage-add"),l=document.getElementById("detail-form-nuchange-number");console.log(o,e,l);var n=document.getElementById("addcart"),c=location.search.slice(4),t=r.cookie("production");if(console.log(t),t){var i=JSON.parse(t);console.log(i);var a=i}else a=[];console.log(a),o.onclick=function(){l.innerHTML=l.innerHTML-1,l.innerHTML<0&&(l.innerHTML=0)},e.onclick=function(){l.innerHTML=parseInt(l.innerHTML)+1},n.onclick=function(){var o=document.getElementById("name").innerHTML,e=document.getElementById("price").innerHTML,n=l.innerHTML;console.log(c,o,e,n);var t={no:c,name:o,price:e,num:n};console.log(t),a.push(t),console.log(a),r.cookie.json=!0,r.cookie("production",a,{path:"/"}),alert("添加成功")}},300)})})});