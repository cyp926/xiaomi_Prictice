 // banner轮播
 const oUlLis = document.querySelectorAll('.banner_cont ul li');
 const oBigBanner = document.querySelector('.banner_cont');
 const oUl = document.querySelector('.banner_cont ul');
 const oOl = document.querySelector('.banner_cont ol');
 const oBtnLeft = document.querySelector('.banner_cont span:first-of-type');
 const oBtnRight = document.querySelector('.banner_cont span:last-of-type')
 let timer;
 let index = 0;
 creatOlLis();

 setMouseP();
 setOnLi();

 function creatOlLis() {
     let str = '';
     oUlLis.forEach((v, k) => {
         if (k == 0) {
             v.style.opacity = 1;
             str += `<li class='activeOl' index='${k+1}'></li>`;
         } else {
             v.style.opacity = 0;
             str += `<li index='${k+1}'></li>`;
         }

     })
     oOl.innerHTML = str;
 }


 function setLoopEnd(type) {
     oUlLis[index].style.opacity = 0;
     if (type == 'right') {
         index++;
     } else if (type == 'left') {
         index--;
     }

     if (index === oUlLis.length) {
         index = 0;
         oUlLis[index].style.opacity = 1;
     } else if (index == -1) {
         index = oUlLis.length - 1;
     }
     oUlLis[index].style.opacity = 1;
     setOlLiNum();
 }

 function setLoopAuto() {
     timer = setInterval(function() {
         setLoopEnd('right');
     }, 2000)
 }

 function setMouseP() {
     oBigBanner.onmouseenter = function() {

         clearInterval(timer)
     }
     oBigBanner.onmouseleave = function() {
         setLoopAuto();
     }
 }

 function setOlLiNum() {
     let oOlLis = document.querySelectorAll('.banner_cont ol li');
     oOlLis.forEach((v, k) => {
         v.className = '';
         if (k == index) {
             v.className = 'activeOl';
         }
     })
 }

 function setOnLi() {
     let oOl = document.querySelector('.banner_cont ol');
     oOl.addEventListener('click', function(e) {
         e = e || window.event;
         if (e.target.tagName == 'LI') {
             oUlLis[index].style.opacity = 0;
             index = e.target.getAttribute('index') - 0 - 1;
             oUlLis[index].style.opacity = 1;
             console.log(oUlLis[index].style.opacity, index)
             setOlLiNum();
         }
     });
 }
 oBtnLeft.addEventListener('click', function(e) {
     setLoopEnd('left');
 })
 oBtnRight.addEventListener('click', function(e) {
     setLoopEnd('right');
 })

 function setLeaveHtm() {
     document.addEventListener('visibilitychange', function() {
         if (document.visibilityState === 'visible') {
             setLoopAuto();
         } else if (document.visibilityState === 'hidden') {
             clearInterval(timer);
         }
     })
 }