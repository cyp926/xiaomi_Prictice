let oFooter_Bto = document.querySelector('.footer_bottoms>ul:first-of-type');
let strList = "小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 | 小米商城用户协议 | 问题反馈 | Select Location ";
let str1 = " ";
let strArr1 = strList.split("| ");
strArr1.forEach((v) => {
    str1 += `<li> <a href=" ">${v}</a> </li>`;
})

oFooter_Bto.innerHTML = str1;

let oFooter_Bto2 = document.querySelector('.footer_bottoms ul:nth-of-type(2)');
let strList2 = `©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告
增值电信业务许可证 网络食品经营备案 京食药网食备201810017   食品经营许可证
违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试`;
let strArr2 = strList2.split(" ");
let str2 = '';
strArr2.forEach((v) => {
    str2 += `<li> <a href=" ">${v}</a> </li>`;
})

oFooter_Bto2.innerHTML = str2;