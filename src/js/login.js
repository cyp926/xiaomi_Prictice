let oSubmit = document.querySelector('form input:last-of-type');
let oInput1 = document.querySelector('form input:first-of-type');
let oInput2 = document.querySelector('form input:nth-of-type(2)');
const oForm = document.querySelector('form');
oSubmit.onclick = function() {
    oForm.addEventListener('submit', e => {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = true;
        }
    });
    let userName = oInput1.value;
    let userPwd = oInput2.value;

    $.ajax({
        url: '../server/xm_login.php',
        type: 'post',
        data: {
            userName: userName,
            userPwd: userPwd
        },
        dataType: 'json',
        success: result => {
            if (result.res === 1) {
                setCookie('login', 1, 7 * 24 * 60 * 60 * 1000);
                let url = decodeURI(window.location.search).substr(decodeURI(window.location.search).indexOf('=') + 1);
                window.alert('登录成功,点击确定,跳转首页面');

                window.location.href = url || './index.html';
            } else {
                window.alert('登录失败,请您检查账号密码,继续玩命登录');
            }
        }
    })
}