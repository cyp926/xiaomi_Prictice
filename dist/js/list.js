"use strict";var valObj=getUrlVal();function getAjaxVal(o,n,t){$.ajax({url:"../server/xm_list.php",data:{cat_one_id:o.cat_once_id,page:n,line:t},type:"get",dataType:"json",success:function(o){console.log(o);var a="";o.forEach(function(o,n){a+=' \n                    <li>\n                        <div class="goods_img">\n                            <img src="'.concat(o.goods_big_logo,'" alt="">\n                        </div>\n                        <div class="goods_right">\n                            <h3>').concat(o.goods_name,"</h3>\n                            <p>").concat(o.cat_one_id,",").concat(o.cat_two_id).concat(o.cat_three_id,'</p>\n                            <div class="price">\n                                <span class="now_price">').concat(o.goods_price,'元</span>\n                                <span class="old_price">').concat((.8*o.goods_price).toFixed(2),'元</span>\n                            </div>\n\n                            <div class="goods_btns">\n                                <button class="goods_pay">相似商品</button>\n                                <button class="goods_shop"> <a style="color:#f2f2f2;" href="./detail.html?goods_id=').concat(o.goods_id,'" class="btn btn-danger" role="button">查看详情</a></button>\n                            </div>\n                        </div>\n                    </li>\n                ')}),$(".goods_list>ul").html(a),$(".M-box").pagination({mode:"fixed",pageCount:o[0].sumPage,totalData:o[0].row,current:o[0].page,showData:t,count:5,coping:!0,isHide:!0,keepShowPN:!0,homePage:"首页",endPage:"末页",prevContent:"上一页",nextContent:"下一页",callback:function(o){var n=o.getCurrent();getAjaxVal(valObj,n,9)}})}})}getAjaxVal(valObj,1,9);