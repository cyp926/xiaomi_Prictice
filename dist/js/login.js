"use strict";var oSubmit=document.querySelector("form input:last-of-type"),oInput1=document.querySelector("form input:first-of-type"),oInput2=document.querySelector("form input:nth-of-type(2)"),oForm=document.querySelector("form");oSubmit.onclick=function(){oForm.addEventListener("submit",function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!0});var e=oInput1.value,o=oInput2.value;$.ajax({url:"../server/xm_login.php",type:"post",data:{userName:e,userPwd:o},dataType:"json",success:function(e){if(1===e.res){setCookie("login",1,6048e5);var o=decodeURI(window.location.search).substr(decodeURI(window.location.search).indexOf("=")+1);window.alert("登录成功,点击确定,跳转首页面"),window.location.href=o||"./index.html"}else window.alert("登录失败,请您检查账号密码,继续玩命登录")}})};