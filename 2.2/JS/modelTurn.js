function turnDark() {
    document.getElementById('backImg').src = 'https://tva3.sinaimg.cn/large/008fwlZJgy1gvh7s6mwy9j60zk0np45202.jpg';//变为暗夜星空图片
    document.getElementById('imgMoon').style.display = 'none';//月亮图片
    document.getElementById('imgSun').style.display = 'block';//日光图片
    document.getElementById('imgBlack').style.display = 'none';//图片下载黑
    document.getElementById('imgWhite').style.display = 'block';//图片下载白

}
function turnBright() {
    document.getElementById('backImg').src = 'https://baotangguo.cn:8081/';//变为bing图片
    document.getElementById('imgSun').style.display = 'none';//日光图片
    document.getElementById('imgMoon').style.display = 'block';//月亮图片
    document.getElementById('imgWhite').style.display = 'none';//图片下载白
    document.getElementById('imgBlack').style.display = 'block';//图片下载黑
}
function jump1() {
    window.location.href = 'jump/1.html'
}
function jump2() {
    window.location.href = 'jump/2.html'
}
//动态显示时间
setInterval(getCurrentTime, 1000);//每1000毫秒调用函数
function getCurrentTime() {
    let now = new Date();
    let hhour = now.getHours();//时
    let mminute = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes();//分
    //let ssecond = now.getSeconds() > 10 ? now.getSeconds() : '0' + now.getSeconds();//秒
    document.getElementById('newTime').innerHTML = hhour + ':' + mminute;
}