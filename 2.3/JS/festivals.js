var dateDay = new Date().getDate();
var dateMonth = new Date().getMonth();
var dateYear = new Date().getFullYear();
var dates = new Date().getTime();
console.log(dateDay);//输出到控制台
console.log(dateMonth);
console.log(dateYear);
console.log(dates);
//获取时间

let now = new Date();
let hhour = now.getHours();//时
let mminute = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes();//分
document.getElementById('newTime').innerHTML = hhour + ':' + mminute;
setInterval(getCurrentTime, 1000);//每1000毫秒调用函数
function getCurrentTime() {
    let now = new Date();
    let hhour = now.getHours();//时
    let mminute = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes();//分
    let ssecond = now.getSeconds() > 10 ? now.getSeconds() : '0' + now.getSeconds();//秒
    document.getElementById('newTime').innerHTML = hhour + ':' + mminute;
    document.getElementById('timeh').innerHTML = "当前时间为" + hhour + ':' + mminute + ":" + ssecond;
}

//动态显示时间

var dateA = dates - 1645977600000;//这个减去的是2022年2月28日星期一00:00的时间戳
console.log("dateA减去时间戳:\ " + dateA);
dateA = parseInt(dateA / 86400000);//除以86400000并取整可以将毫秒直接转化成天数
console.log("dateA取整:\ " + dateA);
dateA = dateA % 7;
console.log("dateA取余数:\ " + dateA);
if (dateA == 0) {
    var dateDetail = "星期一";//判定是星期几
}
if (dateA == 1) {
    var dateDetail = "星期二";
}
if (dateA == 2) {
    var dateDetail = "星期三";
}
if (dateA == 3) {
    var dateDetail = "星期四";
}
if (dateA == 4) {
    var dateDetail = "星期五";
}
if (dateA == 5) {
    var dateDetail = "星期六";
}
if (dateA == 6) {
    var dateDetail = "星期日";
}
var dateMonth2 = dateMonth + 1;//因为月份会比真实月份少一月，所以要加一
document.getElementById("detailT").innerHTML = dateYear + "年" + "\ \ " + dateMonth2 + "月" + dateDay + "日" + "\ \ " + dateDetail;//输出到页面内
console.log(dateDetail);

if (dateMonth == 0) {
    if (dateDay == 1) {
        newYear();//元旦
    }
}
if (dateMonth >= 0, dateMonth < 2) {
    springFestival();//春节
}

//判定
function keyDown() {
    var value = event.keyCode;//按键值
    var key = String.fromCharCode(event.keyCode);//判断是什么按键，虽然我没看懂这两行
    console.log(" 键: " + key + "值: " + value);//检测按键和按键值
    if (value == 221) {
        var turnOn = prompt('输入触发节日');
        if (turnOn == "清空") {
            document.getElementById('backImg').src = "https://baotangguo.cn:8081/";//切换背景至初始背景
            document.getElementById('ssk').placeholder = "\ \ 输入并搜索……";//切换搜索框内文本
            console("清除成功")
            alert("已回复初始状态！");
        }
        if (turnOn == "元旦节") {
            newYear();
        }
        if (turnOn == "春节") {
            springFestival();
        }
    }
}
//调试使用，输入对应节日代号触发
function newYear() {//定义newYear
    alert('老阿特祝您元旦快乐，给您拜年啦\!\n\ \ 老阿特还会继续更新的哦\!');//弹出窗口
}
//元旦节
function springFestival() {
    document.getElementById('backImg').src = "https://s4.ax1x.com/2022/02/25/bEUC79.jpg";//红灯笼背景
    document.getElementById('ssk').placeholder = "\ \ 输入并搜索，春节快乐呀~";//搜索框内文字
    document.getElementById('imgMoon').style.display = 'none';//月亮图片
    document.getElementById('imgSun').style.display = 'block';//日光图片
    document.getElementById('imgBlack').style.display = 'none';//图片下载黑
    document.getElementById('imgWhite').style.display = 'block';//图片下载白
}
//春节