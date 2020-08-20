var valObj = getUrlVal();
getAjaxVal(valObj, 1, 9)

function getAjaxVal(obj, page, line) {
    $.ajax({
        url: '../server/xm_list.php',
        data: {
            cat_one_id: obj.cat_once_id,
            page: page,
            line: line
        },
        type: 'get',
        dataType: 'json',
        success: (result) => {
            console.log(result);
            let arr = result;
            let str = '';
            arr.forEach((v, k) => {
                // Math.toFIxed(2)
                str += ` 
                    <li>
                        <div class="goods_img">
                            <img src="${v.goods_big_logo}" alt="">
                        </div>
                        <div class="goods_right">
                            <h3>${v.goods_name}</h3>
                            <p>${v.cat_one_id},${v.cat_two_id}${v.cat_three_id}</p>
                            <div class="price">
                                <span class="now_price">${v.goods_price}元</span>
                                <span class="old_price">${(v.goods_price*0.8).toFixed(2)}元</span>
                            </div>

                            <div class="goods_btns">
                                <button class="goods_pay">相似商品</button>
                                <button class="goods_shop"> <a style="color:#f2f2f2;" href="./detail.html?goods_id=${v.goods_id}" class="btn btn-danger" role="button">查看详情</a></button>
                            </div>
                        </div>
                    </li>
                `;
            })
            $('.goods_list>ul').html(str);
            //插件内置函数
            $('.M-box').pagination({
                mode: 'fixed', // 固定分页按钮的数量
                pageCount: result[0].sumPage, // 查询结果中的总页数
                totalData: result[0].row, // 查询结果中的数据中数据
                current: result[0].page, // 当前页数
                showData: line, // 每页的数据数量
                count: 5, // 设定总显示的页数
                coping: true, // 显示首页末页
                isHide: true, // 总页数为0或者1时,隐藏控件
                keepShowPN: true, // 显示上一页下一页
                homePage: '首页', // 首页的文本内容
                endPage: '末页', // 首页的文本内容
                prevContent: '上一页',
                nextContent: '下一页',
                callback: function(res) {
                    // 在插件定义的回调函数中,形参里存储数据信息

                    // 获取点击分页显示按钮,要显示的页数信息
                    // 插件定义好的,直接使用就可以了
                    let p = res.getCurrent();

                    // 可以根据新的页数,发起新的请求,渲染生成新的页面内容

                    getAjaxVal(valObj, p, 9);
                }
            });
        }
    });
}