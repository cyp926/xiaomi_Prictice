let coo = getCookie();
let topNavLogin = document.querySelector('.top_nav_login')
const dataList = JSON.parse(localStorage.getItem('cart'));
let count = 0;
if (dataList) {
    count = dataList.length;
}
let str = "";
if (coo.login != undefined) {
    str = `<li class="top_nav_log ">2438300632<span class="iconfont icon-jiantou9 "></span>
                    <ul>
                        <li>
                            <a href=" ">个人中心</a>
                        </li>
                        <li >
                            <a class="login_quest" href="javascript:; ">退出登录</a>
                        </li>
                    </ul>
                </li>
                <li><a >我的订单</a></li>
                    <li><a>消息通知</a></li>
                    <li class="top_nav_shopping"><a href="./cart.html "><span class="iconfont icon-gouwuchekong "></span> 购物车(<span>${count}</span>)</a></li>
                    `;
} else {

    str = `<li><a href="./res.html ">注册</a></li>
                <li><a class="goLogin" href="javascript:; ">登录</a></li>
                <li class="top_nav_shopping"><a href=" "><span class="iconfont icon-gouwuchekong "></span> 购物车(<span>0</span>)</a></li>`;
}
topNavLogin.innerHTML = str;
topNavLogin.onclick = function(e) {
    e = e || window.event;

    if (e.target.className == 'login_quest') {
        setCookie('login', 1, -1);
        window.alert('退出登录成功');
        window.history.go(0)
    }
    if (e.target.className == "goLogin") {
        let urls = `./login.html?url=${window.location.href}`;
        window.location.href = urls;
    }
}