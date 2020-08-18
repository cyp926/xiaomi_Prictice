function setCookie(name, value, time) {
    let tim = new Date();
    let nowTime = tim.getTime() - 8 * 60 * 60 * 1000 + time;

    let newTime = tim.setTime(nowTime);
    let endTime = time == undefined ? "" : tim;
    document.cookie = `${name}=${value};expires=${endTime};path=/`;
}

function getCookie() {
    let strs = document.cookie;
    let arr1 = strs.split('; ');
    let arr2 = {};
    arr1.forEach((v, k) => {
        let arr = v.split('=');
        arr2[arr[0]] = arr[1];
    })
    return arr2;
}

function setRandomNum() {
    let str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIZKLMNOPQRSTUVWXYZ';
    let num = '';
    while (num.length < 6) {
        let ran = parseInt(Math.random() * (str.length));
        if (num.indexOf(str[ran] === -1)) {
            num += str[ran];

        }
    }
    return num;
}

function setRandomColor() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function getComplate(element, type) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element)[type];
    } else {
        element.currentStyle[type];
    }
}

function setMove(element, types, func) {
    let timeObject = {};
    for (let type in types) {

        timeObject[type] = setInterval(() => {
            let inites = type == 'opacity' ? getComplate(element, type) * 100 : parseInt(getComplate(element, type));
            let speed = type == 'opacity' ? (types[type] * 100 - inites) / 5 : (types[type] - inites) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            inites += speed;
            if (type == 'opacity') {
                element.style[type] = inites / 100;
                if (inites == types[type] * 100) {
                    clearInterval(timeObject[type])
                    delete(timeObject[type]);
                }
            } else {
                element.style[type] = inites + 'px';
                if (inites == types[type]) {
                    clearInterval(timeObject[type])
                    delete(timeObject[type]);
                }
            }
            let arr = Object.keys(timeObject);
            if (arr.length === 0) {
                if (func) {
                    func();
                }
            }
        }, 50);
    }
}

function getUrlVal() {
    let str = decodeURI(window.location.search).substr(1);
    // let strNow = str.substr(str.indexOf('?') + 1);
    let arr = str.split('&');
    let arrObj = {}
    arr.forEach((v, k) => {
        let arr2 = v.split('=');
        arrObj[arr2[0]] = arr2[1];
    })
    return arrObj
}