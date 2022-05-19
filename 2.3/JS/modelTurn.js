function turnDark() {
    var dateDay = new Date().getDate();
    var dateMonth = new Date().getMonth();
    if (dateMonth >= 0, dateMonth < 2) {
        document.getElementById('backImg').src = "https://s4.ax1x.com/2022/02/25/bEUC79.jpg";//红灯笼背景
    } else {
        document.getElementById('backImg').src = 'https://s4.ax1x.com/2022/03/02/b3gDIO.jpg';//变为暗夜星空图片
    }
    document.getElementById('imgMoon').style.display = 'none';//月亮图片
    document.getElementById('imgSun').style.display = 'block';//日光图片
    document.getElementById('imgBlack').style.display = 'none';//图片下载黑
    document.getElementById('imgWhite').style.display = 'block';//图片下载白

}
//变暗
function turnBright() {
    document.getElementById('backImg').src = 'https://baotangguo.cn:8081/';//变为bing图片
    document.getElementById('imgSun').style.display = 'none';//日光图片
    document.getElementById('imgMoon').style.display = 'block';//月亮图片
    document.getElementById('imgWhite').style.display = 'none';//图片下载白
    document.getElementById('imgBlack').style.display = 'block';//图片下载黑
}
//变亮
function download1() {
    window.location.href = "https://baotangguo.cn:8081/";//跳转网页（当前标签页）
}
//跳转bing每日一图
function download2() {
    window.location.href = "https://s4.ax1x.com/2022/03/02/b3gDIO.jpg";
}
//跳转黑夜图片
var widthh = document.body.clientWidth;
setInterval(getWidth, 100);
function getWidth() {
    widthh = document.body.clientWidth;
    if (widthh <= 500) {
        document.getElementById("backImg").style.width = "400%";
        document.getElementById("backImg").style.left = "-100%";
    } else {
        if (widthh <= 768) {
            document.getElementById("backImg").style.width = "200%";
            document.getElementById("backImg").style.left = "-50%";
        } else {
            if (widthh <= 1024) {
                document.getElementById("backImg").style.width = "108%";
                document.getElementById("backImg").style.left = "-4%";
            } else {
                document.getElementById("backImg").style.width = "103%";
                document.getElementById("backImg").style.left = "-1%";
            }
        }
    }
}