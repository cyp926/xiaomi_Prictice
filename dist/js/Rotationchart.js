"use strict";var timer,oUlLis=document.querySelectorAll(".banner_cont ul li"),oBigBanner=document.querySelector(".banner_cont"),oUl=document.querySelector(".banner_cont ul"),oOl=document.querySelector(".banner_cont ol"),oBtnLeft=document.querySelector(".banner_cont span:first-of-type"),oBtnRight=document.querySelector(".banner_cont span:last-of-type"),index=0;function creatOlLis(){var n="";oUlLis.forEach(function(e,t){0==t?(e.style.opacity=1,n+="<li class='activeOl' index='".concat(t+1,"'></li>")):(e.style.opacity=0,n+="<li index='".concat(t+1,"'></li>"))}),oOl.innerHTML=n}function setLoopEnd(e){oUlLis[index].style.opacity=0,"right"==e?index++:"left"==e&&index--,index===oUlLis.length?oUlLis[index=0].style.opacity=1:-1==index&&(index=oUlLis.length-1),oUlLis[index].style.opacity=1,setOlLiNum()}function setLoopAuto(){timer=setInterval(function(){setLoopEnd("right")},2e3)}function setMouseP(){oBigBanner.onmouseenter=function(){clearInterval(timer)},oBigBanner.onmouseleave=function(){setLoopAuto()}}function setOlLiNum(){document.querySelectorAll(".banner_cont ol li").forEach(function(e,t){e.className="",t==index&&(e.className="activeOl")})}function setOnLi(){document.querySelector(".banner_cont ol").addEventListener("click",function(e){"LI"==(e=e||window.event).target.tagName&&(oUlLis[index].style.opacity=0,index=e.target.getAttribute("index")-0-1,oUlLis[index].style.opacity=1,console.log(oUlLis[index].style.opacity,index),setOlLiNum())})}function setLeaveHtm(){document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?setLoopAuto():"hidden"===document.visibilityState&&clearInterval(timer)})}creatOlLis(),setMouseP(),setOnLi(),oBtnLeft.addEventListener("click",function(e){setLoopEnd("left")}),oBtnRight.addEventListener("click",function(e){setLoopEnd("right")});