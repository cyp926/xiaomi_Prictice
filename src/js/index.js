// 楼梯效果
function setStairEffect() {
    $(window).scroll(() => {
        const windowT = $(window).scrollTop();
        if (windowT > $(".news1_con").offset().top) {
            $(".lef_pos ul li").eq(0).addClass("buildBg")
                .siblings().removeClass("buildBg");
        } else {
            $(".lef_pos ul li").eq(0).removeClass("buildBg");
        }

        $(".news2_con").each((key, items) => {
            if (windowT > $(items).offset().top) {
                $(".lef_pos ul li").eq(key + 1).addClass("buildBg")
                    .siblings().removeClass("buildBg");
            }

        })
        if (windowT > 600) {
            $(".lef_pos div").addClass("buildBg")
        } else {
            $(".lef_pos div").removeClass("buildBg")
        }
    });
    $(".lef_pos ul li").each((key, items) => {
        $(items).click(() => {
            $(items).eq(key).addClass("buildBg")
                .siblings().removeClass("buildBg");
            if (key === 0) {
                $("html").animate({
                    scrollTop: $(".news1_con").offset().top + 50
                }, 1000)
            } else {
                $("html").animate({
                    scrollTop: $(".news2_con").eq(key - 1).offset().top + 50
                }, 1000)
            }
        })
    })
    $(".lef_pos div").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 1000)
    })
}
// 秒杀
function setSeckill() {
    const timing = document.querySelector(".case_ti span>i");
    const oHour = document.querySelector(".case_ti li:nth-of-type(1) b");
    const oMinute = document.querySelector(".case_ti li:nth-of-type(2) b")
    const oSecond = document.querySelector(".case_ti li:nth-of-type(3) b")
    timing.innerHTML = "23:00";
    const tim = new Date();
    let dd = tim.getDate();


    setInterval(() => {
        setTimeDown(`2020-08-${dd} ${timing.innerHTML}:00`)
    }, 1000);

    function setTimeDown(endTime) {
        const time = new Date(endTime);
        var nowTime = new Date()
        var nowTimeStamp = parseInt(nowTime.getTime() / 1000);
        let timeStamp = parseInt(time.getTime() / 1000);
        var times = timeStamp - nowTimeStamp;
        if (times <= 0) {
            oHour.innerHTML = '00';
            oMinute.innerHTML = ' 00';
            oSecond.innerHTML = '00';
            return;
        }
        let hour = parseInt(times / (60 * 60));
        let minute = parseInt((times - hour * 60 * 60) / 60);
        let second = parseInt(((times - hour * 60 * 60) - minute * 60));
        if (hour < 10) {
            hour = `0${hour}`;
        }
        if (minute < 10) {
            minute = `0${minute}`;
        }
        if (second < 10) {
            second = `0${second}`;
        }
        oHour.innerHTML = hour;
        oMinute.innerHTML = minute;
        oSecond.innerHTML = second;
    }
}
//  <!-- 搜索制定 -->
function setFindSom() {
    const findIput = document.querySelector(".findSome");  
    const  oUls  =  document.querySelector('.findeSomeList');
    findIput.addEventListener("input", function() {
        let key = findIput.value;
        let time = new Date();
        let times = parseInt(time.getTime()  /  1000);;
        let s = document.createElement("script");
        s.setAttribute("name", "json");
        document.body.appendChild(s);
        let  str  = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=32292,1423,32361,31253,32046,32160,32116,26350,31639,22159&wd=${key}&req=2&csor=2&cb=setSearch&_=${times}`;
        s.setAttribute("src", str);
        console.log(str);
        document.body.removeChild(s);

    }); 
    window.setSearch  = function(res)  {                  
        if  (res.g)  {       
            oUls.style.display  =  'block';           
            let  strs  =  '';                
            res.g.forEach((v)  =>  {                    
                strs  +=  `<li> <a href="javascript:;">${v.q}</a></li>`;                
            });                
            oUls.innerHTML  =  strs;            
        } 
        else  {                
            oUls.style.display  =  'none';            
        }        
    }        
    findIput.addEventListener("change", function() {
        oUls.addEventListener("click", function(e) {
            e = e || window.event;
            oUls.style.display  =  'block';

            if (e.target.tagName == "A") {
                let str = e.target.innerText;
                findIput.value = str;
            }
            oUls.style.display  =  'none'; 
        })
        document.body.addEventListener("click", function() {
            oUls.style.display  =  'none'; 
        })
    })
}