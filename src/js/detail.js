const valObj = getUrlVal();
let res = {}
$.ajax({
    url: "../server/xm_detail.php",
    type: 'post',
    data: {
        goods_id: valObj.goods_id
    },
    dataType: 'json',
    success: (result) => {
        res = result;
        $(".navsky_con span").html(res.cat_id);
        let str = `<div class="detial_img"><img src="${res.goods_big_logo}" alt=""></div>
            <ul class="detail_ul">
                <li>
                    <h2><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4226c735bb4032afeb41c0e0f469fb5.jpg" alt="">${res.cat_id}</h2>
                    <p>${res.goods_name}</p>
                    <h3>小米自营</h3>
                </li>
                <li>
                    <div>
                        <div>
                            <p>
                                <span>秒杀价 </span><span>￥${(res.goods_price*0.8).toFixed(2)}</span>
                            </p>
                            <p>
                                <span>市场价 </span><span>￥${res.goods_price}</span>
                            </p>

                        </div>
                        <div class="newTime_detal">
                            <span>距离结束</span>
                            <span>01</span>：
                            <span>59</span>：
                            <span>35</span>
                        </div>
                    </div>
                </li>
                <li>
                    <p>北京 北京市 海淀区 清河街道 <button>修改</button> </p>
                    <p>有现货</p>
                </li>
                <li>
                    <h4>选择颜色</h4>
                    <span>白</span>
                </li>
                <li>
                    <div>
                        <span>${res.cat_id}</span>
                        <span>
                            <span>${(res.goods_price*0.8).toFixed(2)}元</span>
                        <span style="text-decoration: line-through;">${res.goods_price}元</span>
                        </span>

                    </div>
                    <p>秒杀价：${(res.goods_price*0.8).toFixed(2)}元</p>
                </li>
                <li>
                    <button>积极抢购</button>
                    <button class="join_buy">喜欢</button>
                </li>
                <li>
                    <span>小米自营</span>
                    <span>小米发货</span>
                    <span>7天无理由退货</span>
                    <span>企业信息</span>
                    <span>运费说明</span>
                    <span>售后服务政策</span>
                    <span>7天价格保护</span>
                </li>
            </ul>
        
            ${res.goods_introduce}`;
        $('.news_detail_con').html(str);
    }
})
let oFather = document.querySelector(".news_detail_con");
oFather.addEventListener('click', (e) => {
    e = e || window.event;
    if (e.target.className == "join_buy") {
        // console.log('hellow');
        let coo = getCookie();
        let arr = [];
        let bool;
        if (coo.login == undefined) {
            bool = window.confirm('您还没有登录,点击确定,跳转登录,点击取消,啥也不干');
            if (bool) {
                window.location.href = `./login.html?url=${window.location.href}`;
            }
        } else {
            if (localStorage.getItem('cart') == null) {

                res.num = 1; // 购买数量是1
                res.buy = true; // 默认购买
                arr.push(res);
            } else {
                let bool = true;

                arr = JSON.parse(localStorage.getItem('cart'));
                // console.log(arr)
                arr.forEach((v, k) => {
                    if (v.goods_id === res.goods_id) {
                        v.num++;
                        bool = false;
                    }

                })
                if (bool) {
                    res.num = 1;
                    res.buy = true;
                    arr.push(res);

                }
            }
            // console.log(res);
            localStorage.setItem('cart', JSON.stringify(arr));
            window.location.href = './cart.html';
        }
    }
})