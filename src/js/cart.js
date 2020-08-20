const dataList = JSON.parse(localStorage.getItem('cart'));
const shopFather = document.querySelector('.shoppCart_con>div');
const buyPanel = document.querySelector('.shop_buy');
const selectShop = document.querySelector(".shop_select_list");

setShopView();
setFootShop();
// 页面布局
function setShopView() {
    let str_shop = '';
    dataList.forEach((datas, k) => {

        str_shop += `<ul  class="shop_cont">
                <li>
                    <input class="checkBuy" index=${k} type="checkbox" ${datas.buy?"checked":""} >
                    <div>
                        <img src="${datas.goods_small_logo}" alt="">
                    </div>
                    <p>${datas.goods_name}</p>
                    <span>${datas.goods_price}元</span>
                    <div>
                        <input type="submit" index=${k} class="clearBuy" value="-">
                        <input class="shop_num" type="text" placeholder="${datas.num}">
                        <input type="submit" index=${k} class="addBuy" value="+">
                    </div>
                    <span>${(datas.goods_price*datas.num).toFixed(2)}元</span>
                    <span class="closeGoods" index=${k} >X</span>
                </li>
            </ul>`;

    });
    shopFather.innerHTML = str_shop;
}
// 选择按钮逻辑
selectShop.addEventListener("click", function(e) {
    e = e || window.event;
    if (e.target.className == 'yesCH') {
        $(".checkBuy").prop("checked", true);
        dataList.forEach((v, k) => {
            dataList[k].buy = true;
        });
        $(".shop_select_list div:nth-of-type(2)>input").prop("checked", false)
        $(".shop_select_list div:nth-of-type(3)>input").prop("checked", false)
    } else if (e.target.className == 'noCH') {
        dataList.forEach((v, k) => {
            dataList[k].buy = false;
        });
        // console.log(dataList[1].buy);
        $(".checkBuy").prop("checked", false);
        $(".shop_select_list div:nth-of-type(1)>input").prop("checked", false)
        $(".shop_select_list div:nth-of-type(3)>input").prop("checked", false)
    } else if (e.target.className == 'nyCH') {
        $('.checkBuy').each((key, item) => {
            dataList[key].buy = !$(item).prop("checked");
            $(item).prop("checked", !$(item).prop("checked"));
            $(".shop_select_list div:nth-of-type(2)>input").prop("checked", false)
            $(".shop_select_list div:nth-of-type(1)>input").prop("checked", false)
        })

    }
    localStorage.setItem("cart", JSON.stringify(dataList));
    setFootShop()
})
const shopPanel = document.querySelectorAll(".shop_cont");

// 加减删除逻辑
$(shopFather).click(function(e) {

    e = e || window.event;
    if (e.target.tagName == "INPUT") {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = true;
        }
    }
    if (e.target.className == "addBuy") {
        let n = e.target.getAttribute("index")
        if (dataList[n].num < dataList[n].goods_number) {
            dataList[n].num += 1;
        } else {
            window.confirm("库存不足，客观只有这些啦！！")
            dataList[n].num = dataList[n].goods_number

        }
    } else if (e.target.className == "clearBuy") {
        let n = e.target.getAttribute("index")
        console.log(dataList[n].num)
        if (dataList[n].num > 1) {
            dataList[n].num -= 1;
        } else {
            let bool = window.confirm("您确定要移出此商品吗？");
            if (bool) {
                dataList.splice(n, 1);
            }
        }
    } else if (e.target.className == "closeGoods") {
        let n = e.target.getAttribute("index")
        dataList.splice(n, 1);
    } else if (e.target.className == "checkBuy") {
        let num = e.target.getAttribute("index");
        dataList[num].buy = !dataList[num].buy;
    }
    localStorage.setItem("cart", JSON.stringify(dataList));
    setShopView();
    setFootShop();
})

function setFootShop() {
    let numBuy = 0;
    let moneys = 0;
    let nums = 0;
    $(".shop_select_list div>input").click(
        function() {
            console.log("11")
        }
    )
    $('.checkBuy').each((key, item) => {
        if ($(item).prop("checked")) {
            let datas = dataList[key]
            numBuy += datas.num;
            moneys += parseFloat((datas.goods_price * datas.num).toFixed(2));
        }
        nums += dataList[key].num;
    })
    str = `
           
            <p>继续购买 共<span>${nums}</span> 件商品，已选<span>${numBuy}</span> 件</p>
            <p>共计：<span>${moneys}</span>元</p>
            <button class="${numBuy<=0?"buyList":''}">去结算</button>
            <div   class="${numBuy>0?"buyListShow":''}">
                请勾选需要结算的商品
                <span></span>
            </div>`;
    buyPanel.innerHTML = str;
}