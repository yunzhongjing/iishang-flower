"use strict";define(["jquery","cookie"],function(c){function e(){}return e.prototype.welcome=function(){var e=c.cookie("phone");if(e){var a=c("#before")[0];a.className="ac";var o=c("#after")[0];o.className="",c("#after").append("<span>欢迎光临"+e+"</span>"),c("#logout").click(function(e){c.cookie("phone","",{expires:-20,path:"/"}),a.className="",o.className="ac"})}},new e});