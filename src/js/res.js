let oSubmit = document.querySelector('form input:last-of-type');
let oInputName = document.querySelector('form input:first-of-type');
let oInputPwd = document.querySelector('form input:nth-of-type(2)');
let oInputPwd2 = document.querySelector('form input:nth-of-type(3)');
let oInputNum = document.querySelector('form input:nth-of-type(4)');
const oForm = document.querySelector('form');
let oSpan = document.querySelector('form span');
oSpan.innerHTML = setRandomNum();
oSpan.style.color = setRandomColor();
oSpan.addEventListener('click', () => {
    oSpan.innerHTML = setRandomNum();
    oSpan.style.color = setRandomColor();
})
let userName = oInputName.value;
let userPwd = oInputPwd.value;
let userPwd2 = oInputPwd2.value;
let reg = /^\s*$/
if (userName === '' || userPwd == "" || userPwd2 == "") {
    oSubmit.style.opacity = '0.5';
}
oForm.addEventListener('input', function() {
    if (reg.test(oInputName.value) || reg.test(oInputPwd.value) || reg.test(oInputPwd2.value) || reg.test(oInputNum.value)) {

    } else {
        oSubmit.style.background = "red";
    }
})

oSubmit.onclick = function() {
    oForm.addEventListener('submit', e => {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = true;
        }
    });
    let userName = oInputName.value;
    let userPwd = oInputPwd.value;
    let userPwd2 = oInputPwd2.value;
    if (userName === '' || userPwd == "" || userPwd2 == "") {
        oSubmit.style.opacity = '0.5';
    }
    let nums = oInputNum.value.toUpperCase();
    let str = oSpan.innerText.toUpperCase();
    if (userPwd != userPwd2) {
        window.history.go(0)
        window.confirm('密码不一致请重新输入');
    }
    if (nums != str) {
        window.history.go(0)
        window.confirm('验证码不一致请重新输入');
    }

    $.ajax({
        url: '../server/xm_res.php',
        type: 'post',
        data: {
            userName: userName,
            userPwd: userPwd
        },
        dataType: 'json',
        success: result => {
            if (result.res === 1) {
                window.alert('注册成功,点击确定,跳转首页面')
                window.location.href = './index.html';

            } else {
                window.alert('注册失败,用户名重复,请您重新设定用户名,玩命继续注册');
            }
        }
    })
}