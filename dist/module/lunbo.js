"use strict";define(["jquery"],function(u){u.fn.extend({lunbo:function(n){var i=u("#"+n.goPrev),e=u("#"+n.goNext),t=this.find("ul"),l=this.find("ul li"),s=this.find("ol"),c=0,a=l.length,o=!1,f=null,d=l.eq(0).width();l.each(function(){u("<li>").addClass(0==u(this).index()?"ac":"").appendTo(s)}),l.eq(0).clone(!0).appendTo(t),t.css("width",d*(a+1)),s.on("click","li",function(){o||(o=!0,u(this).addClass("ac").siblings().removeClass("ac"),c=u(this).index(),t.animate({left:-c*d},"slow",function(){o=!1}))}),i.click(function(){o||(o=!0,--c<0&&(t.css("left",-a*d),c=a-1,console.log(a,c)),t.animate({left:-c*d},"slow",function(){o=!1}),s.children().eq(c).addClass("ac").siblings().removeClass("ac"))}),e.click(function(){o||(o=!0,++c>=a?(t.animate({left:-a*d},"slow",function(){t.css("left",0),o=!1}),c=0):t.animate({left:-c*d},"slow",function(){o=!1}),s.children().eq(c).addClass("ac").siblings().removeClass("ac"))}),this.hover(function(){clearInterval(f)},function n(){return f=setInterval(function(){u("#goNext").trigger("click")},3e3),n}())}})});